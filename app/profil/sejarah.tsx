// components/Sejarah.tsx
import Judul1 from '@/components/Tittle/judul1';
import React from 'react';

const Sejarah: React.FC = () => {
    return (
        <>
            <header className="judul-galeri">
                <h2 className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-2">Profil</h2>
                <Judul1 text='Sejarah Kementrian Pertanian' />
            </header>
            <p className="text-lg leading-relaxed">
                Sumber daya alam Indonesia yang kaya dipengaruhi oleh faktor keadaan alam Indonesia yang
                beriklim tropis dan letak geografis di antara dua benua, Asia dan Australia serta dua
                samudra, Samudra Pasifik dan Samudra Hindia. Sehingga sektor pertanian di Indonesia menjadi
                sektor penting bagi perekonomian bangsa. Oleh karena itu, Indonesia dikenal sebagai negara
                agraris dengan berbagai produk dari usaha pertanian, perkebunan, peternakan, perikanan dan
                kehutanan.
                <br />
                <br />
                Pada masa pendudukan Belanda, pada tanggal 1 Januari 1905 didirikan sebuah Departemen yang
                menangani bidang pertanian berdasarkan Surat Keputusan Gubernur Jenderal Hindia Belanda
                tanggal 23 September 1904 No. 20 Staatsblaad 982 yang didasarkan pada Surat Keputusan Raja
                Belanda No. 28 tanggal 28 Juli 1904 (Staatsblaad No. 380). Direktur Pertama Departemen
                Pertanian adalah Dr. Melchior Treub. Pada masa penjajahan Belanda urusan pertanian ditangani
                oleh Departement van Landbouw (1905), Nijverheid en Handel (1911) dan Departement van
                Ekonomische Zaken (1934).
                <br />
                <br />
                Sedangkan pada masa pendudukan Jepang, Gunseikanbu Sangyobu yang berperan dalam menangani
                urusan pertanian. Sejak 19 Agustus 1945, sektor pertanian berada di bawah Kementerian
                Kemakmuran yang merupakan kabinet pertama Republik Indonesia setelah kemerdekaan, dengan Ir.
                R. P. Surachman Tjokroadisurjo sebagai Menteri Kemakmuran pertama. Dikarenakan situasi
                Indonesia pada saat itu masih kacau oleh kedatangan tentara Belanda, Kementerian Kemakmuran
                mendirikan cabang di Magelang yang dipimpin oleh R.M. Reksohadiprojo. Pada bulan Juli 1947,
                kantor dipindahkan ke Borobudur kemudian beralih ke Yogyakarta.
                <br />
                <br />
                Dengan adanya Peraturan Presiden Nomor 47 Tahun 2009 tentang Pembentukan dan Organisasi
                Kementerian Negara, maka Departemen Pertanian berubah menjadi Kementerian Pertanian.
            </p>
        </>
    );
};

export default Sejarah;
