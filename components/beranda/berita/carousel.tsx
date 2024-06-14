"use client"

import React from 'react';
import { Carousel, ConfigProvider } from 'antd';
import { dataBerita } from '@/components/Card-Berita/dataBerita';
import BeritaGambar from './gambar';

const BeritaCarousel: React.FC = () => (
    <ConfigProvider
        theme={{
            components: {
                Carousel: {
                    arrowSize: 54,
                    arrowOffset: 16,
                    dotHeight: 12,
                    dotWidth: 12,
                    dotActiveWidth: 16,
                    dotOffset: 24
                },
            }, token: {

            }
        }}
    >
        <div className="w-full max-w-[649px] mx-auto">
            <Carousel
                arrows
                infinite={true}
                autoplay
            >
                {
                    dataBerita.slice(0, 4).map((news, index) => (
                        <div key={index}><BeritaGambar berita={news} /></div>
                    ))
                }
            </Carousel>
        </div>
    </ConfigProvider>
);

export default BeritaCarousel;