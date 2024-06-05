import React from 'react';
import { Button, Col, Divider, Flex, Image, Row, Tabs } from 'antd';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import './index.css'

const { TabPane } = Tabs;

const SejarahPage: React.FC = () => {
    return (
        <div className='flex justify-center mb-2'>
            <div className="border bg-white py-4 px-4" style={{ maxWidth: '50rem' }}>
                <header className="judul-galeri">
                    <h2 className="text-lg sm:text-xl md:text-xl text-gray-700 mb-2">Profil</h2>
                    <h2 className="text-3xl sm:text-3xl md:text-4xl text-gray-700 font-bold mb-4">Lambang Organisasi</h2>
                </header>
                <Image src='/struktur.jpg'></Image>
                <ul className="list-none list-inside text-lg leading-relaxed mb-4 mt-4">
                    <li>
                        <strong>Tunas</strong>: Menggambarkan pengertian biologis dari seluruh kegiatan yang dikelola oleh Kementerian Pertanian, kecuali manusia sebagai benda hidup.
                    </li>
                    <li>
                        <strong>Warna Hijau Muda</strong>: Melambangkan pengertian kehidupan.
                    </li>
                    <li>
                        <strong>Lingkaran Berwarna Merah</strong>: Melambangkan pengertian kesatuan.
                    </li>
                    <li>
                        <strong>Lingkaran Bersudut Lima Berwarna Coklat</strong>: Melambangkan pengertian dari lima unsur pelaksana utama (tugas-tugas pokok Kementerian Pertanian).
                    </li>
                    <li>
                        <strong>Warna Dasar Kuning Emas</strong>: Sebagai lambang kemegahan, baik untuk panji, vandel, serta bentuk lainnya.
                    </li>
                    <li>
                        <strong>Air Berwarna Biru Muda</strong>: Mempunyai pengertian sebagai lambang keagungan.
                    </li>
                </ul>
                <p className="text-lg leading-relaxed">
                    Unduh Lambang Kementerian Pertanian Resmi{' '}
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
