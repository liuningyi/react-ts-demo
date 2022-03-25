import { ConfigProvider, Layout } from 'antd';
import React, { useState } from 'react';
import zhCN from 'antd/lib/locale/zh_CN';
import Sider from 'antd/lib/layout/Sider';
import { Content, Footer, Header } from 'antd/lib/layout/layout';
import "./App.less";

import SideMenu from './AppComponents/SideMenu';
import MainTabs from './AppComponents/MainTabs';

import { MailOutlined, SettingOutlined } from '@ant-design/icons';

import Page1 from 'scripts/pages/page1';
import Page2 from 'scripts/pages/page2';
import Page3 from 'scripts/pages/page3';

export interface IMenu {
  key: string;
  text: string;
  icon?: JSX.Element; // 仅SubMenu
  children?: IMenu[], // 仅SubMenu有
  page?: ()=>JSX.Element // 仅Menu.Item有
}

const menuList:IMenu[] = [
  {
    key: "key1",
    text: "页面1",
    page: Page1
  },
  {
    key: "sub1",
    text: "父菜单一",
    icon: <MailOutlined />,
    children: [
      { key: "key2", text: "页面2", page: Page2 }
    ]
  },
  {
    key: "sub2",
    text: "父菜单二",
    icon: <SettingOutlined />,
    children: [
      { key: "key3", text: "页面3", page: Page3 }
    ]
  }
];


/**
 * ConfigProvider 给组件提供统一的全局化配置，context特性
 * 应放在最顶层的信息有：当前打开页、菜单、被打开的菜单
*/


const CustomLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeKey, setActiveKey] = useState("key1");

  console.log(setActiveKey)

  const onCollapse = (collapsed: boolean) => {
    setCollapsed(collapsed)
  }

  const changeActivePage = (key: string) => {
    setActiveKey(key);
  }

  const handleEditTabs = () => {
    console.log("xixi")
  }

  return (
    <Layout className='container-layout'>
      <Sider className='left-sider'
        collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <SideMenu activeKey={activeKey} change={changeActivePage} 
        menuList={menuList}/>
      </Sider>
      <Layout>
        <Header>头部信息</Header>
        <Content>
          <MainTabs activeKey={activeKey} onChange={changeActivePage} onEdit={handleEditTabs} />
        </Content>
        <Footer>
          <div className="footer">Copyright@2022 柳宁依出品</div>
        </Footer>
      </Layout>
    </Layout>
  )
}

const App = () => {

  return (
    <ConfigProvider locale={zhCN}>
      <CustomLayout />
    </ConfigProvider>
  )
}

export default App;