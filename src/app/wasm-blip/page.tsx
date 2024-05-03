'use client';

import React from "react";
import Header from '../header'
import Link from "next/link";
import ImageUpload from "./imageUpload";
import ImageShow from "./imageshow";
import Image from "next/image";

export default function BlipModelPage() {

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-10">
            <Header />
            <Link href='/' className=' absolute top-[65px] left-[100px] cursor-pointer'>
                <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM13.92 16.13H9C8.59 16.13 8.25 15.79 8.25 15.38C8.25 14.97 8.59 14.63 9 14.63H13.92C15.2 14.63 16.25 13.59 16.25 12.3C16.25 11.01 15.21 9.97 13.92 9.97H8.85L9.11 10.23C9.4 10.53 9.4 11 9.1 11.3C8.95 11.45 8.76 11.52 8.57 11.52C8.38 11.52 8.19 11.45 8.04 11.3L6.47 9.72C6.18 9.43 6.18 8.95 6.47 8.66L8.04 7.09C8.33 6.8 8.81 6.8 9.1 7.09C9.39 7.38 9.39 7.86 9.1 8.15L8.77 8.48H13.92C16.03 8.48 17.75 10.2 17.75 12.31C17.75 14.42 16.03 16.13 13.92 16.13Z" fill="#4a5bd9" />
                </svg>
            </Link>
            <div className="flex flex-col">
                <span className=' text-[30px] dark:text-gray-300 font-bold'>BLIP Image Captioning</span>
                <span className=' text-[20px] mt-[20px] dark:text-gray-300'>BLIP Image Captioning with Wasm - Rust running in the browser using Candle, a minimalist ML framework for Rust.</span>
                <div className="flex justify-center items-center">
                    <ImageUpload />
                    <ImageShow />
                </div>
                <div className="mt-[50px]">
                    <label className="block mb-2 text-[20px] font-medium text-gray-900 dark:text-white">Examples</label>
                    <div className="flex justify-start items-center gap-[50px] ml-[100px]">
                        
                        <Image
                            src="/storage.png"
                            alt="commune Logo"
                            className="dark:invert cursor-pointer"
                            width={100}
                            height={100}
                            priority
                        />
                        <Image
                            src="/varieties.png"
                            alt="commune Logo"
                            className="dark:invert cursor-pointer"
                            width={100}
                            height={100}
                            priority
                        />
                        <Image
                            src="/worldwide.png"
                            alt="commune Logo"
                            className="dark:invert cursor-pointer"
                            width={100}
                            height={100}
                            priority
                        />
                    </div>
                </div>
            </div>
        </main>

    );
}
