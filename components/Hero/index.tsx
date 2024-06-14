import React from 'react';
import { Button, Divider, Input, Layout, Space, Typography } from 'antd';
import Search, { SearchProps } from 'antd/es/input/Search';
import { SearchOutlined } from '@ant-design/icons'

const { Content } = Layout;
const { Title } = Typography;

const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

const LandingPage = () => {

    return (
        <section
            id="home"
            className="relative z-10 overflow-hidden bg-white pb-16 md:px-44 px-8 pt-[100px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
            style={{
                backgroundImage: `url('/hero2.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="absolute inset-0 bg-shade4 opacity-80"></div>
            <div className="container relative w-full z-20 max-w-[1080px] mx-auto my-0" >
                <h1 className="mb-5 text-white text-heading1">
                    Pusat Informasi dan Layanan Kementrian Pertanian
                </h1>
                <div className='mt-14'>
                    <Space.Compact style={{ width: '100%', height: '72px', }}>
                        <Input placeholder='Cari...' style={{ fontSize: '36px', padding: '0 1rem', borderRadius: 0 }} />
                        <Button style={{ height: '72px', fontSize: '40px', borderRadius: 0, display: 'flex', alignItems: 'center', backgroundColor: '#E2EED9' }}><SearchOutlined color='white' /></Button>
                    </Space.Compact>
                </div>
            </div>
        </section>
    );
};

export default LandingPage;