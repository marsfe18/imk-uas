import React from 'react';
import { Menu, Avatar, Tooltip } from 'antd';
import { UserOutlined, CodeOutlined, LogoutOutlined, SearchOutlined } from '@ant-design/icons';
import { MenuProps } from 'antd';

interface MenuItem {
    key: string;
    icon: JSX.Element; // Menambahkan tipe untuk properti ikon
    label: string;
}

interface RightMenuProps {
    mode: MenuProps['mode'];
}

const RightMenu: React.FC<RightMenuProps> = ({ mode }) => {
    const userMenuItems: MenuItem[] = [
        { key: 'project', icon: <CodeOutlined />, label: 'Projects' },
        { key: 'about-us', icon: <UserOutlined />, label: 'Profile' },
        { key: 'log-out', icon: <LogoutOutlined />, label: 'Logout' },
    ];

    return (
        <Menu mode={mode}>
            <Menu.SubMenu
                title={
                    <>
                        <Avatar icon={<SearchOutlined />} />
                        <span className="username">John Doe</span>
                    </>
                }
            >
                {userMenuItems.map((item) => (
                    // Menambahkan pengecekan tipe untuk item dan menambahkan properti ikon
                    <Menu.Item key={item.key} icon={item.icon}>
                        {item.label}
                    </Menu.Item>
                ))}
            </Menu.SubMenu>
        </Menu>
        // <Tooltip>
        //     <SearchOutlined></SearchOutlined>
        // </Tooltip>
    );
};

export default RightMenu;
