import ImageWatch from "@/components/ImageWatch";
import Image from "next/image";

export default async function Home() {
  return (
    <>
      <ImageWatch />
      <Image
        src="/sharpie.png"
        alt=""
        width={300} height={0}
        className="absolute top-0 left-0 w-[300px] h-auto object-contain"
      />
      <h2 className="px-6 py-4 uppercase absolute top-0 right-0 text-3xl font-family-['Helvetica Neue']">Leave your mark</h2>
    </>
  );
}
