import React from 'react';
import Image from 'next/image';
import { BeritaProps } from '@/utils/dataType';
import { useRouter } from 'next/navigation';

interface simpleBeritaProps {
    gambar: string;
    judul: string;
    tanggal: Date;
}

const CardBeritaHome: React.FC<simpleBeritaProps> = ({ gambar, judul, tanggal }) => {
    const formattedDate = tanggal.toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    const router = useRouter();
    const handleClick = () => {
        router.push(`/publikasi/berita/${encodeURIComponent(judul)}`);
    };

    return (
        <div onClick={handleClick} className="flex items-start border-b border-gray-300 pb-4 transition-colors duration-300 hover:border-green-800 hover:text-green-700 hover:border-b-4 cursor-pointer">
            <div className="w-50">
                <Image
                    src={gambar}
                    alt={judul}
                    width={200}
                    height={200}
                    style={{ objectFit: 'cover' }}
                    className='w-[150px] md:w-[200px]'
                />
            </div>
            <div className="flex-1 ml-4">
                <div className=''>

                    <h2 className="text-lg xl:text-xl font-semibold">
                        {judul}
                    </h2>
                    <p className="text-gray-600">{formattedDate}</p>
                </div>
            </div>
        </div>
    );
};

export default CardBeritaHome;