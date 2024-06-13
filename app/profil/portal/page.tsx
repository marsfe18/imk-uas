"use client"
import React from 'react';
import {
    ArrowRightOutlined
} from '@ant-design/icons';
import Judul2 from '@/components/Tittle/judul2';
import { Divider } from 'antd';
import Link from 'next/link';

const SejarahPage: React.FC = () => {
    const menuItems = [
        { label: 'Sekretariat Jendral', href: '/sekretariat-jendral' },
        { label: 'Inspektorat Jendral', href: '/inspektorat-jendral' },
        { label: 'Tanaman Pangan', href: '/tanaman-pangan' },
        { label: 'Hortikultura', href: '/hortikultura' },
        { label: 'Peternakan dan Kesehatan Hewan', href: '/peternakan' },
        { label: 'Standarisasi Instrumen Pertanian', href: '/standarisasi' },
        { label: 'Prasarana dan Sarana Pertanian', href: '/prasarana' },
        { label: 'Penyuluhan dan Pengembangan SDM', href: '/penyuluhan' },
    ];

    return (
        <div className='px-6 md:px-10 xl:px-16 max-w-[1440px] mx-auto pb-16 text-gray-700'>
            <header className="">
                <Judul2 text='Profil' />
                <h2 className="text-heading2 lg:text-heading1 mb-2">Portal Unit Kerja</h2>
            </header>
            <Divider style={{ borderTop: '4px solid #8A8817' }} />
            <ul className="space-y-8 pt-5 ">
                {menuItems.map((item, index) => (
                    <li key={index} className="flex items-center text-2xl font-semibold font-inter">
                        <ArrowRightOutlined style={{ marginRight: 20 }} />
                        <Link href={item.href} className="inline-block border-b-2 border-gray-700 pb-2">
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SejarahPage;