import { Menu } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import React, { useState } from "react";
import { MailOutlined, SettingOutlined } from '@ant-design/icons';

interface ISideMenu {
    activeKey: string;
    change(key: string): void
}

const SideMenu = (props: ISideMenu) => {
    const { activeKey } = props;
    const [openKeys, setOpenKeys] = useState(["sub1"]);

    const handleClickMenu = (e: any) => {
        props.change(e.key);
    }

    const handleOpenChange = (openKeys: string[]) => {
        setOpenKeys(openKeys);
    }

    return (
        <Menu theme="dark" mode="inline"
            onClick={handleClickMenu} onOpenChange={handleOpenChange}
            selectedKeys={[activeKey]} openKeys={openKeys}
        >
            <Menu.Item key="key1">页面1</Menu.Item>
            <SubMenu title="父菜单一" key="sub1" icon={<MailOutlined />}>
                <Menu.Item key="key2">页面2</Menu.Item>
            </SubMenu>
            <SubMenu title="父菜单二" key="sub2" icon={<SettingOutlined />}>
                <Menu.Item key="key3">页面3</Menu.Item>
            </SubMenu>
        </Menu>
    )
}

export default SideMenu;