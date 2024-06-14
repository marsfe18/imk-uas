"use client"
import React, { useEffect, useState } from 'react';
import PenguCard from '@/components/pengumuman/penguCard1';
import { dataPengumuman } from '@/components/pengumuman/dataPengu';
import { DatePicker } from 'antd';
import { PagesController } from './pageController';
import { useRouter } from 'next/navigation';
import FilterBerita from '@/components/Filter/filter';
import { defaultPage, defaultPerPage } from '@/utils/constants';

export default function PengumumanPage({ searchParams }: {
    searchParams: { [key: string]: string | string[] | undefined }
}) {
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

    if (page < 1 || page > dataPengumuman.length / defaultPerPage) return <div>invalid page</div>

    return (
        <div>
            <div className='md:flex px-2 sm:px-20 lg:justify-center'>
                <div className='py-4 mb-2 lg:w-1/5 hidden md:block'>
                </div>

                <header className="judul-galeri w-full md:w-4/5 lg:w-4/5">
                    <h2 className="text-lg sm:text-xl md:text-xl text-gray-700 mb-2">Publikasi</h2>
                    <h2 className="text-3xl sm:text-3xl md:text-4xl text-gray-700 font-bold mb-2">Pengumuman</h2>
                </header>

            </div>
            <div className='md:flex px-2 sm:px-20 md:justify-center'>
                <div className="filter-berita py-4 pr-4 lg:w-1/5">
                    <FilterBerita />
                </div>

                <div className="bg-white py-4 mb-2 w-full md:w-4/5 lg:w-4/5">
                    <div id='visi' className=''>
                        <div>
                            {
                                dataPengumuman.slice((page - 1) * defaultPerPage, page * defaultPerPage).map((news, index) => (
                                    <PenguCard data={news} key={index} />
                                ))
                            }
                        </div>
                    </div>
                    <PagesController page={page} router={router} />
                </div>
            </div>
        </div>
    )
};
