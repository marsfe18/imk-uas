import React from 'react';
import { Divider, Image } from 'antd';
import Judul2 from '@/components/Tittle/judul2';

const SejarahPage: React.FC = () => {
    return (
        <div className='px-6 md:px-10 xl:px-16 max-w-[1440px] mx-auto'>
            <div className=" bg-white text-black pb-10">
                <header className="judul-galeri">
                    <Judul2 text='Profil' />
                    <h2 className=" text-gray-700 text-heading2 md:text-heading1">Struktur Organisasi</h2>
                </header>
                <Divider style={{ borderTop: '4px solid #8A8817' }} />
                <Image src='/struktur.jpg'></Image>
                <ul className="list-decimal list-inside text-xl md:text-2xl leading-relaxed mb-4 mt-4 space-y-3">
                    <li>Menteri Pertanian</li>
                    <li>Staf Ahli</li>
                    <li>Sekretariat Jenderal</li>
                    <li>Inspektorat Jenderal</li>
                    <li>Direktorat Jenderal Prasarana & Sarana Pertanian</li>
                    <li>Direktorat Jenderal Tanaman Pangan</li>
                    <li>Direktorat Jenderal Hortikultura</li>
                    <li>Direktorat Jenderal Peternakan</li>
                    <li>Direktorat Jenderal Peternakan & Kesehatan Hewan</li>
                    <li>Badan Standardisasi Instrumen Pertanian</li>
                    <li>Badan Penyuluhan & Pengembangan Sumber Daya Manusia Pertanian</li>
                    <li>Badan Karantina Pertanian</li>
                    <li>Pusat Data & Sistem Informasi Pertanian</li>
                    <li>Pusat Perlindungan Varietas Tanaman & Perizinan Pertanian</li>
                    <li>Pusat Pengelolaan & Penyebaran Teknologi Pertanian</li>
                    <li>Pusat Sosial Ekonomi & Kebijakan Pertanian</li>
                </ul>
                <p className="text-lg leading-relaxed">
                    Unduh Struktur Kementerian Pertanian Resmi{' '}
                    <a
                        href="#"
                        className="text-blue-600 hover:text-blue-800"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        di sini
                    </a>
                    .
                </p>
            </div>
        </div>
    );
};

export default SejarahPage;
