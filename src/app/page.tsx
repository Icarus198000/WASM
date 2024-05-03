'use client';

import Link from "next/link";
import Header from './header'
import Image from "next/image";
import bg from "../assets/9117392.jpg"
import img1 from "../assets/star-fairy-9396_512.gif"
import img2 from "../assets/bird-3441_512.gif"
import bg2 from "../assets/ai-technology-microchip-background-digital-transformation-concept.jpg"
import img6 from "../assets/avatars-xYW5PYDkLVNVG4FH-FBLxqQ-t500x500.jpg"
import img4 from "../assets/flower-4347_512.gif"
import img5 from "../assets/castle-4354_512.gif"


export default function Home() {

  return (
    <>
      <div className="fixed h-screen w-screen">
        <Image
          src={bg}
          alt="bg"
          className=" w-screen h-screen"
        />
      </div>
      <main className="flex min-h-screen flex-col items-center justify-center gap-[150px] p-10 z-20">
        <Header />
        <div className="flex w-[1600px] mt-[-100px]">
          <div className=" flex flex-col items-start">
            <Image src={img1} className="w-[40%] rounded-tl-[30px] ml-[400px]" alt="" />
            <Image src={img4} className="w-[60%] rounded-bl-[30px] ml-[400px]" alt="" />
          </div>
          <div className=" flex flex-col items-end">
            <Image src={img5} className="w-[60%] rounded-tr-[30px] mr-[400px]" alt="" />
            <Image src={img2} className="w-[40%] rounded-br-[30px] mr-[400px]" alt="" />
          </div>
        </div>
        <Link href="/modelPage" className=' flex justify-center items-center absolute top-[51%] left-[46.6%]'>
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-100 opacity-75"></span>
          <Image src={img6} className=" w-[130px] rounded-[50%]" alt="" />
        </Link>
      </main>
    </>
  );
}
