import React, { useState } from "react";
import { Trans } from "react-i18next";

import { useAsyncFilterResp } from "components/hooks";

import DashboardWrap from "components/DashboardWrap";
import "./UserControl.scss";

function UserControl() {
  //   const [options, loading] = useAsyncFilterResp(Device.get, [], value =>
  //     value.data.data.map(item => ({
  //       value: item.id,
  //       label: item.name
  //     }))
  //   );
  console.log("UserControl");

  return (
    <DashboardWrap
      headlineTitle={<Trans>User Control</Trans>}
      contentComponent={<div>ddd</div>}
    />
  );
}
export default UserControl;
