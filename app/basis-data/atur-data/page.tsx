"use client"
import {Cascader, CascaderProps, Divider, Table, TableColumnsType} from 'antd';
import React from 'react';
import { Select, DatePicker, Button } from 'antd';
import {BasdatType} from "@/utils/dataType";
import Judul3 from "@/components/Tittle/judul3";
import {dataBasdat} from "@/utils/dataBasdat";
import dayjs from "dayjs";

const { Option } = Select;
const { RangePicker } = DatePicker;

interface Option {
    value: string;
    label: string;
    children?: Option[];
}

// Options buat indikator
const options: Option[] = [
    {
        value: 'tanaman_pangan',
        label: 'Tanaman Pangan',
        children: [
            {
                value: 'jagung',
                label: 'Jagung',
            },
            {
                value: 'kacang_hijau',
                label: 'Kacang Hijau',
            },
            {
                value: 'padi',
                label: 'Padi',
            },
        ],
    },
    {
        value: 'hortikultura',
        label: 'Hortikultura',
        children: [
            {
                value: 'adenium',
                label: 'Adenium',
            },
            {
                value: 'aglaonema',
                label: 'Aglaonema',
            },
            {
                value: 'alpukat',
                label: 'Alpukat',
            },
        ],
    },
    {
        value: 'perkebunan',
        label: 'Perkebunan',
        children: [
            {
                value: 'cengkeh',
                label: 'Cengkeh',
            },
            {
                value: 'jambu_mete',
                label: 'Jambu Mete',
            },
            {
                value: 'kakao',
                label: 'Kakao',
            },
        ],
    },
    {
        value: 'peternakan',
        label: 'Peternakan',
        children: [
            {
                value: 'ayam_buras',
                label: 'Ayam Buras',
            },
            {
                value: 'ayam_ras_pedaging',
                label: 'Ayam Ras Pedaging',
            },
            {
                value: 'babi',
                label: 'Babi',
            },

        ],
    },
];

// options buat level
const options2: Option[] = [
    {
        value: 'nasional',
        label: 'Nasional',
        children: [
            {
                value: 'provinsi',
                label: 'Provinsi',
                children: [
                    {
                        value: 'jakarta',
                        label: 'DKI Jakarta',
                        children: [
                            {
                                value: 'kepseribu',
                                label: 'Kab. Kepulauan Seribu',
                            },
                            {
                                value: 'jakbar',
                                label: 'Kota Jakarta Barat',
                            },
                            {
                                value: 'jakpus',
                                label: 'Kota Jakarta Pusat',
                            },
                            {
                                value: 'jaksel',
                                label: 'Kota Jakarta Selatan',
                            },
                        ],
                    },
                    {
                        value: 'jawabarat',
                        label: 'Jawa Barat',
                        children: [
                            {
                                value: 'bandung',
                                label: 'Kota Bandung',
                            },
                            {
                                value: 'bekasi',
                                label: 'Kota Bekasi',
                            },
                            {
                                value: 'depok',
                                label: 'Kota Depok',
                            },
                            {
                                value: 'bogor',
                                label: 'Kab. Bogor',
                            },
                        ],
                    },
                    {
                        value: 'jawatimur',
                        label: 'Jawa Timur',
                        children: [
                            {
                                value: 'surabaya',
                                label: 'Kota Surabaya',
                            },
                            {
                                value: 'malang',
                                label: 'Kota Malang',
                            },
                            {
                                value: 'sidoarjo',
                                label: 'Kab. Sidoarjo',
                            },
                            {
                                value: 'gresik',
                                label: 'Kab. Gresik',
                            },
                        ],
                    },
                ],
            }
        ],
    }
];

const onChange: CascaderProps<Option>['onChange'] = (value) => {
    console.log(value);
};

const CascaderWithParentAllowed: React.FC = () => (
    <Cascader
        options={options2}
        onChange={onChange}
        size="large"
        defaultValue={['nasional']}
        changeOnSelect  // This Cascader allows selecting parent options
    />
);

const CascaderWithoutParentAllowed: React.FC = () => (
    <Cascader
        options={options}
        onChange={onChange}
        size="large"
        defaultValue={['tanaman_pangan']}
        // No changeOnSelect prop provided, default behavior is leaf node selection only
    />
);

const columns: TableColumnsType<BasdatType> = [
    {
        title: 'Komoditas',
        dataIndex: 'komoditas',
    },
    {
        title: 'Satuan',
        dataIndex: 'satuan',
    },
    {
        title: '2020',
        dataIndex: '2020',
    },
    {
        title: '2021',
        dataIndex: '2021',
    },
    {
        title: '2022',
        dataIndex: '2022',
    },
    {
        title: '2023',
        dataIndex: '2023',
    },
    {
        title: '2024',
        dataIndex: '2024',
    },
];

const handleResetFilter = () => {
    window.location.reload();
};

const handleSearchData = () => {
    // Alert function for "Cari Data" button
    alert('Preview - fitur cari data yang sebenarnya belum diimplementasikan.');
};

const BasisDataPage: React.FC = () => {
    return (
        <div>
            <header >
                <h2 className="text-heading2 md:text-heading1 mb-2">Basis Data Statistik Pertanian</h2>
            </header>
            <Divider style={{ borderTop: '4px solid #8A8817' }} />

            <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 w-full">
                    <div className="flex flex-grow items-center space-x-2 md:w-1/3">
                        <label className="text-lg font-semibold">Atur data berdasarkan</label>
                        <Select size="large" style={{ minWidth: 150 }} defaultValue="komoditas">
                            <Option value="komoditas">Komoditas</Option>
                            <Option value="indikator">Indikator</Option>
                            <Option value="lokasi">Lokasi</Option>
                        </Select>
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 w-full">

                    <div className="flex flex-col flex-grow md:w-1/3">
                        <label className="mb-2 text-lg font-semibold">Indikator</label>
                        <CascaderWithoutParentAllowed />
                    </div>

                    <div className="flex flex-col flex-grow md:w-1/3">
                        <label className="mb-2 text-lg font-semibold">Level</label>
                        <CascaderWithParentAllowed />
                    </div>

                    <div className="flex flex-col flex-grow md:w-1/3">
                        <label className="mb-2 text-lg font-semibold">Tanggal</label>
                        <RangePicker picker="year" size='large' defaultValue={[
                            dayjs('2020-01-01', 'YYYY-MM-DD'),
                            dayjs('2024-01-01', 'YYYY-MM-DD')
                        ]}/>
                    </div>

                </div>
                <div className="flex justify-end ">
                    <div className='flex space-x-4'>
                        <Button size="large" onClick={handleResetFilter}>Reset Filter</Button>
                        <Button type="primary" size="large" onClick={handleSearchData}>Cari Data</Button>
                    </div>
                </div>
            </div>

            <div id='alamat1' className='w-auto'>
                <Judul3 text='Luas Panen Tanaman Pangan Nasional berdasarkan Komoditas (2020-2024)' />
                <Table
                    columns={columns}
                    dataSource={dataBasdat}
                    scroll={{ x: true }}
                    pagination={false}
                />
                <Divider />
            </div>
        </div>
    );
};

export default BasisDataPage;
