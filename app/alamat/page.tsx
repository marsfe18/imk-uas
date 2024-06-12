"use client"
import React from 'react';
import { Avatar, Card, Col, Divider, Row, Table } from 'antd';
import { VerticalAlignBottomOutlined, FileOutlined } from '@ant-design/icons';
import type { TableColumnsType, TableProps } from 'antd';
import Link from 'next/link';

interface DataType {
    key: React.Key;
    atase: string;
    pejabat: string;
    alamat: string;
    email: String;
    phone: String;
    fax: String;
}

const columns: TableColumnsType<DataType> = [
    {
        title: 'Atase',
        dataIndex: 'atase',
        // width: '30%',
    },
    {
        title: 'Nama Pejabat',
        dataIndex: 'pejabat',
        // sorter: (a, b) => a.age - b.age,
    },
    {
        title: 'Alamat Kantor',
        dataIndex: 'alamat',
        // width: '40%',
    },
    {
        title: 'Email',
        dataIndex: 'email',
    },
    {
        title: 'Phone',
        dataIndex: 'phone',
        // width: '40%',
    },
    {
        title: 'Fax',
        dataIndex: 'fax',
        // width: '40%',
    },
];

const data: DataType[] = [
    {
        key: '1',
        atase: 'KBRI WASHINGTON DC',
        pejabat: 'Danang Budi Santoso',
        alamat: '2020 Massechusetts Avenue, NW Washington DC 20036',
        email: 'attani@embasyofindonesia.org',
        phone: '202-7755340',
        fax: '202-7755343'
    },
    {
        key: '2',
        atase: 'KBRI TOKYO, JEPANG',
        pejabat: 'Muhammda Muharram H.',
        alamat: '2-9 Higashi-Gotanda 5-Chome Shinagawa-Ku Tokyo 141-0022 Jepang ',
        email: '',
        phone: '(+81) 70-1288-7784',
        fax: ''
    },
    {
        key: '3',
        atase: 'KBRI BRUSSELS, BELGIA',
        pejabat: 'Arief Rachman',
        alamat: 'Boulevard de la Woluwe 38 B-1200 Bruusels Belgium',
        email: 'agriculture.attache@embassyofindonesia.eu ',
        phone: '+32.2.779.09.15',
        fax: '+32.2.772.82.10'
    },
    {
        key: '4',
        atase: 'KBRI ROMA, ITALIA',
        pejabat: 'Rini Indiyati',
        alamat: 'VIA CAMPANIA, 53-55 - ROMA - ITALIA 00187',
        email: 'attani.roma@kemlu.go.id',
        phone: '(+39) 3473 501 678',
        fax: ''
    },
];

const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
};

const App: React.FC = () => {
    return (
        <div className='flex justify-center mb-10'>
            <Row style={{ maxWidth: '65rem', padding: '0 1rem' }}>
                <div className="">
                    <header className="judul-galeri">
                        <h2 className="text-lg sm:text-xl md:text-xl text-gray-700 mb-2">Profil</h2>
                        <h2 className="text-3xl sm:text-3xl md:text-4xl text-gray-700 font-bold mb-4">Alamat Atase</h2>
                    </header>
                </div>
                <Table
                    columns={columns}
                    dataSource={data}
                    onChange={onChange}
                    scroll={{ x: true }} // Tambahkan properti scroll dengan x: true
                    style={{}}
                />
                <Divider />
                <header className="judul-galeri">

                    <h2 className="text-3xl sm:text-3xl md:text-4xl text-gray-700 font-bold mb-4">Alamat Kantor Pusat dan Daerah</h2>
                </header>
                <Link href={'https://ppid.pertanian.go.id/doc/1/Buku_Daftar_Alamat_2023.pdf'} style={{ width: '100%' }}>
                    <Card bordered >
                        <Row style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex' }}>
                                <FileOutlined style={{ fontSize: '36px', color: 'gray' }} />
                                <Col content='center'><h2 className='ml-3 text-2xl font-normal'>Unduh alamat lengkap</h2></Col>
                            </div>
                            <VerticalAlignBottomOutlined style={{ fontSize: '36px', color: 'gray' }} />
                        </Row>
                    </Card>
                </Link>
            </Row>
        </div>

    )
};

export default App;