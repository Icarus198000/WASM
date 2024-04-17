"use client";

import { useEffect, useState } from "react";
import { Pagination } from 'antd';
import axios from "axios";
import ModuleItem, { ModuleItemPropsType } from "../../component/module-item/index";
import SearchBar from "../../component/search-bar/search-bar";
import React from 'react'
import Link from "next/link";
import Header from '../header'

export default function ModelPage() {
  const [searchString, setSearchString] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;
  const [loadedModules, setLoadedModules] = useState<ModuleItemPropsType[]>([]);
  const [displayedModules, setDisplayedModules] = useState<ModuleItemPropsType[]>([]);
  const [filteredModules, setFilteredModules] = useState<ModuleItemPropsType[]>([]);

  useEffect(() => {
    const filtered = searchString
      ? loadedModules.filter((module) =>
        module.id.toLowerCase().includes(searchString.toLowerCase())
      )
      : loadedModules;
    setFilteredModules(filtered);
    if (searchString) {
      setCurrentPage(1);
      updateDisplayedModules(filtered, 1);
    } else {
      updateDisplayedModules(filtered, currentPage);
    }
  }, [searchString, loadedModules]);

  useEffect(() => {
    async function fetchModules() {
      const response = await axios.get('https://huggingface.co/api/spaces?full=full&direction=-1&sort=likes&limit=5000')
      setLoadedModules(response.data);
      updateDisplayedModules(response.data, currentPage);
    }

    fetchModules();
  }, []);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    updateDisplayedModules(filteredModules, page)
  }

  const updateDisplayedModules = (modules: ModuleItemPropsType[], page: number) => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setDisplayedModules(modules.slice(startIndex, endIndex));
  };

  return (
    <div className='flex flex-col items-center justify-between p-10'>
      <Header />
      <Link href='/' className=' absolute top-[65px] left-[100px] cursor-pointer'>
        <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM13.92 16.13H9C8.59 16.13 8.25 15.79 8.25 15.38C8.25 14.97 8.59 14.63 9 14.63H13.92C15.2 14.63 16.25 13.59 16.25 12.3C16.25 11.01 15.21 9.97 13.92 9.97H8.85L9.11 10.23C9.4 10.53 9.4 11 9.1 11.3C8.95 11.45 8.76 11.52 8.57 11.52C8.38 11.52 8.19 11.45 8.04 11.3L6.47 9.72C6.18 9.43 6.18 8.95 6.47 8.66L8.04 7.09C8.33 6.8 8.81 6.8 9.1 7.09C9.39 7.38 9.39 7.86 9.1 8.15L8.77 8.48H13.92C16.03 8.48 17.75 10.2 17.75 12.31C17.75 14.42 16.03 16.13 13.92 16.13Z" fill="#4a5bd9" />
        </svg>
      </Link>
      <div>
        <main className="mt-[30px] flex flex-col items-center justify-center my-auto mx-auto xl:w-[1400px] px-[20px] ">
          <SearchBar
            setSearchString={setSearchString}
            searchString={searchString}
          />
          {displayedModules && displayedModules.length > 0 ? (
            <ul className='mt-[40px] flex justify-center flex-wrap gap-[20px]'>
              {displayedModules.map((item, idx) => (
                <ModuleItem key={idx} id={item.id} cardData={item.cardData} />
              ))}
            </ul>
          ) : (<span className=" flex justify-center items-center text-[30px] dark:text-white">Loading</span>
          )}
        </main>
        <div className=" w-full justify-center items-center mt-[30px]">
          <Pagination current={currentPage} total={filteredModules.length} defaultPageSize={16} showSizeChanger={false} onChange={handlePageChange} className="dark:text-white text-black mx-auto text-center" />
        </div>
      </div>
    </div>
  )
}
