// NewsDetail.tsx atau NewsDetail.jsx
import React from 'react';
import { Card, Avatar, Typography } from 'antd';
import { dataBerita } from './dataBerita'; // Impor data berita

const { Meta } = Card;
const { Title, Text } = Typography;

interface NewsDetailProps {
    data: {
        date: string;
        author: string;
        title: string;
        description: string;
    };
}

const NewsDetail: React.FC<NewsDetailProps> = ({ data }) => {
    return (
        <div className='mb-2'>
            <div className='hidden md:block'>
                <Card hoverable>
                    <Meta
                        avatar={
                            <Avatar
                                shape='square'
                                size={{ md: 160, lg: 160, xl: 160, xxl: 160 }}
                                src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                            />
                        }
                        title={
                            <>
                                <Title level={3}>{data.title}</Title>
                                <Text>{data.date} | {data.author}</Text>
                            </>
                        }
                        description={<Text>{data.description}</Text>}
                    />
                </Card>
            </div>
            <div className='block md:hidden'>
                <Card hoverable
                    cover={<img src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60' />}>
                    <Meta
                        title={
                            <>
                                <Title level={3}>{data.title}</Title>
                                <Text>{data.date} | {data.author}</Text>
                            </>
                        }
                        description={<Text>{data.description}</Text>}
                    />
                </Card>
            </div>
        </div>
    );
};

export default NewsDetail;