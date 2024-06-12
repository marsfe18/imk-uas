"use client";
import React from 'react';
import { Button, Card, Col, Layout, Row, Typography, Space, Divider } from 'antd';
import { FacebookOutlined, TwitterOutlined, InstagramOutlined } from '@ant-design/icons';
import Hero from "@/components/Hero";
import GaleriFoto from '@/components/Galeri';
import Kalender from '@/components/Tanggal';
import BeritaBaru from '@/components/beranda/berita';
import BeritaCarousel from '@/components/beranda/berita/carousel';
import PenguBaru from '@/components/beranda/pengumuman';
import JelajahiData from '@/components/beranda/jelajah';
import PvtBerita from '@/components/beranda/pvt';

const { Title, Text } = Typography;
const { Header, Content, Footer } = Layout;

export default function Home() {
  return (
    <div className='bg-white '>

      <Hero />
      <div className='px-6 md:px-10 xl:px-16 max-w-[1440px] mx-auto my-0'>
        <BeritaBaru />
        <PenguBaru />
        <PvtBerita />
      </div>
      <div className='bg-[#152C30] mt-20'>
        <JelajahiData />

      </div>
    </div>
  );
}
