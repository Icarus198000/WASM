'use client';

import Image from "next/image";
import DarkModeButton from './ThemeSwitcher'

export default function ImportModelPage() {
    return (
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
          <p className="fixed left-0 top-0 dark:text-gray-300 flex w-full justify-center pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto lg:p-4 text-[35px]">
            Commune-WASM
          </p>
        </div>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <DarkModeButton />
          <span
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0 ml-[20px] dark:text-white"
          >
            By{" "}
            <span className=" text-[30px] font-bold uppercase dark:text-gray-300">Icarus</span>
          </span>
        </div>
      </div>

    );
}
