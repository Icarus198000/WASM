'use client';

import Image from "next/image";
import DarkModeButton from './ThemeSwitcher'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="flex gap-3 justify-center items-center">
          <Image
            src="/commune.gif"
            alt="commune Logo"
            className="dark:invert"
            width={100}
            height={100}
            priority
          />
          <p className="fixed left-0 top-0 dark:text-gray-500 flex w-full justify-center pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto lg:p-4 text-[35px]">
            Commune-WASM
          </p>
        </div>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <DarkModeButton />
          <span
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0 ml-[20px]"
          >
            By{" "}
            <span className=" text-[30px] font-bold uppercase">Icarus</span>
          </span>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-[30px] ml-[20px] font-bold">
          Import Models
        </span>
        <div className="flex justify-center items-center gap-[30px] mt-[30px]">
          <input type="text" className='py-2 px-3 block w-[900px] border-[1px] font-thin border-solid outline-none border-gray-300 rounded-lg text-[17px] focus:border-gray-500 dark:focus:border-[#4f4f4f] disabled:opacity-50 disabled:pointer-events-none bg-none dark:bg-[rgb(18,18,18)] dark:border-[#303030] dark:text-gray-200 dark:placeholder:text-[#a7a7a7]' placeholder='Input hugging face model url' />
          <button className='relative rounded-[0.5rem] cursor-pointer group font-medium no-underline flex p-2 text-white items-center justify-center content-center focus:outline-none'>
            <span className='absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-[#256fc4] to-[#256fc4] dark:from-[rgb(30,30,30)] dark:to-[rgb(30,30,30)]'  ></span>
            <span className='h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-[#256fc4] to-[#256fc4] dark:from-[rgb(30,30,30)] dark:to-[rgb(30,30,30)]'></span>
            <span className='absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-[#256fc4] to-[#256fc4] dark:from-[rgb(30,30,30)] dark:to-[rgb(30,30,30)]'></span>
            <span className='absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-[#256fc4] from-[#256fc4] dark:from-[rgb(30,30,30)] dark:to-[rgb(30,30,30)]'></span>
            <span className='relative'>Import</span>
          </button>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-[30px] ml-[30px] font-bold">
          Example Models
        </span>
        <div className="mb-32 mt-[50px] grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <a
            href=""
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target=""
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Whisper{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Transcribe audio in the browser using rust/wasm with an audio file.
            </p>
          </a>

          <a
            href=""
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target=""
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              BERT{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Running sentence embeddings and similarity search in the browser using the Bert Model compiled to Wasm.
            </p>
          </a>

          <a
            href=""
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target=""
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              BLIP {" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              BLIP Image Captioning running in the browser, a minimalist ML framework for Rust.
            </p>
          </a>

          <a
            href=""
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target=""
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Llama2.c{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
              Llama2.c is Andrey Karpathy's C implementation of the Llama 2 LLM model in C.
            </p>
          </a>
        </div>
      </div>
    </main>
  );
}
