import { Button } from "antd";
import React from "react";
import {
  BrowserRouter,
  useRoutes, useNavigate
} from "react-router-dom";

import routes from "../router";

import "./App.less";

const App = () => {
  const element = useRoutes(routes);
  const navigate = useNavigate();
  return (
    <>
      <div style={{display:'flex',justifyContent:'space-around',margin:'20px'}}>
        <Button type="primary" onClick={() => { navigate("/page1"); }}>去page1</Button>
        <Button type="primary" onClick={() => { navigate("/page2") }}>去page2</Button>
        <Button type="primary" onClick={() => { navigate("/qiankunMainTab") }}>去qiankunMainTab</Button>
      </div>
      <hr />
      {element}
    </>
  );
};

const AppWrapper = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

export default AppWrapper;
