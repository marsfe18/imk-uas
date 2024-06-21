"use client"
import React from 'react';
import { AppstoreOutlined, BookOutlined, FieldTimeOutlined } from '@ant-design/icons';
import { Divider, Empty, Space, Tabs } from 'antd';
import MaxWLayout from '../MaxWLayout';
import { searchBuku, searchFilterBerita, searchPengumuman } from '@/utils/searchGlobal';
import CardBeritaMain from '@/components/Card/cardBeritaMain';
import SearchInput from '../../components/Pencarian/searchInput';
import BeritaKontenList from '../../components/Pencarian/BeritaKontenList';
import PenguKontenList from '@/components/Pencarian/PenguKontenList';
import FilterBerita from '../../components/Filter/pencarian/filterBerita';
import BukuKontenList from '@/components/Pencarian/BukuKontenList';
import MagazineKontenList from '@/components/Pencarian/MagazineKontenList';

const { TabPane } = Tabs;

const UjiCoba = ({ searchParams }: {
    searchParams: { [key: string]: string | string[] | undefined }
}) => {
    const query = String(searchParams?.query || "");

    const listPengumuman = searchPengumuman(query);
    // const listBuku = searchBuku(query);
    // const listMagazine = searchMagazine(query);

    return (
        <MaxWLayout>
            <div className=''>
                <div className="">
                    <header id=''>
                        <h2 className="text-heading2 lg:text-heading1 mb-2">Pencarian</h2>
                    </header>
                    <SearchInput initialQuery={query} />
                    <div className='mt-3'>
                        <Tabs
                            defaultActiveKey="1"
                        >
                            <TabPane
                                tab={
                                    <span className="flex items-center text-lg md:text-2xl font-semibold md:h-16 md:px-3">

                                        Berita Kementrian
                                    </span>
                                }
                                key="1"
                            >
                                <BeritaKontenList query={query} />
                            </TabPane>
                            {/* <TabPane
                                tab={
                                    <span className="flex items-center text-lg md:text-2xl font-semibold md:h-16">

                                        Pengumuman ({listPengumuman.length})
                                    </span>
                                }
                                key="2"
                            >
                                <div className="container mx-auto">
                                    <PenguKontenList listPengu={listPengumuman} query={query} />
                                </div>
                            </TabPane> */}
                            <TabPane
                                tab={
                                    <span className="flex items-center text-lg md:text-2xl font-semibold md:h-16">
                                        Buku
                                    </span>
                                }
                                key="3"
                            >
                                <div className="container mx-auto">

                                    <BukuKontenList query={query} />
                                </div>
                            </TabPane>
                            <TabPane
                                tab={
                                    <span className="flex items-center text-lg md:text-2xl font-semibold md:h-16">

                                        E-Magazine
                                    </span>
                                }
                                key="4"
                            >
                                <div className="container mx-auto">
                                    <MagazineKontenList query={query} />
                                </div>
                            </TabPane>
                        </Tabs>
                    </div>
                </div>
            </div>
        </MaxWLayout>
    );

};

export default UjiCoba;
