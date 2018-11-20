import React, { useState } from "react";

import { Device as DeviceRequests } from "../../../services/API";
import { formErrorsWrap } from "../../util/form";
import DeviceDialog from "../DeviceDialog.view";
import Form from "../Form";

function DeviceAdd({ history }) {
  const [deviceValues] = useState({ name: "", description: "", status: [] });
  function onClose() {
    history.push("/device");
  }
  async function onSubmit(values, { setErrors }) {
    try {
      const { status, ...other } = values;
      await DeviceRequests.create({
        ...other,
        status: status.length ? true : false,
        charts: [1]
      });
      history.push("/device");
    } catch (err) {
      formErrorsWrap(setErrors, err);
    }
  }
  return (
    <DeviceDialog
      onClose={onClose}
      formComponent={
        <Form values={deviceValues} btnText="Add Device" onSubmit={onSubmit} />
      }
    />
  );
}
export default DeviceAdd;
