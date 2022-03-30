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
import { IMenu, IPane, ITabEditParams, TabEditAction } from './types';
import { addTabsPane, getTargetPane, removeTabsPane } from './App.logic';

const menuList: IMenu[] = [
  {
    key: "key1",
    title: "页面1",
    page: Page1
  },
  {
    key: "sub1",
    title: "父菜单一",
    icon: <MailOutlined />,
    children: [
      { key: "key2", title: "页面2", page: Page2 }
    ]
  },
  {
    key: "sub2",
    title: "父菜单二",
    icon: <SettingOutlined />,
    children: [
      { key: "key3", title: "页面3", page: Page3 }
    ]
  }
];


/**
 * ConfigProvider 给组件提供统一的全局化配置，context特性
 * 应放在最顶层的信息有：当前打开页、菜单、被打开的菜单
*/

const CustomLayout = () => {
  // const [collapsed, setCollapsed] = useState(false);
  const [activeKey, setActiveKey] = useState("key1");
  const [tabPanes, setTabPanes] = useState<IPane[]>([{ key: "key1", title: "页面1", page: Page1 }])
  console.log(setTabPanes)

  // const onCollapse = (collapsed: boolean) => {
  //   setCollapsed(collapsed)
  // }

  const changeActivePage = (key: string) => {
    setActiveKey(key);

    const existPane=tabPanes.find((p:IPane)=>p.key===key);
    if(!existPane){
       setTabPanes([...tabPanes,getTargetPane(menuList,key)]);
    }
  }

  const handleEditTabs = (action: TabEditAction, params: ITabEditParams) => {
    const { tab, removeKey } = params;
    let result!: { key: string, panes: IPane[] }; // 断言 确定肯定有值
    if (action === "add" && tab) {
      result = addTabsPane(tabPanes, tab);
    } else if (action === "remove" && removeKey) {
      result = removeTabsPane(tabPanes, activeKey, removeKey);
    }
    const { key, panes } = result || {};
    setActiveKey(key);
    setTabPanes(panes);
  }

  return (
    <Layout className='container-layout'>
      <Sider className='left-sider'>
        <SideMenu activeKey={activeKey} change={changeActivePage}
          menuList={menuList} />
      </Sider>
      <Layout>
        <Header>头部信息</Header>
        <Content>
          <MainTabs activeKey={activeKey} panes={tabPanes} onChange={changeActivePage} onEdit={handleEditTabs} />
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