'use client'

import { getFiles } from "@/app/actions/fs";
import Image from "next/image";
import { useEffect, useState } from "react";

const dirPath = '/signatures';
const checkDelay = 2000;
export default function ImageWatch() {
    const [newImagePath, setNewImagePath] = useState<string | undefined>(undefined);
    useEffect(() => {
        const readDir = async () => {
            if ( !window ) return;
            const files = (await getFiles(dirPath)).map((file: string) => `${dirPath}/${file}`);
            const prevFilesString = window.localStorage.getItem('signatureFiles');
            if ( !prevFilesString ) {
                localStorage.setItem('signatureFiles', JSON.stringify(files));
            } else {
                const prevFiles = JSON.parse(prevFilesString);
                const newFiles = files.filter((file: string) => !prevFiles.includes(file));
                if (prevFiles.length != files.length) localStorage.setItem('signatureFiles', JSON.stringify(files));
                if ( newFiles.length > 0 ) {
                    setNewImagePath(newFiles[0]);
                }
            }
            setTimeout(readDir, checkDelay);
        }
        setTimeout(readDir, checkDelay);
    }, []);
    return (
        <>
            {!!newImagePath && <Image
                unoptimized
                src={newImagePath}
                className="absolute w-screen h-screen object-contain left-0 top-0"
                width={0} height={0}
                alt=""
                style={{
                    filter: `grayscale(100) contrast(2) brightness(1.1)`,
                    rotate: `${-5}deg`
                }}
            />}
        </>
    );
}