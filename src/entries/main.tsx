import React from "react";
import {render} from "react-dom";

import App from "../scripts/App"; // 路由页面
// import App from "../scripts/menupages/App" // menu菜单页面
// import App from "../scripts/global/reactIntl/App" // 国际化多语言
// import "../scripts/global/reacti18n/App"; // 多语言
// import App from "../scripts/global/App" // 多语言项目
// import App from "../scripts/App"; // 路由页面
// import App from "../scripts/menupages/App" // 菜单页面
// import App from "../scripts/antmobile/App" // 移动端h5项目


render(<App />,document.querySelector("#app"));