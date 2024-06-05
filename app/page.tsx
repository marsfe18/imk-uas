"use client";
import React from 'react';
import { Button, Card, Col, Layout, Row, Typography, Space } from 'antd';
import { FacebookOutlined, TwitterOutlined, InstagramOutlined } from '@ant-design/icons';
import Hero from "@/components/Hero";
import BarTab from "@/components/BarTab";
import GaleriFoto from '@/components/Galeri';
import Kalender from '@/components/Tanggal';

const { Title, Text } = Typography;
const { Header, Content, Footer } = Layout;

export default function Home() {
  return (
    <Layout>
      <Hero />
      <BarTab />
      <GaleriFoto />
      <Kalender />
    </Layout>
  );
}
