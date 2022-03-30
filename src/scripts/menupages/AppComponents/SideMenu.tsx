import { Menu } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import React, { useState } from "react";
import { IMenu } from "../types";
// import { MailOutlined, SettingOutlined } from '@ant-design/icons';

interface ISideMenu {
  activeKey: string;
  menuList: IMenu[];
  change(key: string): void;
}

const SideMenu = (props: ISideMenu) => {
  const { activeKey, menuList } = props;
  const [openKeys, setOpenKeys] = useState(["sub1"]);

  const handleClickMenu = (e: any) => {
    console.log(activeKey, openKeys);
    props.change(e.key);
  };

  const handleOpenChange = (openKeys: string[]) => {
    console.log(activeKey, openKeys);
    setOpenKeys(openKeys);
  };

  return (
    <Menu
      theme="dark"
      mode="inline"
      onClick={handleClickMenu}
      onOpenChange={handleOpenChange}
      selectedKeys={[activeKey]}
      openKeys={openKeys}
    >
      {menuList.map((menu: IMenu) => {
        if (menu.children) {
          return (
            <SubMenu title={menu.title} key={menu.key} icon={menu.icon}>
              {
                // 暂时层级菜单只支持一层
                menu.children.map((m: IMenu) => {
                  return <Menu.Item key={m.key}>{m.title}</Menu.Item>;
                })
              }
            </SubMenu>
          );
        } else {
          return <Menu.Item key={menu.key}>{menu.title}</Menu.Item>;
        }
      })}
    </Menu>
  );
};

export default SideMenu;
