import React, { useState } from "react";
import { useMount } from "react-use";

import { Device as DeviceRequests } from "../../../services/API";
import { formErrorsWrap } from "../../util/form";
import DeviceDialog from "../DeviceDialog.view";
import Form from "../Form";

function DeviceEdit({ history, match }) {
  const [deviceValues, setDeviceValues] = useState({});
  useMount(() => {
    DeviceRequests.getById(match.params.id).then(res => {
      const { status, id, ...other } = res.data.data;
      setDeviceValues({ ...other, status: status ? ["active"] : [] });
    });
  });
  function onClose() {
    history.push("/dashboard/device");
  }
  async function onSubmit(values, { setErrors }) {
    try {
      const { status, ...other } = values;
      await DeviceRequests.update(
        {
          ...other,
          status: status.length ? true : false,
          charts: [1]
        },
        match.params.id
      );
      history.push("/dashboard/device");
    } catch (err) {
      formErrorsWrap(setErrors, err);
    }
  }
  return (
    <DeviceDialog
      onClose={onClose}
      formComponent={
        !!Object.keys(deviceValues).length && (
          <Form
            values={deviceValues}
            btnText="Edit Device"
            onSubmit={onSubmit}
          />
        )
      }
    />
  );
}
export default DeviceEdit;
