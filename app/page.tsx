import ImageWatch from "@/components/ImageWatch";
import Image from "next/image";

export default async function Home() {
  return (
    <>
      <ImageWatch />
      <Image
        src="/copper.svg"
        alt=""
        width={240} height={0}
        className="absolute top-0 left-0 w-[240px] h-auto m-4 pointer-events-none"
      />
      <Image
        src="/mym_black.svg"
        alt=""
        width={500} height={0}
        className="absolute top-0 right-0 w-[400px] h-auto m-4 -events-none"
      />
    </>
  );
}
