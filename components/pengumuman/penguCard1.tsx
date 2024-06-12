import React from 'react';
import { Card, Typography } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import Meta from 'antd/es/card/Meta';

const { Title, Text, Link } = Typography;

interface PengumumanProps {
    data: {
        judul: string;
        nomorPengumuman: string;
        linkDownload: string;
        deskripsi: string;
    }
}

const Pengumuman1: React.FC<PengumumanProps> = ({
    data
}) => {
    return (
        <div className='mb-2'>
            <Card hoverable>
                <Meta
                    title={
                        <>
                            <Title level={3}>{data.judul}</Title>
                            <Text>{data.nomorPengumuman}</Text>
                        </>
                    }
                    description={<Text>{data.deskripsi}</Text>}
                />
            </Card>
        </div>
    );
};

export default Pengumuman1;