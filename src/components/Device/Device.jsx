import React, { useState, useEffect } from "react";
import { useAsync } from "react-use";

import { Device as DeviceRequests } from "../../services/API";
import DeviceView from "./Device.view";
import DeviceTable from "./DeviceTable";

function Device(props) {
  const [tableRows, setTableRows] = useState([]);
  useEffect(() => {
    const { loading, value, error } = useAsync(DeviceRequests.get);
  });
  return <DeviceView deviceTableComponent={<DeviceTable rows={tableRows} />} />;
}
export default Device;
