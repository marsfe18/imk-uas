import React from 'react';
import Image from 'next/image';

interface BeritaProps {
    date: Date;
    author: string;
    title: string;
    ringkasan: string;
    gambar: string;
}

const BeritaGambar: React.FC<{ berita: BeritaProps }> = ({ berita }) => {
    const { date, author, title, ringkasan, gambar } = berita;

    const formattedDate = date.toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    return (
        <div className='relative h-[607px] w-full mx-auto max-w-[649px]'>
            <Image
                src={gambar}
                alt={title}
                fill
                style={{ objectFit: 'cover' }}
                sizes='(max-width: 768px) 100vw'
            />
            <div className="absolute bottom-0 left-0 right-0 h-[600px] bg-gradient-to-b from-transparent to-shade4 flex items-end px-12 py-5">
                <div>
                    <p className="text-white mb-1">{formattedDate}</p>
                    <h2 className="text-white text-heading3 mb-14">{title}</h2>
                    {/* <p className="text-white">{ringkasan}</p> */}
                </div>
            </div>
        </div>
    );
};

export default BeritaGambar;