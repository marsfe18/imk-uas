"use client"
import React from 'react';
import { Anchor, Avatar, Card, Col, Divider, Image, Row, Table } from 'antd';
import { VerticalAlignBottomOutlined, FileOutlined } from '@ant-design/icons';
import type { TableColumnsType, TableProps } from 'antd';
import Link from 'next/link';
import Judul2 from '@/components/Tittle/judul2';
import Judul3 from '@/components/Tittle/judul3';

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
    },
    {
        title: 'Nama Pejabat',
        dataIndex: 'pejabat',
    },
    {
        title: 'Alamat Kantor',
        dataIndex: 'alamat',
    },
    {
        title: 'Email',
        dataIndex: 'email',
    },
    {
        title: 'Phone',
        dataIndex: 'phone',
    },
    {
        title: 'Fax',
        dataIndex: 'fax',
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
        <div className='px-6 md:px-10 xl:px-16 max-w-[1440px] mx-auto flex flex-col md:flex-row justify-center'>
            <div className=" bg-white text-black pb-10 md:pr-10">
                <header id='alamat1'>
                    <Judul2 text='Profil' />
                    <h2 className="text-gray-700 text-heading2 lg:text-heading1">Alamat Kementrian</h2>
                    <Divider style={{ borderTop: '4px solid #8A8817' }} />
                </header>
                <div id='alamat1'>
                    <Judul3 text='Alamat Atase' />
                    <Table
                        columns={columns}
                        dataSource={data}
                        onChange={onChange}
                        scroll={{ x: true }}
                    />
                    <Divider />
                </div>
                <div id='alamat2'>
                    <Judul3 text='Alamat Pusat dan Daerah' />
                    <div className='w-full'>
                        <p className='text-md pb-2'>Daftar Alamat Kantor Pertanian baik Kantor lingkup Kementerian  Pertanian maupun Satuan Kerja Perangkat Daerah pada sektor Pertanian,  Perkebunan, Peternakan dan Ketahanan Pangan dapat diunduh di bawah.</p>

                        <Link href={'https://ppid.pertanian.go.id/doc/1/Buku_Daftar_Alamat_2023.pdf'}>
                            <Card bordered={true} style={{ border: '1px solid #d9d9d9', borderRadius: 16 }}>
                                <Row style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <div style={{ display: 'flex' }}>
                                        <FileOutlined style={{ fontSize: '36px', color: 'gray' }} />
                                        <Col content='center'><h2 className='ml-3 text-2xl font-normal'>Unduh Alamat Kantor Kementrian</h2></Col>
                                    </div>
                                    <div className='flex flex-col justify-center items-center'>
                                        <VerticalAlignBottomOutlined style={{ fontSize: '36px', color: 'gray' }} />
                                        <p className='text-md'>200 Kb</p>
                                    </div>
                                </Row>
                            </Card>
                        </Link>
                    </div>
                    <div className='pt-4'>
                        <Image src='/alamat.png' />
                    </div>
                </div>
            </div>
            <div className="anchor-profile mt-10">
                <Anchor
                    offsetTop={64}
                    items={[
                        {
                            key: 'alamat1',
                            href: '#alamat1',
                            title: <p className='text-lg'>Alamat Atase</p>,
                        },
                        {
                            key: 'alamat2',
                            href: '#alamat2',
                            title: <p className='text-lg'>Alamat Pusat dan Daerah</p>,
                        },
                    ]}
                />
            </div>
        </div>

    )
};

export default App;