import React from 'react';
import Image from 'next/image';
import BeritaCarousel from '@/components/beranda/berita/carousel';
// import CardBerita from '@/components/beranda/pengumuman';
import { dataBerita } from '@/utils/dataBerita';
import CardBerita from '@/components/Card/cardBerita';

const ImageComponent = () => {
    return (
        <div className='mt-20 bg-white'>
            {/* {
                dataBerita.slice(0, 2).map((news, index) => (
                    <CardBerita data={news} />
                ))
            } */}
            <BeritaCarousel />

        </div>
    );
};

export default ImageComponent;