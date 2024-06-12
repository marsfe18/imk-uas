// NewsDetail.tsx atau NewsDetail.jsx
import React from 'react';
import { Card, Avatar, Typography } from 'antd';
import { dataBerita } from './dataBerita'; // Impor data berita

const { Meta } = Card;
const { Title, Text } = Typography;

interface NewsDetailProps {
    data: {
        date: Date;
        author: string;
        title: string;
        ringkasan: string;
        gambar: string;
    };
}

const NewsDetail: React.FC<NewsDetailProps> = ({ data }) => {
    return (
        <div className=''>
            <div className='hidden md:block'>
                <Card hoverable bordered={false}>
                    <Meta
                        avatar={
                            <Avatar
                                shape='square'
                                size={{ md: 160, lg: 160, xl: 160, xxl: 160 }}
                                src={data.gambar}
                            />
                        }
                        title={
                            <>
                                <Title level={3}>{data.title}</Title>
                                <Text>{`${data.date.toLocaleDateString()} - ${data.author}`}</Text>
                            </>
                        }
                        description={<Text>{data.ringkasan}</Text>}
                    />
                </Card>
            </div>
            <div className='block md:hidden'>
                <Card hoverable
                    cover={<img src={data.gambar} />}>
                    <Meta
                        title={
                            <>
                                <Title level={3}>{data.title}</Title>
                                <Text>{`${data.date.toLocaleDateString()} - ${data.author}`}</Text>
                            </>
                        }
                        description={<Text>{data.ringkasan}</Text>}
                    />
                </Card>
            </div>
        </div>
    );
};

export default NewsDetail;