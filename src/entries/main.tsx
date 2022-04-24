import React from "react";
import {render} from "react-dom";

// import App from "../scripts/App"; // 路由页面
// import App from "../scripts/menupages/App" // menu菜单页面
// import App from "../scripts/reactIntl/App" // 国际化多语言
// import "../scripts/global/react-i18n"; // 多语言

// import App from "../scripts/App"; // 路由页面
// import App from "../scripts/menupages/App" // 菜单页面
import App from "../scripts/antmobile/App" // 移动端h5项目
// import App from "../scripts/global/App" // 多语言项目


render(<App />,document.querySelector("#app"));