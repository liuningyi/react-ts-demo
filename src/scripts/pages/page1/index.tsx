import React from "react";
// import { useNavigate } from "react-router";
// import { DatePicker } from "antd";

import "./index.less";

// const Page1 = () => {
//     const navigate =useNavigate();
//     return (
//         <div className="page_1" style={{height:"500px"}}>
//             我是page1，哈哈哈
//             <p onClick={()=>{navigate("/")}}>点我回到首页</p>
//             <DatePicker />
//         </div>
//     )
// }

// export default Page1;

export default function () {
  return (
    <div className="parent">
      <div className="span-12"></div>
      <div className="span-7"></div>
      <div className="span-12"></div>
      <div className="span-7"></div>
    </div>
  );
}
