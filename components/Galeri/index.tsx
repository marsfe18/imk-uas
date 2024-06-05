import React from 'react';
import { Button, Col, Divider, Flex, Row, Tabs } from 'antd';
import Foto from './Foto';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css'

const { TabPane } = Tabs;

const GaleriFoto: React.FC = () => {
    var settings = {
        dots: true,
        infinite: true,
        padding: 12,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="tab px-4 pb-10 sm:px-6 md:px-16 lg:px-36  bg-gray-100">
            <header className="judul-galeri">
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-700 font-bold mb-4 sm:mb-4 md:mb-10">Galeri Foto</h2>
            </header>
            <div>
                <div className="slider-container">
                    <Slider {...settings}>
                        <Foto />
                        <Foto />
                        <Foto />
                        <Foto />
                        <Foto />
                        <Foto />
                        <Foto />
                        <Foto />
                    </Slider>
                </div>
            </div>
            <Divider style={{}} />
        </div>
    );
};

export default GaleriFoto;