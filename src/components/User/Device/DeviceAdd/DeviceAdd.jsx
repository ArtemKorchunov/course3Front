import React, { useState } from "react";
import { Trans } from "react-i18next";

import { Device as DeviceRequests } from "services/API";
import { formErrorsWrap } from "components/util/form";
import DeviceDialog from "../DeviceDialog.view";
import Form from "../Form";

function DeviceAdd({ history }) {
  const [deviceValues] = useState({ name: "", description: "", status: [] });
  function onClose() {
    history.push("/dashboard/device");
  }
  async function onSubmit(values, { setErrors }) {
    try {
      const { status, ...other } = values;
      await DeviceRequests.create({
        ...other,
        status: status.length ? true : false,
        charts: [1]
      });
      history.push("/dashboard/device");
    } catch (err) {
      formErrorsWrap(setErrors, err);
    }
  }
  return (
    <DeviceDialog
      onClose={onClose}
      formComponent={
        <Form
          values={deviceValues}
          btnText={<Trans>Add Device</Trans>}
          onSubmit={onSubmit}
        />
      }
    />
  );
}
export default DeviceAdd;
