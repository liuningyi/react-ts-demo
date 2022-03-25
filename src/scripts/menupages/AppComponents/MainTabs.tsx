import { Tabs } from "antd";
import React from "react";

import Page1 from 'scripts/pages/page1';
import Page2 from 'scripts/pages/page2';
import Page3 from 'scripts/pages/page3';

const pages = [Page1, Page2, Page3];

const panes = new Array(3).fill(null).map((_, index) => {
    const key = "key" + String(index + 1);
    const Component = pages[index];
    return { key, title: `Tab${key}`, content: <Component /> }
});

interface IMainTabs {
    activeKey: string;
    onChange(key: string): void
    onEdit(panes:any):void
}

const MainTabs = (props: IMainTabs) => {
    const { activeKey } = props;

    // tabs切换-更改当前激活页
    const handleTabsChange = (activeKey: string) => {
        props.onChange(activeKey)
    }

    // 删除tab页，更新当前激活页
    const handleRemoveTabs = (targetKey: any, action: string) => {
        console.log(targetKey, action)
        if (action === "remove") {
            // 若删除的是第1个或第2标签，取剩余的第一个当当前默认
            // 否则，取删除标签的前一个当当前默认
            // 只剩最有一个tab时，删除无效
            const curIndex = panes.map(p => p.key).indexOf(targetKey);
            const newPanes = panes.filter(p => p.key !== targetKey);
            if (!newPanes.length) return;

            const newKey = curIndex < 2 ? newPanes[0].key : newPanes[curIndex - 1].key;
            props.onChange(newKey)
            props.onEdit(newPanes);
        }
    }

    return (
        <Tabs type="editable-card" hideAdd activeKey={activeKey} onChange={handleTabsChange} onEdit={handleRemoveTabs}>
            {
                panes.map(p => <Tabs.TabPane key={p.key} tab={p.title} closable={true}>
                    {p.content}
                </Tabs.TabPane>)
            }
        </Tabs>
    )
}

export default MainTabs;