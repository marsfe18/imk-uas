"use client"
import CardGlobal from '@/components/Card/cardGlobal';
import Judul2 from '@/components/Tittle/judul2';
import { searchGlobalData } from '@/utils/searchGlobal';
import { FileOutlined } from '@ant-design/icons';
import { Anchor, Divider, Empty } from 'antd';
import MaxWLayout from '../MaxWLayout';
import FilterBerita from '@/components/Filter/filter';


const SearchResults = ({ searchParams }: {
    searchParams: { [key: string]: string | string[] | undefined }
}) => {
    const query = String(searchParams?.query)
    return (
        <MaxWLayout>
            <div className='flex flex-col md:flex-row min-h-[60vh]'>
                <div className="md:pr-10 w-9/12">
                    <header id=''>
                        {/* <Judul2 text='Profil' /> */}
                        <h2 className="text-heading2 lg:text-heading2">Hasil Pencarian : {query}</h2>
                    </header>
                    <Divider style={{ borderTop: '4px solid #8A8817' }} />

                    {searchGlobalData(query).length > 0 ? (
                        searchGlobalData(query).map((item, index) => (
                            <div key={index} className='mt-4'>
                                <CardGlobal
                                    judul={item.judul}
                                    gambar={item.gambar}
                                    tanggal={item.tanggal}
                                    tipe={item.tipe}
                                />
                            </div>
                        ))
                    ) : (

                        <Empty description="Tidak ada hasil yang ditemukan" />
                    )}
                </div>
                <div className="anchor-profile hidden md:block w-3/12">
                    <FilterBerita />
                </div>
            </div>
        </MaxWLayout>
    );
};

export default SearchResults;
