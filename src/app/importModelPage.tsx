'use client';

export default function ImportModelPage() {
    return (
        <div className="flex flex-col">
            <span className="text-[30px] ml-[20px] font-bold dark:text-white">
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

    );
}
