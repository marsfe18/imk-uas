import React from 'react';
import Image from 'next/image';

interface PvtProps {
    data: {
        tanggal: Date;
        judul: string;
        gambar: string;
    }
}

const CardPvtHome: React.FC<PvtProps> = ({ data }) => {
    const formattedDate = data.tanggal.toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    return (
        <div className="flex flex-col items-start pb-4 h-full">
            <div className="w-full">
                <Image
                    src={data.gambar}
                    alt={data.judul}
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
                        {data.judul}
                    </h2>
                    <p className="text-gray-600">{formattedDate}</p>
                </div>
            </div>
        </div>
    );
};

export default CardPvtHome;
