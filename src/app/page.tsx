'use client';

import ImportModelPage from './importModelPage'
import Link from "next/link";
import Header from './header'

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <Header />
      <ImportModelPage />
      <Link href="/modelPage" className=' w-full flex justify-center items-center'>
        <button className='relative rounded-[0.5rem] cursor-pointer group font-medium no-underline flex p-3 w-[300px] text-white items-center justify-center content-center focus:outline-none'>
          <span className='absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-[#256fc4] to-[#256fc4] dark:from-[rgb(30,30,30)] dark:to-[rgb(30,30,30)]'  ></span>
          <span className='h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-[#256fc4] to-[#256fc4] dark:from-[rgb(30,30,30)] dark:to-[rgb(30,30,30)]'></span>
          <span className='absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-[#256fc4] to-[#256fc4] dark:from-[rgb(30,30,30)] dark:to-[rgb(30,30,30)]'></span>
          <span className='absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-[#256fc4] from-[#256fc4] dark:from-[rgb(30,30,30)] dark:to-[rgb(30,30,30)]'></span>
          <span className='relative'>Load More Models</span>
        </button>
      </Link>
      <div className="flex flex-col">
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
      </div>
    </main>
  );
}
