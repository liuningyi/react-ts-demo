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
    change(key: string): void
}
const MainTabs = (props: IMainTabs) => {
    const { activeKey } = props;

    const handleTabsChange = (activeKey: string) => {
        console.log(activeKey)
        props.change(activeKey)
    }

    console.log(panes)

    return (
        <Tabs activeKey={activeKey} onChange={handleTabsChange}>
            {
                panes.map(p => <Tabs.TabPane key={p.key} tab={p.title}>
                    {p.content}
                </Tabs.TabPane>)
            }
        </Tabs>
    )
}

export default MainTabs;