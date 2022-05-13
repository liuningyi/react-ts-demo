// import { Col, Row } from 'antd'
import { Button, Divider } from "antd";
import React, { memo, useCallback, useMemo, useState } from "react";

import "./App.less";

const ComponentA = memo((props: any) => {
  console.log("--------A----------");
  return (
    <>
      <h1>组件A 展示姓名</h1>
      <p>{props.name}</p>
    </>
  );
});

const ComponentB = memo((props: any) => {
  console.log("----------B------------");
  return (
    <>
      <h1>组件B 展示年纪</h1>
      <p>{props.age}</p>
    </>
  );
});

const ComponentC = (props: any) => {
  console.log("----------C------------");
  props.fn(1);
  return (
    <>
      <h1>组件C 展示性别</h1>
      <p>{props.sex}</p>
    </>
  );
};

export default function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [sex, setSex] = useState("男");

  const [aa, setA] = useState(1);

  const fn = useCallback((a) => {
    console.log("--------一个函数------", a);
  }, [aa]);

  return (
    <>
      <ComponentA name={name} />
      <ComponentB age={age} />
      {useMemo(
        () => (
          <ComponentC sex={sex} fn={fn} />
        ),
        [sex, fn]
      )}
      <Divider />
      <Button
        onClick={() => {
          setName("柳宁依" + Math.trunc(Math.random() * 100));
        }}
      >
        修改姓名
      </Button>
      <Button
        onClick={() => {
          setAge(Math.random() * 100);
        }}
      >
        修改年纪
      </Button>
      <Button
        onClick={() => {
          setSex(sex === "女" ? "男" : "女");
          setA(aa + 1);
        }}
      >
        修改性别
      </Button>
    </>
  );
}
