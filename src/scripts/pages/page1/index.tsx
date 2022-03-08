import React from "react";
import { useNavigate } from "react-router";
import { DatePicker } from "antd";

const Page1 = () => {
    const navigate =useNavigate();
    return (
        <>
            我是page1，哈哈哈
            <p onClick={()=>{navigate("/")}}>点我回到首页</p>
            <DatePicker />
        </>
    )
}

export default Page1;