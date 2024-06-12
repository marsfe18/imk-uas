import React from 'react';
import { Card, Avatar, Typography } from 'antd';

const { Meta } = Card;
const { Title, Text } = Typography;

interface PengumumanCardProps {
    data: {
        judul: string;
        nomorPengumuman: string;
        linkDownload: string;
        deskripsi: string;
    };
}

const Pengumuman2: React.FC<PengumumanCardProps> = ({ data }) => {
    const { judul, nomorPengumuman, linkDownload, deskripsi } = data;

    return (
        <Card hoverable>
            <Meta
                avatar={
                    <Avatar
                        shape="square"
                        size={{ md: 160, lg: 160, xl: 160, xxl: 160 }}
                        src="/sk_dip.pdf"
                    />
                }
                title={<Title level={3}>{judul}</Title>}
                description={
                    <div>
                        <Text>{nomorPengumuman}</Text>
                        <br />
                        <Text>{deskripsi}</Text>
                        <br />
                        <a href={linkDownload} target="_blank" rel="noopener noreferrer">
                            Unduh Pengumuman
                        </a>
                    </div>
                }
            />
        </Card>
    );
};

export default Pengumuman2;