"use client"
import React, { useState } from 'react';
import { Anchor, Button, Col, Divider, Flex, Image, Row, Tabs } from 'antd';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Judul2 from '@/components/Tittle/judul2';
// import './index.css'

const { TabPane } = Tabs;

const LambangPage: React.FC = () => {
    const [targetOffset, setTargetOffset] = useState<number>();
    return (
        <div className='px-6 md:px-10 xl:px-16 max-w-[1440px] mx-auto'>
            <div className=" bg-white text-black pb-10">
                <header className="judul-galeri">
                    <Judul2 text='Profil' />
                    <h2 className=" text-gray-700  text-heading2 md:text-heading1">Lambang Organisasi</h2>
                </header>
                <Divider style={{ borderTop: '4px solid #8A8817' }} />
                <Image src='/lambang.jpg'></Image>
                <ul className="list-none list-inside text-xl leading-relaxed mb-4 mt-4 space-y-3">
                    <li>
                        <strong>Tunas</strong>: Menggambarkan pengertian biologis dari seluruh kegiatan yang dikelola oleh Kementerian Pertanian, kecuali manusia sebagai benda hidup.
                    </li>
                    <li>
                        <strong>Warna Hijau Muda</strong>: Melambangkan pengertian kehidupan.
                    </li>
                    <li>
                        <strong>Lingkaran Berwarna Merah</strong>: Melambangkan pengertian kesatuan.
                    </li>
                    <li>
                        <strong>Lingkaran Bersudut Lima Berwarna Coklat</strong>: Melambangkan pengertian dari lima unsur pelaksana utama (tugas-tugas pokok Kementerian Pertanian).
                    </li>
                    <li>
                        <strong>Warna Dasar Kuning Emas</strong>: Sebagai lambang kemegahan, baik untuk panji, vandel, serta bentuk lainnya.
                    </li>
                    <li>
                        <strong>Air Berwarna Biru Muda</strong>: Mempunyai pengertian sebagai lambang keagungan.
                    </li>
                </ul>
                <p className="text-lg leading-relaxed">
                    Unduh Lambang Kementerian Pertanian Resmi{' '}
                    <a
                        href="#"
                        className="text-blue-600 hover:text-blue-800"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        di sini
                    </a>
                    .
                </p>
            </div>
            {/* <div className="anchor-profile mt-10 pr-4">
                <Anchor
                    offsetTop={64}
                    targetOffset={targetOffset}
                    items={[
                        {
                            key: 'sejarah',
                            href: '#sejarah',
                            title: <p className='text-lg'>Sejarah Kementrian</p>,
                        },
                        {
                            key: 'visi-misi',
                            href: '#visi-misi',
                            title: <p className='text-lg'>Visi dan Misi</p>,
                            children: [
                                {
                                    key: 'visi',
                                    href: '#visi',
                                    title: <p className='text-lg'>Visi</p>,
                                },
                                {
                                    key: 'visi2',
                                    href: '#visi2',
                                    title: <p className='text-lg'>Makna dari Visi</p>,
                                },
                                {
                                    key: 'misi',
                                    href: '#misi',
                                    title: <p className='text-lg'>Misi</p>,
                                },
                                {
                                    key: 'misi2',
                                    href: '#misi2',
                                    title: <p className='text-lg'>Makna dari Misi</p>,
                                },
                            ]
                        },
                        {
                            key: 'tugas',
                            href: '#tugas',
                            title: <p className='text-lg'>Tugas</p>,
                        },
                        {
                            key: 'fungsi',
                            href: '#fungsi',
                            title: <p className='text-lg'>Fungsi</p>,
                        },
                    ]}
                />
            </div> */}
        </div>
    );
};

export default LambangPage;
