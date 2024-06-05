import React from 'react';
import { Button, Col, Divider, Flex, Image, Row, Tabs } from 'antd';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import './index.css'

const { TabPane } = Tabs;

const SejarahPage: React.FC = () => {
    return (
        <div className='flex justify-center mb-2'>
            <div className=" bg-white py-4 px-4" style={{ maxWidth: '50rem' }}>
                <header className="judul-galeri">
                    <h2 className="text-lg sm:text-xl md:text-xl text-gray-700 mb-2">Profil</h2>
                    <h2 className="text-3xl sm:text-3xl md:text-4xl text-gray-700 font-bold mb-4">Struktur Organisasi</h2>
                </header>
                {/* <p className="text-lg leading-relaxed">
                    Berikut adalah struktur organisasi Kementrian Pertanian
                </p> */}
                <Image src='/struktur.jpg'></Image>
            </div>
        </div>
    );
};

export default SejarahPage;
