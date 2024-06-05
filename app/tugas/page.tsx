"use client"
import React, { useEffect, useState } from 'react';
import { Anchor, Col, Divider, Row } from 'antd';


const App: React.FC = () => {

    const topRef = React.useRef<HTMLDivElement>(null);
    const [targetOffset, setTargetOffset] = useState<number>();

    useEffect(() => {
        setTargetOffset(topRef.current?.clientHeight);
    }, []);

    const [activeLink, setActiveLink] = useState('');

    return (

        <div className='flex justify-center'>
            <div className='lg:w-1/5 lg:block hidden'></div>

            <div className="bg-white py-4 px-4 mb-2 md:w-4/5 lg:w-3/5" style={{ maxWidth: '55rem' }}>
                <div id='tugas' className=''>
                    <header className="judul-galeri">
                        <h2 className="text-lg sm:text-xl md:text-xl text-gray-700 mb-2">Profil</h2>
                        <h2 className="text-3xl sm:text-3xl md:text-4xl text-gray-700 font-bold mb-4">Tugas</h2>
                    </header>
                    <p className="text-lg leading-relaxed">
                        Berdasarkan Peraturan Presiden Republik Indonesia Nomor 117 Tahun 2022, Kementerian Pertanian mempunyai tugas menyelenggarakan urusan pemerintahan di bidang pertanian untuk membantu Presiden dalam menyelenggarakan pemerintahan negara.
                    </p>
                </div>
                <Divider></Divider>
                <div id='fungsi' className=''>
                    <header className="judul-galeri">
                        <h2 className="text-3xl sm:text-3xl md:text-4xl text-gray-700 font-bold mb-4">Fungsi</h2>
                    </header>
                    <p className="text-lg leading-relaxed mb-4">
                        Dalam melaksanakan tugas, Kementerian Pertanian menyelenggarakan fungsi sebagai berikut:
                    </p>
                    <ol className="list-decimal list-inside text-lg leading-relaxed mb-4">
                        <li>
                            Perumusan, penetapan, dan pelaksanaan kebijakan di bidang penyediaan prasarana dan sarana pertanian, peningkatan produksi komoditas pertanian, peningkatan nilai tambah, penguatan daya saing, dan pemasaran hasil pertanian.
                        </li>
                        <li>Pengelolaan barang milik/kekayaan negara yang menjadi tanggung jawab Kementerian Pertanian.</li>
                        <li>Pengawasan atas pelaksanaan tugas di lingkungan Kementerian Pertanian.</li>
                        <li>
                            Pelaksanaan bimbingan teknis dan supervisi atas pelaksanaan urusan di bidang penyediaan prasarana dan sarana pertanian, peningkatan produksi komoditas pertanian, peningkatan nilai tambah, penguatan daya saing, dan pemasaran hasil pertanian.
                        </li>
                        <li>
                            Penyelenggaraan koordinasi, perumusan, penerapan dan pemeliharaan, serta harmonisasi standar instrumen di bidang pertanian.
                        </li>
                        <li>Penyelenggaraan penyuluhan dan pengembangan sumber daya manusia pertanian.</li>
                        <li>Pelaksanaan perkarantinaan pertanian dan pengawasan keamanan hayati.</li>
                        <li>
                            Koordinasi pelaksanaan tugas, pembinaan, dan pemberian dukungan administrasi kepada seluruh unsur organisasi di lingkungan Kementerian Pertanian.
                        </li>
                        <li>
                            Pelaksanaan dukungan yang bersifat substantif pada seluruh unsur organisasi di lingkungan Kementerian Pertanian.
                        </li>
                    </ol>
                    <p className="text-lg leading-relaxed mb-4">
                        Peraturan Presiden Republik Indonesia Nomor 117 Tahun 2022 tentang Kementerian Pertanian dapat diunduh{' '}
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
                    <p className="text-lg leading-relaxed">
                        Peraturan Menteri Pertanian Republik Indonesia Nomor 19 Tahun 2022 tentang Organisasi dan Tata Kerja Kementerian Pertanian dapat diunduh{' '}
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
            <div className="w-1/5 hidden md:block md:">
                <Anchor
                    style={{ width: '200px' }}
                    offsetTop={64}
                    targetOffset={targetOffset}
                    items={[
                        {
                            key: 'tugas',
                            href: '#tugas',
                            title: <p>Tugas</p>,
                        },
                        {
                            key: 'fungsi',
                            href: '#fungsi',
                            title: <p>Fungsi</p>,
                        },
                    ]}
                />
            </div>
        </div>
    )
};

export default App;