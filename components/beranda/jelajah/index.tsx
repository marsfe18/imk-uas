
import React from 'react';
import {
    ArrowRightOutlined
} from '@ant-design/icons';

interface JelajahiDataProps {
    // Anda dapat menambahkan props yang diperlukan di sini
}

const JelajahiData: React.FC<JelajahiDataProps> = () => {
    const menuItems = [
        'Penduduk, tenaga kerja, dan kemiskinan pertanian',
        'Basis data pertanian',
        'Informasi harga komoditas',
        'Ekspor Impor',
    ];

    return (
        <div className="px-6 md:px-10 xl:px-16 py-16 max-w-[1440px] mx-auto my-0 tracking-wide">
            <header className=''>
                <h2 className="text-white text-3xl sm:text-3xl md:text-4xl font-bold mb-4">Jelajahi Data</h2>
            </header>
            <ul className="space-y-8 pt-5 text-lg md:text-xl">
                {menuItems.map((item, index) => (
                    <li key={index} className="flex items-center text-[23px] font-semibold font-inter">
                        <ArrowRightOutlined style={{ marginRight: 20 }} />
                        <span className="inline-block border-b pb-2">{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default JelajahiData;