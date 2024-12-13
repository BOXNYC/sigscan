import ImageWatch from "@/components/ImageWatch";
import Image from "next/image";

export default async function Home() {
  return (
    <>
      <ImageWatch />
      <Image
        src="/copper.svg"
        alt=""
        width={375} height={0}
        className="absolute top-[50px] left-[50px] w-[375px] h-auto m-4 pointer-events-none"
      />
      <Image
        src="/mym_black.svg"
        alt=""
        width={532} height={0}
        className="absolute top-[120px] right-[100px] w-[532px] h-auto m-4 -events-none"
      />
    </>
  );
}
