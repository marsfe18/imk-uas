// NewsDetail.tsx atau NewsDetail.jsx
import React from 'react';
import { Card, Avatar, Typography } from 'antd';
import { BeritaProps } from '@/utils/dataType';

const { Meta } = Card;
const { Title, Text } = Typography;


const NewsDetail: React.FC<BeritaProps> = ({ judul, tanggal, gambar, ringkasan, author }) => {
    return (
        <div className=''>
            <div className='hidden md:block'>
                <Card hoverable bordered={false}>
                    <Meta
                        avatar={
                            <Avatar
                                shape='square'
                                size={{ md: 160, lg: 160, xl: 160, xxl: 160 }}
                                src={gambar}
                            />
                        }
                        title={
                            <>
                                <Title level={3}>{judul}</Title>
                                <Text>{`${tanggal.toLocaleDateString()} - ${author}`}</Text>
                            </>
                        }
                        description={<Text>{ringkasan}</Text>}
                    />
                </Card>
            </div>
            <div className='block md:hidden'>
                <Card hoverable
                    cover={<img src={gambar} />}>
                    <Meta
                        title={
                            <>
                                <Title level={3}>{judul}</Title>
                                <Text>{`${tanggal.toLocaleDateString()} - ${author}`}</Text>
                            </>
                        }
                        description={<Text>{ringkasan}</Text>}
                    />
                </Card>
            </div>
        </div>
    );
};

export default NewsDetail;