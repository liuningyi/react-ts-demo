import { Divider, Select } from "antd";
import React, { useState } from "react";
import { FormattedMessage, IntlProvider, useIntl } from "react-intl";

import EN from "./en";
import ZH from "./zh";

import "./App.less";

const fields: { [key: string]: any } = {
  en: EN,
  zh: ZH,
};

interface IAppProps {
  field: { [key: string]: string };
}

const App = (props: IAppProps) => {
  const { field } = props;
  const intl=useIntl();
  const test=intl.formatMessage({
      id:"FE_hello",
      defaultMessage:field.FE_hello
  },{
      name:"杭州"
  });
  return (
    <div className="reactintl-app">
      <h1>{field.FE_hello}</h1>
      <FormattedMessage
        id="FE_hello"
        defaultMessage={field.FE_hello}
        values={{ name: "杭州" }}
      ></FormattedMessage>
      <h2>{test}</h2>
    </div>
  );
};

const AppWraper = () => {
  const [lang, setLang] = useState("zh");
  const handleLang = (value: any, values2: any) => {
    console.log(value, values2);
    setLang(values2.value);
  };

  const field = fields[lang];

  return (
    <div className="app-wraper">
      <h3>请选择语言</h3>
      <Select
        options={[
          { label: "英文", value: "en" },
          { label: "中文", value: "zh", key: "哈哈哈哈" },
        ]}
        onChange={handleLang}
      ></Select>
      <Divider></Divider>
      <IntlProvider locale={lang} key={lang} messages={field}>
        <App field={field} />
      </IntlProvider>
    </div>
  );
};

export default AppWraper;
