import React from 'react';
import { Button, Card, Col, Divider, Flex, List, Row, Tabs } from 'antd';
import { AppstoreOutlined, BookOutlined, FieldTimeOutlined, PictureOutlined } from '@ant-design/icons';
import './index.css';
import Berita_card from '../Card-Berita/card1';
import Card2 from '../Card-Berita/card2';
import { title } from 'process';

const { TabPane } = Tabs;

const data = [
    { title }
];

const App: React.FC = () => {
    return (
        <div className="tab px-4 py-20 sm:px-6 md:px-16 lg:px-36  bg-gray-100">
            <header className="tab-header">
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-700 font-bold mb-4 sm:mb-4 md:mb-6">Informasi Terbaru</h2>
                <Tabs
                    defaultActiveKey="1"
                >
                    <TabPane
                        tab={
                            <span className="flex items-center text-lg md:text-xl font-semibold">
                                <AppstoreOutlined />
                                Publikasi
                            </span>
                        }
                        key="1"
                    >
                        <Row
                            gutter={[10, 20]}
                            style={{ marginTop: '1.25rem' }}
                            justify='space-between'
                        >
                            <Berita_card />
                            <Berita_card />
                            <Berita_card />
                            <Berita_card />
                            <Berita_card />
                        </Row>
                    </TabPane>
                    <TabPane
                        tab={
                            <span className="flex items-center text-lg md:text-xl">
                                <BookOutlined className="mr-2 text-lg md:text-xl" />
                                Berita Pertanian
                            </span>
                        }
                        key="2"
                    >
                        <div className="mt-5">
                            <Card2 />
                        </div>
                    </TabPane>
                    <TabPane
                        tab={
                            <span className="flex items-center text-lg md:text-xl">
                                <FieldTimeOutlined className="mr-2 text-lg md:text-xl" />
                                Kegiatan
                            </span>
                        }
                        key="3"
                    >
                        <div className="mt-5">
                            <List
                                grid={{
                                    gutter: 16,
                                    xs: 1,
                                    sm: 2,
                                    md: 4,
                                    lg: 4,
                                    xl: 6,
                                    xxl: 3,
                                }}
                                dataSource={data}
                                renderItem={(item) => (
                                    <List.Item>
                                        <Card title={item.title}>Card content</Card>
                                    </List.Item>
                                )}
                            />
                        </div>
                    </TabPane>
                </Tabs>
            </header>
            <Divider />
        </div >
    );
};

export default App;