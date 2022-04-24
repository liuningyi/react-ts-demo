import React from "react";
import {render} from "react-dom";

import App from "../scripts/App"; // 路由页面
// import App from "../scripts/menupages/App" // menu菜单页面
// import App from "../scripts/reactIntl/App" // 国际化多语言

render(<App />,document.querySelector("#app"));