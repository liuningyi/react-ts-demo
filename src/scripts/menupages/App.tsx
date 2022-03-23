import { ConfigProvider, Layout } from 'antd';
import React, { useState } from 'react';
import zhCN from 'antd/lib/locale/zh_CN';
import Sider from 'antd/lib/layout/Sider';
import { Content, Footer, Header } from 'antd/lib/layout/layout';
import "./App.less";

import SideMenu from './AppComponents/SideMenu';
import MainTabs from './AppComponents/MainTabs';



/**
 * ConfigProvider 给组件提供统一的全局化配置，context特性
*/


const CustomLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeKey,setActiveKey] = useState("key1");

  console.log(setActiveKey)

  const onCollapse = (collapsed: boolean) => {
    setCollapsed(collapsed)
  }

  const changeActivePage=(key:string)=>{
    setActiveKey(key);
  }


  return (
    <Layout className='container-layout'>
      <Sider className='left-sider'
        collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <SideMenu activeKey={activeKey} change={changeActivePage}/>
      </Sider>
      <Layout>
        <Header>头部信息</Header>
        <Content>
          <MainTabs activeKey={activeKey} change={changeActivePage}/>
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