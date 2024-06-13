"use client"
import React, { useState } from 'react';
import { Anchor, Button, Col, Divider, Flex, Image, Row, Tabs } from 'antd';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sejarah from '../sejarah';
// import './index.css'

const { TabPane } = Tabs;

const SejarahPage: React.FC = () => {
    const [targetOffset, setTargetOffset] = useState<number>();
    return (
        <div className='px-6 md:px-10 xl:px-16 max-w-[1440px] mx-auto flex flex-col md:flex-row justify-center'>
            <div className=" bg-white text-black pb-10">
                <Sejarah />
            </div>
        </div>
    );
};

export default SejarahPage;
