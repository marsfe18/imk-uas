"use client"
import React from 'react';
import { Card, Col, Row, Tabs } from 'antd';
import Link from 'next/link';
import { VerticalAlignBottomOutlined, FileOutlined } from '@ant-design/icons';
import { Document, Page } from 'react-pdf';


const SejarahPage: React.FC = () => {
    return (
        <div className='flex justify-center mb-2'>
            <div className="bg-white py-4 px-4" style={{ maxWidth: '55rem' }}>
                <header className="judul-galeri mb-7">
                    <h2 className="text-lg sm:text-xl md:text-2xl text-gray-700 font-semibold mb-2">Informasi Publik</h2>
                    <h2 className="text-3xl sm:text-3xl md:text-4xl text-gray-700 font-bold mb-4">Surat Keteragan Daftar Informasi Publik</h2>
                </header>
                <div className="border-2 border-gray-400 mb-3 rounded-lg">
                    <Link href={'https://ppid.pertanian.go.id/doc/1/Buku_Daftar_Alamat_2023.pdf'} style={{ width: '100%' }}>
                        <Card >
                            <Row style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <div style={{ display: 'flex' }}>
                                    <FileOutlined style={{ fontSize: '36px', color: 'gray' }} />
                                    <Col content='center'><h2 className='ml-3 text-2xl font-normal'>Unduh alamat lengkap</h2></Col>
                                </div>
                                <VerticalAlignBottomOutlined style={{ fontSize: '36px', color: 'gray' }} />
                            </Row>
                        </Card>
                    </Link>
                </div>
                {/* <div>
                    <Document file={'./sk_dip.pdf'}>
                        <Page pageNumber={1} />
                    </Document>
                </div> */}
                <div className="border-2 border-gray-400 mb-3 rounded-lg">
                    <Link href={'https://ppid.pertanian.go.id/doc/1/Buku_Daftar_Alamat_2023.pdf'} style={{ width: '100%' }}>
                        <Card >
                            <Row style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <div style={{ display: 'flex' }}>
                                    <FileOutlined style={{ fontSize: '36px', color: 'gray' }} />
                                    <Col content='center'><h2 className='ml-3 text-2xl font-normal'>Unduh alamat lengkap</h2></Col>
                                </div>
                                <VerticalAlignBottomOutlined style={{ fontSize: '36px', color: 'gray' }} />
                            </Row>
                        </Card>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SejarahPage;
