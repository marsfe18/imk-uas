"use client"
import React, { useState } from 'react';
import Card3 from '@/components/Card-Berita/card3';
import { dataBerita } from '@/components/Card-Berita/dataBerita';
import { DatePicker } from 'antd';
import { PagesController } from './pageController';
import { useRouter } from 'next/navigation';
import FilterBerita from '@/components/Filter/filter';
import Judul1 from '@/components/Tittle/judul1';
import { defaultPage, defaultPerPage } from '@/utils/constants';

const BeritaPage = ({ searchParams }: {
    searchParams: { [key: string]: string | string[] | undefined }
}) => {
    const router = useRouter();
    const page: number = Number(searchParams?.page ?? defaultPage);
    const per_page: number = Number(searchParams?.per_page ?? defaultPerPage);

    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        console.log(e);
    };

    const [isFilterVisible, setIsFilterVisible] = useState(false);
    const { RangePicker } = DatePicker;

    const toggleFilter = () => {
        setIsFilterVisible(!isFilterVisible);
    };

    // const [activeLink, setActiveLink] = useState('');

    if (page < 1 || page > dataBerita.length / defaultPerPage) return <div>invalid page</div>

    return (
        <div>
            <div className='md:flex px-2 sm:px-28 lg:justify-center'>
                <div className='py-4 mb-2 lg:w-3/12 hidden md:block xl:w-2/12'>
                </div>

                <header className="judul-galeri w-full md:w-9/12 xl:w-10/12">
                    <h2 className="text-lg sm:text-xl md:text-xl text-gray-700 mb-2">Publikasi</h2>
                    <Judul1 text='Berita Terkini' />
                </header>


            </div>
            <div className='md:flex md:justify-center px-2 sm:px-28 '>
                <div className="filter-berita py-4 pr-4 lg:w-3/12 xl:w-2/12">
                    <FilterBerita />
                </div>
                <div className="bg-white py-4 mb-2 w-full md:w-9/12 xl:w-10/12">
                    {
                        // console.log(dataBerita);
                        dataBerita.slice((page - 1) * defaultPerPage, page * defaultPerPage).map((news, index) => (
                            <div key={index} className='border mb-2 rounded-lg'><Card3 data={news} /></div>
                        ))
                    }
                    <PagesController page={page} router={router} />
                </div>
                {/* <div className="w-1/5 hidden md:block">
                </div> */}
            </div>
        </div>
    )
};

export default BeritaPage;
