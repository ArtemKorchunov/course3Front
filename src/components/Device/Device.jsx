import React, { useState } from "react";
import { useAsync } from "react-use";

import { Device as DeviceRequests } from "../../services/API";
import DeviceView from "./Device.view";
import DeviceTable from "./DeviceTable";

function Device(props) {
  const { value: deviceResponse = { data: [] }, error } = useAsync(
    DeviceRequests.get
  );

  return (
    <DeviceView
      deviceTableComponent={<DeviceTable rows={deviceResponse.data} />}
    />
  );
}
export default Device;
