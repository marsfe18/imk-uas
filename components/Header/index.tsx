import React, { useState, useEffect } from 'react';
import { Layout, Button, Drawer } from 'antd';
import LeftMenu from './leftMenu';
import RightMenu from './rightMenu';
import { MenuOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import './index.css';

const Navbar: React.FC = () => {
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(!visible);
    };

    return (
        <nav className="navbar">
            <Layout>
                <Layout.Header className="nav-header" style={{
                    backgroundColor: 'white', borderBottom: '0',
                    padding: '0 35px'
                }}>
                    <div className="logo">
                        <Link href="/" style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                            <Image src="/logo.png" alt="Logo" width={30} height={30} />
                            <span className="ml-3 text-gray-700 text-lg font-semibold">Kementrian Pertanian</span>
                        </Link>
                    </div>
                    <div className="navbar-menu">
                        <div className="leftMenu">
                            <LeftMenu mode="horizontal" />
                        </div>
                        <div className='btn-drawer'>
                            <Button className='menuButton' type="text" onClick={showDrawer}>
                                <MenuOutlined />
                            </Button>
                        </div>
                        <Drawer
                            title="Brand Here"
                            placement="right"
                            closable={true}
                            onClose={showDrawer}
                            open={visible}
                            style={{ zIndex: 99999 }}
                        >
                            <LeftMenu mode="inline" />
                            {/* <RightMenu mode="inline" /> */}
                        </Drawer>
                    </div>
                </Layout.Header>
            </Layout>
        </nav>
    );
};

export default Navbar;
