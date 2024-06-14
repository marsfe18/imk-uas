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
                            label: <Link href="/profil/sejarah">Sejarah</Link>,
                            key: 'sejarah'
                        },
                        {
                            label: <Link href="/profil/visi-misi">Visi dan Misi</Link>,
                            key: 'visi'
                        },
                        {
                            label: <Link href="/profil/tugas">Tugas dan Fungsi</Link>,
                            key: 'tugas'
                        },
                        {
                            label: <Link href="/profil/struktur">Struktur</Link>,
                            key: 'struktur'
                        },
                        {
                            label: <Link href="/profil/lambang">Lambang</Link>,
                            key: 'lambang'
                        },
                        {
                            label: <Link href="/profil/data-pegawai">Data Pegawai</Link>,
                            key: 'data-pegawai'
                        },
                        {
                            label: <Link href="/profil/portal">Unit Kerja</Link>,
                            key: 'unit-kerja'
                        },
                    ]
                },

                {
                    type: 'divider',
                },
                {
                    key: 'alamat',
                    label: <Link href="/profil/alamat">Alamat</Link>,
                },
            ]
        },
        {
            label: 'Kinerja',
            key: 'kinerja',
            icon: <AppstoreOutlined />,
            children: [
                {
                    label: <Link href="/kinerja/rencana-kerja">Rencana Kerja</Link>,
                    key: 'rencana-kerja'
                },
                {
                    label: <Link href="/kinerja/anggaran">Anggaran</Link>,
                    key: 'anggaran'
                },
                { label: <Link href="/kinerja/laporan">Laporan</Link>, key: 'laporan' },
                { label: <Link href="/kinerja/ikm">Indeks Kepuasan Masyarakat</Link>, key: 'indeks-kepuasan' },
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
