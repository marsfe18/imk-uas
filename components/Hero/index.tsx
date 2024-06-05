import React from 'react';
import { Button, Divider, Layout, Typography } from 'antd';
import Link from 'next/link';
import Paragraph from 'antd/es/typography/Paragraph';
import Search, { SearchProps } from 'antd/es/input/Search';
import CustomSearch from './search';

const { Content } = Layout;
const { Title } = Typography;

const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

const LandingPage = () => {

    return (
        <section
            id="home"
            className="relative z-10 overflow-hidden bg-white pb-16 pl-8 pr-8 pt-[100px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
            style={{
                backgroundImage: `url('/hero2.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',

            }}
        >
            <div className="absolute inset-0 bg-black opacity-60"></div> {/* Overlay lebih gelap */}
            <div className="container mx-auto relative z-20">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full px-4">
                        <div className="mx-auto max-w-[800px] text-center">
                            <h1 className="mb-5 text-5xl font-bold leading-tight text-white sm:text-6xl sm:leading-tight md:text-6xl md:leading-tight">
                                Kementerian Pertanian
                            </h1>
                            <p className="mb-12 text-xl text-gray-100"> {/* Teks lebih cerah */}
                                Pertanian yang Maju, Mandiri dan Modern untuk Terwujudnya Indonesia Maju yang Berdaulat, Mandiri dan Berkepribadian berlandaskan Gotong Royong.
                            </p>
                            <CustomSearch onSearch={onSearch} />
                            <div className="bg-black bg-opacity-35 p-4 rounded-3xl shadow-lg max-w-[70%] mx-auto">
                                <h2 className="text-md font-semibold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Aksi Cepat</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                    <Link href="/publikasi">
                                        <div className="hover:bg-black hover:bg-opacity-45 rounded-lg py-3 px-4 flex justify-center items-center">
                                            <span className="text-white font-semibold text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>Rencana Kerja</span>
                                        </div>
                                    </Link>
                                    <Link href="/basis-data">
                                        <div className="hover:bg-black hover:bg-opacity-45 rounded-lg py-3 px-4 flex justify-center items-center">
                                            <span className="text-white font-semibold text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>Basis Data</span>
                                        </div>
                                    </Link>
                                    <Link href="/visi-misi">
                                        <div className="hover:bg-black hover:bg-opacity-45 rounded-lg py-3 px-4 flex justify-center items-center">
                                            <span className="text-white font-semibold text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>Visi Misi</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </section>


    );
};

export default LandingPage;