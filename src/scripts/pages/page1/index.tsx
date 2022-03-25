import React from "react";
// import { useNavigate } from "react-router";
import { DatePicker } from "antd";

import "../../App.less"

const Page1 = () => {
    // const navigate =useNavigate();
    return (
        <div style={{height:"500px"}}>
            我是page1，哈哈哈
            {/* <p onClick={()=>{navigate("/")}}>点我回到首页</p> */}
            <DatePicker />
        </div>
    )
}

export default Page1;