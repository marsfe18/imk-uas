import React from 'react';
import { Card, Button, Flex, Typography, Col } from 'antd';
// import Title from 'antd/es/typography/Title';

const { Meta } = Card;
const { Title, Text } = Typography;

const BeritaCard = () => {
    return (

        <Col
            xs={{ flex: '100%' }}
            sm={{ flex: '50%' }}
            md={{ flex: '50%' }}
            lg={{ flex: '50%' }}
            xl={{ flex: '20%' }}
            style={{}}>
            <Card
                hoverable
                style={{}}
                cover={<img src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60' />}
            >
                <Meta title={
                    <Title level={3}>Ini adalah judul kartu</Title>
                }
                    description={
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </Text>
                    } />
            </Card>
        </Col>

    );
};

export default BeritaCard;