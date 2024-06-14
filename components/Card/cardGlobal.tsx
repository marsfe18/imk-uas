import React from 'react';
import Image from 'next/image';
import { BeritaProps, DataGlobalProps } from '@/utils/dataType';


const CardGlobal: React.FC<DataGlobalProps> = ({ gambar, judul, tanggal, tipe, file }) => {
    const formattedDate = tanggal?.toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    return (
        <div className="flex items-start border-b border-gray-300 pb-4">
            <div className="w-50">
                <Image
                    src={gambar}
                    alt={judul}
                    width={200}
                    height={200}
                    style={{ objectFit: 'cover' }}
                />
            </div>
            <div className="flex-1 ml-4">
                <div className=''>
                    <p className="text-gray-600">{tipe + ' | ' + formattedDate}</p>
                    <h2 className="text-lg xl:text-2xl font-semibold hover:text-green-800 transition-colors duration-300 text-black">
                        {judul}
                    </h2>
                </div>
            </div>

        </div>
    );
};

export default CardGlobal;