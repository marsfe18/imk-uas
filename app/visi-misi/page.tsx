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
                <div id='visi' className=''>
                    <header className="judul-galeri">
                        <h2 className="text-lg sm:text-xl md:text-xl text-gray-700 mb-2">Profil</h2>
                        <h2 className="text-3xl sm:text-3xl md:text-4xl text-gray-700 font-bold mb-4">Visi</h2>
                    </header>
                    <p className="text-lg leading-relaxed">
                        Berdasarkan Peraturan Presiden Republik Indonesia Nomor 18 Tahun 2020 tentang Rencana Pembangunan Jangka Menengah Nasional (RPJMN) 2020 - 2024, ditetapkan Visi Presiden dan Wakil Presiden RI 2020 - 2024 adalah "Terwujudnya Indonesia Maju yang Berdaulat, Mandiri dan Berkepribadian berlandaskan Gotong Royong". Untuk mendukung Visi tersebut, maka Kementerian Pertanian menetapkan Visi Pertanian Tahun 2020 - 2024, yakni :
                        <br /><br />

                        Pertanian yang Maju, Mandiri dan Modern untuk Terwujudnya Indonesia Maju yang Berdaulat, Mandiri dan Berkepribadian berlandaskan Gotong Royong
                    </p>
                </div>
                <Divider></Divider>
                <div id='visi2' className=''>
                    <header className="judul-galeri">
                        <h2 className="text-3xl sm:text-3xl md:text-4xl text-gray-700 font-bold mb-4">Makna dari Visi</h2>
                    </header>
                    <p className="text-lg leading-relaxed">
                        Majunya sektor pertanian ditandai dengan meningkatnya produksi dan produktivitas komoditas pangan serta mampu mencukupi kebutuhan dalam negeri (pangan mandiri) yang pada akhirnya mampu meningkatkan pendapatan petani.
                        <br /><br />
                        Kemajuan dan kemandirian di sektor pertanian diwujudkan dengan peningkatan hasil pengembangan penelitian terapan didukung oleh kualitas SDM dalam menggunakan teknologi modern berbasis kawasan pertanian.
                    </p>
                </div>
                <Divider></Divider>
                <div id='misi' className=''>
                    <header className="judul-galeri">
                        <h2 className="text-3xl sm:text-3xl md:text-4xl text-gray-700 font-bold mb-4">Misi</h2>
                    </header>
                    <p className="text-lg leading-relaxed">
                        Dalam rangka mewujudkan visi ini maka misi Kementerian Pertanian adalah
                        <br /><br />
                        Mewujudkan ketahanan pangan
                        Meningkatkan Nilai Tambah dan Daya Saing Pertanian
                        Pengelolaan Kementerian Pertanian yang bersih, efektif dan terpercaya

                    </p>
                </div>
                <Divider></Divider>
                <div id='part-4' className=''>
                    <header className="judul-galeri">
                        <h2 className="text-3xl sm:text-3xl md:text-4xl text-gray-700 font-bold mb-4">Makna dari Misi</h2>
                    </header>
                    <p className="text-lg leading-relaxed">
                        Ketahanan pangan merupakan kondisi terpenuhinya pangan bagi negara sampai perseorangan yang tercermin dari tersedianya pangan yang cukup ditinjau dari jumlah maupun mutu. Selain itu, menjamin pangan yang aman, beragam, bergizi, merata dan terjangkau serta tidak bertentangan dengan agama, keyakinan dan budaya masyarakat untuk dapat hidup sehat, aktif, dan produktif secara berkelanjutan.
                        <br /><br />
                        Daya saing pertanian adalah kemampuan di sektor pertanian untuk memenuhi kebutuhan masyarakat sekaligus mampu menggantikan produk pesaingnya dengan nilai tambah yang dihasilkan dalam setiap kegiatan produksi dan distribusi komoditas pertanian.

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
                            key: 'visi',
                            href: '#visi',
                            title: <p>Visi</p>,
                        },
                        {
                            key: 'visi2',
                            href: '#visi2',
                            title: <p>Makna dari Visi</p>,
                        },
                        {
                            key: 'misi',
                            href: '#misi',
                            title: <p>Misi</p>,
                        },
                        {
                            key: 'misi2',
                            href: '#misi2',
                            title: <p>Makna dari Misi</p>,
                        },
                    ]}
                />
            </div>
        </div>
    )
};

export default App;