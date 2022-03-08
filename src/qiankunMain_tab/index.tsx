import { Tabs } from 'antd';
import React, { useState } from 'react';

const { TabPane } = Tabs;

interface IInitialPanes {
    title: string,
    content: string,
    key: string,
    closable?: boolean
}

const initialPanes: IInitialPanes[] = [
    { title: 'Tab 1', content: 'Content of Tab 1', key: '1' },
    { title: 'Tab 2', content: 'Content of Tab 2', key: '2' },
    {
        title: 'Tab 3',
        content: 'Content of Tab 3',
        key: '3',
        closable: false,
    },
];

function callback(key: any) {
    console.log(key);
}

const Demo = () => {
    const [pane, setPane] = useState(initialPanes);
    const [activeKey, setActiveKey] = useState(initialPanes[0].key);

    const onEdit = (targetKey: any, action: any) => {
        console.log(targetKey, action);
        if (action === "add") {
            const newPane = [...pane, { title: "Tab " + Math.random(), content: "Content of Tab " + Math.random(), key: Math.random().toString() }]
            setPane(newPane)
        } else if (action === "remove") {
            // 若是删除的当前active则前一个变active，否则直接删除保持原active不变
            // 要考虑到有可能删除的是第一个（第二个也是），name就不能往前找了，直接取剩下的第一个
            const newPane = pane.filter(p => p.key !== targetKey);
            const curIndex = pane.map(p => p.key).indexOf(targetKey);
            let newActiveIndex: string;
            if (newPane.length && targetKey === activeKey) {
                if (curIndex - 1 <= 0) {
                    newActiveIndex = newPane[0].key;
                } else {
                    newActiveIndex = newPane[curIndex - 1].key;
                }
                setPane(newPane);
                setActiveKey(newActiveIndex);
            }
        }
    }


    return (
        <Tabs defaultActiveKey={activeKey} onChange={callback} onEdit={onEdit}
            type="editable-card"
            tabBarGutter={5} >
            {
                pane.map((p: any) => (
                    <TabPane tab={p.title} key={p.key}>
                        {p.content}
                    </TabPane>
                ))
            }
        </Tabs >
    )
}

export default Demo;