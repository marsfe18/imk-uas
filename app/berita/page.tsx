"use client"
import React, { useEffect, useState } from 'react';
import { Anchor, Button, Col, Divider, Input, Pagination, Row } from 'antd';
import Card3 from '@/components/Card-Berita/card3';
import { dataBerita } from '@/components/Card-Berita/dataBerita';
import { DatePicker } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { CSSTransition } from 'react-transition-group';
// import './index.css';
import { PagesController } from './pageController';
import { useRouter } from 'next/navigation';
import FilterBerita from '@/components/BeritaPage/filter';

// default pagination
export const beritaLength = dataBerita.length;
export const defaultPage = 1;
export const defaultPerPage = 5;

export default function beritaPage({ searchParams }: {
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

    if (page < 1 || page > dataBerita.length / defaultPerPage) return <div>invalid page</div>

    return (
        <div>
            <div className='md:flex lg:justify-center'>
                <div className='py-4 px-4 mb-2 lg:w-1/5 hidden md:block'>
                </div>

                <header className="judul-galeri px-4 w-full md:w-4/5 lg:w-3/5" style={{ maxWidth: '55rem' }}>
                    <h2 className="text-lg sm:text-xl md:text-xl text-gray-700 mb-2">Publikasi</h2>
                    <h2 className="text-3xl sm:text-3xl md:text-4xl text-gray-700 font-bold mb-2">Berita Terkini</h2>
                </header>
                <div className="w-1/5 hidden md:block">
                </div>

            </div>
            <div className='md:flex md:justify-center'>
                <FilterBerita />

                <div className="bg-white py-4 px-4 mb-2 w-full md:w-4/5 lg:w-3/5" style={{ maxWidth: '55rem' }}>
                    <div id='visi' className=''>
                        <div>
                            {
                                // console.log(dataBerita);
                                dataBerita.slice((page - 1) * defaultPerPage, page * defaultPerPage).map((news, index) => (
                                    <Card3 key={index} data={news} />
                                ))
                            }
                        </div>
                    </div>
                    <PagesController page={page} router={router} />
                </div>
                <div className="w-1/5 hidden md:block">
                </div>
            </div>
        </div>
    )
};
