'use client';

import React from "react";
import Header from '../header'
import Link from "next/link";
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'


export default function WhisperModelPage() {

    const people = [
        { name: 'tiny_multilingual (151 MB)' },
        { name: 'tiny_en (151 MB)' },
        { name: 'tiny_quantized_multilingual_q80 (41.5 MB)' },
        { name: 'tiny_en_quantized_q80 (41.8 MB)' },
        { name: 'distil_medium_en (789 MB)' },
    ]
    const [selected, setSelected] = useState(people[0])

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-10">
            <Header />
            <Link href='/' className=' absolute top-[65px] left-[100px] cursor-pointer'>
                <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM13.92 16.13H9C8.59 16.13 8.25 15.79 8.25 15.38C8.25 14.97 8.59 14.63 9 14.63H13.92C15.2 14.63 16.25 13.59 16.25 12.3C16.25 11.01 15.21 9.97 13.92 9.97H8.85L9.11 10.23C9.4 10.53 9.4 11 9.1 11.3C8.95 11.45 8.76 11.52 8.57 11.52C8.38 11.52 8.19 11.45 8.04 11.3L6.47 9.72C6.18 9.43 6.18 8.95 6.47 8.66L8.04 7.09C8.33 6.8 8.81 6.8 9.1 7.09C9.39 7.38 9.39 7.86 9.1 8.15L8.77 8.48H13.92C16.03 8.48 17.75 10.2 17.75 12.31C17.75 14.42 16.03 16.13 13.92 16.13Z" fill="#4a5bd9" />
                </svg>
            </Link>
            <div className="flex flex-col">
                <span className=' text-[30px] dark:text-gray-300'>Whisper - Rust Wasm</span>
                <span className=' text-[20px] mt-[20px] dark:text-gray-300'>Transcribe audio in the browser using rust/wasm with an audio file. This demo uses the OpenAI Whisper models and WASM runtime built with Candle</span>
                <div className="mt-[50px] mb-[0px] flex gap-[50px] justify-start items-center z-10">
                    <span className="dark:text-gray-100">Models Options : </span>
                    <Listbox value={selected} onChange={setSelected}>
                        <div className="relative mt-1">
                            <Listbox.Button className="relative cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                <span className="block truncate">{selected.name}</span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                    <ChevronUpDownIcon
                                        className="h-5 w-5 text-gray-400"
                                        aria-hidden="true"
                                    />
                                </span>
                            </Listbox.Button>
                            <Transition
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                    {people.map((person, personIdx) => (
                                        <Listbox.Option
                                            key={personIdx}
                                            className={({ active }) =>
                                                `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                                }`
                                            }
                                            value={person}
                                        >
                                            {({ selected }) => (
                                                <>
                                                    <span
                                                        className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                            }`}
                                                    >
                                                        {person.name}
                                                    </span>
                                                    {selected ? (
                                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                        </span>
                                                    ) : null}
                                                </>
                                            )}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Transition>
                        </div>
                    </Listbox>
                </div>
                <div className="mt-[50px]">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Upload file</label>
                    <input className="block w-full p-[5px] text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" />
                </div>
                <button className='relative z-[0] w-[300px] rounded-[0.5rem] mt-[50px] cursor-pointer group font-medium no-underline flex p-2 text-white items-center justify-center content-center focus:outline-none'>
                    <span className='absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-[#256fc4] to-[#256fc4] dark:from-[rgb(30,30,30)] dark:to-[rgb(30,30,30)]'  ></span>
                    <span className='h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-[#256fc4] to-[#256fc4] dark:from-[rgb(30,30,30)] dark:to-[rgb(30,30,30)]'></span>
                    <span className='absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-[#256fc4] to-[#256fc4] dark:from-[rgb(30,30,30)] dark:to-[rgb(30,30,30)]'></span>
                    <span className='absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-[#256fc4] from-[#256fc4] dark:from-[rgb(30,30,30)] dark:to-[rgb(30,30,30)]'></span>
                    <span className='relative'>Transcribe Audio</span>
                </button>
                <div className="mt-[50px]">
                    <label className="block mb-2 text-[15px] font-medium text-gray-900 dark:text-white">Transcription</label>
                    <div className="mt-[10px] w-full h-[230px] bg-slate-200 dark:bg-gray-500 flex items-center justify-center">
                        No transcription results yet.
                    </div> 
                </div>
            </div>
        </main>

    );
}
