import React from "react";
import { RouteObject } from "react-router";

import Home from "../scripts/pages/home";
import Page1 from "../scripts/pages/page1";
import Page2 from "../scripts/pages/page2";
import Page3 from "../scripts/pages/page3";
import QiankunMainTab from "../qiankunMain_tab";

// 在百世中有使用
import BestCom from "../scripts/baishiDemo/App";

const routes: RouteObject[] = [
  { path: "/", element: <Home /> },
  { path: "/page1", element: <Page1 /> },
  { path: "/page2", element: <Page2 /> },
  { path: "/page3", element: <Page3 /> },
  { path: "/qiankunMainTab", element: <QiankunMainTab /> },
  { path: "/best", element: <BestCom /> },
];

export default routes;
