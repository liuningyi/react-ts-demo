import React from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";

import routes from "../router";

import "./App.less";

const App = () => {
  const element = useRoutes(routes);
  return element;
};

const AppWrapper = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

export default AppWrapper;
