import { IPane } from "./types";

/**
 * @param allTabs 已有tab列表
 * @param activeKey 当前激活页
 * @param removeKey 要移除页面
 */
export function removeTabsPane(
  allTabs: IPane[],
  activeKey: string,
  removeKey: string
) {
  if (allTabs.length === 1) return { panes: allTabs, key: activeKey };

  let newTabs = allTabs.filter((tab: IPane) => tab.key !== removeKey);
  let newKey = activeKey;

  if (activeKey === removeKey) {
    const index = allTabs.map((tab: IPane) => tab.key).indexOf(removeKey);
    newKey = index < 2 ? newTabs[0].key : newTabs[index - 1].key;
  }

  return { panes: newTabs, key: newKey };
}

/**
 * @param allTabs 已有tab列表
 * @param newTab 新tab数据
 */
export function addTabsPane(allTabs: IPane[], newTab: IPane) {
  let newPanes: IPane[] = allTabs;
  const existTab = allTabs.find((tab: IPane) => tab.key === newTab.key);
  if (!existTab) {
    newPanes.push(newTab);
  }
  return { panes: newPanes, key: newTab.key };
}
