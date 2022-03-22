import { ConfigProvider, Layout } from 'antd';
import React, { useState } from 'react';
import zhCN from 'antd/lib/locale/zh_CN';
import Sider from 'antd/lib/layout/Sider';
import { Content, Footer, Header } from 'antd/lib/layout/layout';

import "./App.less"

/**
 * ConfigProvider 给组件提供统一的全局化配置，context特性
*/

const CustomLayout = () => {
  const [collapsed,setCollapsed] = useState(false);
  const onCollapse=(collapsed:boolean)=>{
    console.log(collapsed )
    setCollapsed(collapsed )
  }
  return (
    <Layout style={{minHeight:'100vh',display:'flex',flexDirection:"row"}}>
      <Sider collapsible  collapsed={collapsed} onCollapse={onCollapse}>左侧栏</Sider>
      <Layout>
        <Header>头部信息</Header>
        <Content>内容</Content>
        <Footer>
          <div>copyright</div>
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