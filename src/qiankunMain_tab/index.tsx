import { Tabs } from "antd";
import React, { useState } from "react";

const { TabPane } = Tabs;

interface IInitialPanes {
    title: string;
    content: string;
    key: string;
    closable?: boolean;
}

const initialPanes: IInitialPanes[] = [
    { title: "Tab 1", content: "Content of Tab 1", key: "111" },
    { title: "Tab 2", content: "Content of Tab 2", key: "222" },
    {
        title: "Tab 3",
        content: "Content of Tab 3",
        key: "333",
        closable: false,
    },
];

const Demo = () => {
  const [pane, setPane] = useState(initialPanes);
  const [activeKey, setActiveKey] = useState(initialPanes[0].key);

    const onChange = (key: string) => {
        setActiveKey(key);
    };
    const onEdit = (targetKey: any, action: any) => {
        if (action === "add") {
            const newPane = [
                ...pane,
                {
                    title: "Tab " + Math.random(),
                    content: "Content of Tab " + Math.random(),
                    key: Math.random().toString(),
                },
            ];
            setPane(newPane);
        } else if (action === "remove") {
            // 若是删除的当前active则前一个变active，否则直接删除保持原active不变
            // 要考虑到有可能删除的是第一个（第二个也是），name就不能往前找了，直接取剩下的第一个
            const newPane = pane.filter((p) => p.key !== targetKey);
            const curIndex = pane.map((p) => p.key).indexOf(targetKey);
            let newActiveKey = activeKey;
            if (newPane.length && targetKey === activeKey) {
                if (curIndex - 1 <= 0) {
                    newActiveKey = newPane[0].key;
                } else {
                    newActiveKey = newPane[curIndex - 1].key;
                }
            }
            setPane(newPane);
            setActiveKey(newActiveKey);
        }
    };

    return (
        <Tabs
            activeKey={activeKey}
            onChange={onChange}
            onEdit={onEdit}
            type="editable-card"
            tabBarGutter={5}
        >
            {pane.map((p: any) => (
                <TabPane tab={p.title} key={p.key}>
                    {p.content}
                </TabPane>
            ))}
        </Tabs>
    );
};

export default Demo;
