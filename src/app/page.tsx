'use client';

import Link from "next/link";
import Header from './header'
import Image from "next/image";
import bg from "../assets/9117392.jpg"
import img1 from "../assets/star-fairy-9396_512.gif"
import img2 from "../assets/bird-3441_512.gif"
import img3 from "../assets/WASM-logo_icon-02.png"
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
          {/* <button className='relative rounded-[0.5rem] cursor-pointer group font-medium no-underline flex p-3 w-[158px] h-[158px] text-white items-center justify-center content-center focus:outline-none'>
            <span className='absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-[#256fc4] to-[#256fc4] dark:from-[rgb(30,30,30)] dark:to-[rgb(30,30,30)]'  ></span>
            <span className='h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-[#256fc4] to-[#256fc4] dark:from-[rgb(30,30,30)] dark:to-[rgb(30,30,30)]'></span>
            <span className='absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-[#256fc4] to-[#256fc4] dark:from-[rgb(30,30,30)] dark:to-[rgb(30,30,30)]'></span>
            <span className='absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-[#256fc4] from-[#256fc4] dark:from-[rgb(30,30,30)] dark:to-[rgb(30,30,30)]'></span>
            <span className='relative'>All Models</span>
          </button> */}
        </Link>
        {/* <div className="flex flex-col">
        <span className="text-[30px] ml-[30px] font-bold dark:text-white">
        Example Models
        </span>
        <div className="mb-32 mt-[50px] grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left cursor-pointer">
        <Link href="/whisper"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
        <h2 className={`mb-3 text-2xl font-semibold dark:text-white`}>
        Whisper{" "}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
        -&gt;
        </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50 dark:text-white`}>
        Transcribe audio in the browser using rust/wasm with an audio file.
        </p>
        </Link>
        
        <Link
        href="/bert"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        rel="noopener noreferrer"
        >
        <h2 className={`mb-3 text-2xl font-semibold dark:text-white`}>
        BERT{" "}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
        -&gt;
        </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50 dark:text-white`}>
        Running sentence embeddings and similarity search in the browser using the Bert Model compiled to Wasm.
        </p>
        </Link>
        
        <Link
        href="/blip"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        rel="noopener noreferrer"
        >
        <h2 className={`mb-3 text-2xl font-semibold dark:text-white`}>
        BLIP {" "}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
        -&gt;
        </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50 dark:text-white`}>
        BLIP Image Captioning running in the browser, a minimalist ML framework for Rust.
        </p>
        </Link>
        
        <Link
        href="/llama"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
        <h2 className={`mb-3 text-2xl font-semibold dark:text-white`}>
        Llama2.c{" "}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
        -&gt;
        </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance dark:text-white`}>
        Llama2.c is Andrey Karpathy's C implementation of the Llama 2 LLM model in C.
        </p>
        </Link>
        </div>
      </div> */}
      </main>
    </>
  );
}
