import React from 'react';
import { Card, Image } from 'antd';

const { Meta } = Card;

const Foto: React.FC = () => (
    <Card
        hoverable
        style={{}}
        cover={<Image alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    >
        <Meta title="Kunjungan di Jawa Timur" description="19 Juni 2024" />
    </Card>
);

export default Foto;