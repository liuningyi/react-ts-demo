import { Table } from "antd";
import React from "react";

const columns: any = [
  {
    title: "Company",
    children: [
      {
        title: "Company Address",
        dataIndex: "companyAddress",
        key: "companyAddress",
        width: 200,
      },
      {
        title: "Company Name",
        dataIndex: "companyName",
        key: "companyName",
      },
    ],
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
    width: 80,
    fixed: "right",
  },
];

// const data:any = [];
// for (let i = 0; i < 100; i++) {
//   data.push({
//     key: i,
//     name: 'John Brown',
//     age: i + 1,
//     street: 'Lake Park',
//     building: 'C',
//     number: 2035,
//     companyAddress: 'Lake Street 42',
//     companyName: 'SoftLake Co',
//     gender: 'M',
//   });
// }

const data: any = [
  { companyAddress: "Lake Street 42", companyName: "SoftLake Co", gender: "M" },
];

export default () => (
  <Table
    columns={columns}
    dataSource={data}
    bordered
    size="middle"
    scroll={{ x: "calc(700px + 50%)", y: 240 }}
  />
);
