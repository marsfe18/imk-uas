import React from 'react';
import { Card, Typography } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

const { Title, Text, Link } = Typography;

interface PengumumanProps {
    judul: string;
    nomorPengumuman: string;
    linkDownload: string;
    deskripsi: string;
}

const Pengumuman: React.FC<PengumumanProps> = ({
    judul,
    nomorPengumuman,
    linkDownload,
    deskripsi,
}) => {
    return (
        <Card hoverable>
            <Title level={3}>{judul}</Title>
            <Text strong>{nomorPengumuman}</Text>
            {/* <Link href={linkDownload} target="_blank">
        <DownloadOutlined /> Download File Resmi
      </Link> */}
            <Text>{deskripsi}</Text>
        </Card>
    );
};

export default Pengumuman;