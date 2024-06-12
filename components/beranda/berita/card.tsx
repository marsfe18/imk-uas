import React from 'react';
import Image from 'next/image';

interface BeritaProps {
    data: {
        date: Date,
        title: string,
        gambar: string,
    }
}

const CardBeritaHome: React.FC<BeritaProps> = ({ data }) => {
    const formattedDate = data.date.toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    return (
        <div className="flex items-start border-b border-gray-300 pb-4">
            <div className="w-50">
                <Image
                    src={data.gambar}
                    alt={data.title}
                    width={200}
                    height={200}
                    style={{ objectFit: 'cover' }}
                />
            </div>
            <div className="flex-1 ml-4">
                <div className=''>

                    <h2 className="text-lg xl:text-2xl font-semibold hover:text-green-800 transition-colors duration-300 text-black">
                        {data.title}
                    </h2>
                    <p className="text-gray-600">{formattedDate}</p>
                </div>
            </div>
        </div>
    );
};

export default CardBeritaHome;