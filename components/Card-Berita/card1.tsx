import React from 'react';
import { Card, Typography, Col } from 'antd';

const { Meta } = Card;
const { Title, Text } = Typography;

interface NewsDetailProps {
    data: {
        date: string;
        author: string;
        title: string;
        ringkasan: string;
        gambar: string;
    };
}

const limitCharacters = (str: string, maxChars: number) => {
    if (str.length > maxChars) {
        return `${str.slice(0, maxChars)}...`;
    }
    return str;
};

const Card1: React.FC<NewsDetailProps> = ({ data }) => {
    const limitedSummary = limitCharacters(data.ringkasan, 100);
    return (
        <div className=''>
            <Card
                hoverable
                // style={{ height: '430px' }}
                cover={<img src={data.gambar} />}
            >
                <Meta
                    title={
                        <h2 className='text-2xl'>{data.title}</h2>
                    }
                    description={
                        <div className='text-gray-600'>
                            <p className='text-sm mb-2'>{`${data.date} - ${data.author}`}</p>
                            <p className='text-base leading-relaxed'>{data.ringkasan}</p>
                        </div>
                    }
                />
            </Card>
        </div>
    );
};

export default Card1;