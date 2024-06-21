import React from 'react';
import Image from 'next/image';
import { PvtProps } from '@/utils/dataType';
import Link from 'next/link';


const CardPvtHome: React.FC<PvtProps> = ({ judul, tanggal, gambar, link }) => {
    const formattedDate = tanggal.toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    return (
        <Link href={link}>
            <div className="flex flex-col items-start pb-4 h-full">
                <div className="w-full">
                    <Image
                        src={gambar}
                        alt={judul}
                        width={200}
                        height={200}
                        layout="responsive"
                        objectFit="cover"
                        className="w-full h-48"
                    />
                </div>
                <div className="flex-1 py-4 flex flex-col justify-between">
                    <div className="text-start">
                        <h2 className="text-lg xl:text-2xl font-semibold hover:text-green-800 transition-colors duration-300 text-black">
                            {judul}
                        </h2>
                        <p className="text-gray-600">{formattedDate}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default CardPvtHome;
