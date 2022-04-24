import React from "react";
import { Trans, Translation, useTranslation } from "react-i18next";

export default function App() {
  const { t } = useTranslation();
  return (
    <div>
      <p>{t("我喜欢你")}</p>
      <Translation>{(t) => <p>{t("我今年25岁了")}</p>}</Translation>
      <Trans>我今年25岁了</Trans>
      <p>{t("my_name",{name:"柳宁依"})}</p>
    </div>
  );
}

// function App({ t }: any) {
//   return <div>
//       <p>{t("苹果")}</p>
//   </div>;
// }

// export default withTranslation()(App);
