import React from 'react';
import Image from 'next/image';

interface PenguProps {
    data: {
        judul: string,
        nomor: string,
        gambar: string,
    }
}

const truncateText = (text: string, maxWords: number) => {
    const words = text.split(' ');
    if (words.length > maxWords) {
        return words.slice(0, maxWords).join(' ') + '...';
    }
    return text;
};

const CardPenguHome: React.FC<PenguProps> = ({ data }) => {
    const truncatedTitle = truncateText(data.judul, 8); // Batasi hingga 5 kata

    return (
        <div className="flex items-start border-b-2 border-gray-300 pb-4">
            <div className="w-50 h-32">
                <Image
                    src={data.gambar}
                    alt={data.judul}
                    width={200}
                    height={200}
                    style={{ objectFit: 'cover' }}
                />
            </div>
            <div className="flex-1 ml-4">
                <div className=''>

                    <h2 className="text-lg xl:text-2xl font-semibold hover:text-green-800 transition-colors duration-300 text-black">
                        {truncatedTitle}
                    </h2>
                    <p className="text-gray-600">{data.nomor}</p>
                </div>
            </div>
        </div>
    );
};

export default CardPenguHome;
