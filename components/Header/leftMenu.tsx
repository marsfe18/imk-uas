import React from 'react';
import { Menu, Tooltip } from 'antd';
import { MenuProps } from 'antd';
import { AppstoreOutlined, HomeOutlined, InsertRowAboveOutlined, BookOutlined, SearchOutlined, TeamOutlined, DatabaseOutlined } from '@ant-design/icons';
import Link from 'next/link';

interface LeftMenuProps {
    mode: MenuProps['mode'];
}

const LeftMenu: React.FC<LeftMenuProps> = ({ mode }) => {
    const items: MenuProps['items'] = [
        {
            label: (
                <Link href="/">Beranda</Link>
            ),
            key: 'beranda',
            icon: <HomeOutlined />,
        },
        {
            label: 'Profil',
            key: 'profil',
            icon: <TeamOutlined />,
            children: [
                {
                    type: 'group',
                    label: 'Kementrian',
                    children: [
                        {
                            label: <Link href="/profil#sejarah">Sejarah</Link>,
                            key: 'sejarah'
                        },
                        {
                            label: <Link href="/profil#visi-misi">Visi</Link>,
                            key: 'visi'
                        },
                        {
                            label: <Link href="/profil#tugas">Tugas dan Fungsi</Link>,
                            key: 'tugas'
                        },
                        {
                            label: <Link href="/struktur">Struktur</Link>,
                            key: 'struktur'
                        },
                        {
                            label: <Link href="/lambang">Lambang</Link>,
                            key: 'lambang'
                        },
                        {
                            label: <Link href="/data-pegawai">Data Pegawai</Link>,
                            key: 'data-pegawai'
                        },
                        {
                            label: <Link href="/unit-kerja">Unit Kerja</Link>,
                            key: 'unit-kerja'
                        },
                    ]
                },

                {
                    type: 'divider',
                },
                {
                    key: 'alamat',
                    label: <Link href="/alamat">Alamat</Link>,
                },
            ]
        },
        {
            label: 'Kinerja',
            key: 'kinerja',
            icon: <AppstoreOutlined />,
            children: [
                { label: 'Rencana Kerja', key: 'rencana-kerja' },
                { label: 'Anggaran', key: 'anggaran' },
                { label: 'Laporan', key: 'laporan' },
                { label: 'Indeks Kepuasan', key: 'indeks-kepuasan' },
                { label: 'Keuangan', key: 'keuangan' },
                { label: 'Capaian Kinerja', key: 'capaian-kinerja' },
            ]
        },
        {
            label: <Link href="/basis-data">Basis Data</Link>,
            key: 'basis-data',
            icon: <DatabaseOutlined />,
        },
        {
            label: 'Publikasi',
            key: 'publikasi',
            icon: <InsertRowAboveOutlined />,
            // children: [
            //     {
            //         type: 'group',
            //         label: 'Item 1',
            //         children: [
            //             { label: 'Option 1', key: 'setting:1' },
            //             { label: 'Option 2', key: 'setting:2' },
            //         ],
            //     },
            //     {
            //         type: 'group',
            //         label: 'Item 2',
            //         children: [
            //             { label: 'Option 3', key: 'setting:3' },
            //             { label: 'Option 4', key: 'setting:4' },
            //         ],
            //     },
            // ],
        },
        {
            key: 'informasi',
            label: 'Informasi Publik',
            icon: <BookOutlined />,
            children: [
                { label: <Link href="/informasi-publik/sk-dip">SK DIP</Link>, key: 'sk-dip' },
                { label: 'Laporan Kekayaan', key: 'lhk' },
                { label: 'PPID', key: 'ppid' },
                { label: 'Pengaduan', key: 'pengaduan' },
                {
                    label: 'PMK', key: 'pmk', type: 'group',
                    children: [
                        { label: 'Buku Saku', key: 'buku-saku' },
                        { label: 'Materi Pengendalian', key: 'pengendalian' },
                    ]
                },
            ]
        }
    ];

    return <Menu
        style={{ fontSize: '16px', fontFamily: 'sans-serif' }}
        mode={mode} items={items} />;
};

export default LeftMenu;
