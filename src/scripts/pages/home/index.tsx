import { Button } from "antd";
import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";


function MyComponent({list,type}:any){
  console.log("MyComponent更新了",type);
  return (
    <ul>
      {
        list.map((item:any,index:number)=>{
          return <li>{index}、{item}</li>
        })
      }
    </ul>
  )
}

export default function () {
  const [count,setCount]=useState(0);
  const [list,setList]=useState<any>(["第一条","第二条","第三条"]);

  const navigate = useNavigate();
  
  useEffect(() => {
    console.log(12456);
  }, []);


  return (
    <div>
      <div style={{display:'flex',justifyContent:'space-around',margin:'20px'}}>
        <Button type="primary" onClick={() => { navigate("/page1"); }}>去page1</Button>
        <Button type="primary" onClick={() => { navigate("/page2") }}>去page2</Button>
        <Button type="primary" onClick={() => { navigate("/qiankunMainTab") }}>去qiankunMainTab</Button>
      </div>
      <h1>第{count}次的标题</h1>
      <div>
        <button onClick={()=>{setCount(count+1)}}>更改次数</button>
        <button onClick={()=>{setList([...list,Math.random()])}}>更改list</button>
      </div>
      <MyComponent list={list} type="noMemo" />
      <h2>下面是用了Memo优化包裹的</h2>
      {
        useMemo(()=>{
          return <MyComponent list={list} type="hasMemo" />
        },[list])
      }
    </div>
  );
}
