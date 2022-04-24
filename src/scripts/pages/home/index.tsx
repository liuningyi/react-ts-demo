import React from "react";

import { useState, useEffect } from "react";

const promise = (params: any): Promise<any> => {
  return new Promise((resolve, _reject) => {
    resolve({ age: 12, name: "柳宁依", message: params.msg });
  });
};

function useUser(id: any) {
  const [useInfo, setUserInfo] = useState({});
  useEffect(() => {
    promise({ msg: "我来测试啦" }).then((res) => {
      setUserInfo(res);
    });
  }, [id]);
  return useInfo;
}

export default function index() {
  const [id, setId] = useState(1);
  const userInfo = useUser(id);
  console.log(userInfo);
  const handleClick = () => {
    console.log("改变前的id值", id);
    setId(id + 1);
  };
  return (
    <div>
      <button onClick={handleClick}>点我改变id值</button>
    </div>
  );
}
