import { Card, List, PullToRefresh, SearchBar, Tabs } from "antd-mobile";
import React from "react";

import "./App.less"

export default function App() {
  return (
    <div>
      <Tabs>
        <Tabs.Tab title="水果" key="fruits">
          <SearchBar></SearchBar>
        </Tabs.Tab>
        <Tabs.Tab title="蔬菜" key="vegetables">
          <div className="myList">
            <PullToRefresh 
              onRefresh={async ()=>{console.log("我来下拉刷新饿了")}}
            >
              <List header="我来测试List组件使用">
                <List.Item
                  title="标题"
                  description="下部描述区域"
                >
                  主内容区域
                </List.Item>
              </List>
              <List>
                <List.Item>嘻嘻嘻</List.Item>
              </List>
            </PullToRefresh>
          </div>
        </Tabs.Tab>
        <Tabs.Tab title="动物" key="animals">
          <Card title="我来测试卡片了">
            哈哈哈哈
          </Card>
          <Card title="我来测试卡片了">
            哈哈哈哈
          </Card>
        </Tabs.Tab>
      </Tabs>
    </div>
  );
}
