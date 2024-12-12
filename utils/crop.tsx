export default function crop(file: string, percentFromTop: number, percentFromBottom: number): Promise<string> {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = image.width;
            canvas.height = image.height;
            const ctx = canvas.getContext('2d');
            if ( !ctx ) {
                reject('Could not get canvas context');
                return;
            }
            ctx.drawImage(image, 0, 0);
            const imageData = ctx.getImageData(0, 0, image.width, image.height);
            const data = imageData.data;
            const top = Math.floor(image.height * percentFromTop);
            const bottom = Math.floor(image.height * (1 - percentFromBottom));
            for (let y = 0; y < image.height; y++) {
                for (let x = 0; x < image.width; x++) {
                    if ( y < top || y > bottom ) {
                        const i = (y * image.width + x) * 4;
                        data[i] = 0;
                        data[i + 1] = 0;
                        data[i + 2] = 0;
                        data[i + 3] = 0;
                    }
                }
            }
            ctx.putImageData(imageData, 0, 0);
            const croppedFile = canvas.toDataURL('image/png');
            resolve(croppedFile);
        }
        image.src = file;
    });
}