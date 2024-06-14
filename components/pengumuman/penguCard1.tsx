import React from 'react';
import { Card, Typography } from 'antd';
import Meta from 'antd/es/card/Meta';
import { PengumumanProps } from '@/utils/dataType';

const { Title, Text } = Typography;


const Pengumuman1: React.FC<PengumumanProps> = ({
    judul, nomor, file, deskripsi
}) => {
    return (
        <div className='mb-2'>
            <Card hoverable>
                <Meta
                    title={
                        <>
                            <Title level={3}>{judul}</Title>
                            <Text>{nomor}</Text>
                        </>
                    }
                    description={<Text>{deskripsi}</Text>}
                />
            </Card>
        </div>
    );
};

export default Pengumuman1;