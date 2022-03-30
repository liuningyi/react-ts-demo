export interface IMainTabs {
  activeKey: string;
  panes: IPane[];
  onChange(key: string): void;
  onEdit(action: string, params: ITabEditParams): void;
}

export interface ISideMenu {
  activeKey: string;
  menuList: IMenu[];
  change(key: string): void;
}

export interface IMenu {
  key: string;
  title: string;
  icon?: JSX.Element; // 仅SubMenu
  children?: IMenu[]; // 仅SubMenu有
  page?: () => JSX.Element; // 仅Menu.Item有
}

export interface IPane {
  key: string;
  title: string;
  page: () => JSX.Element;
}

export interface ITabEditParams {
  removeKey?: string;
  tab?: IPane;
}

export enum TabEditAction {
  add = "add",
  remove = "remove",
}
