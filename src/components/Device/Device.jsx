import React, { useState, useEffect } from "react";

import { Device as DeviceRequests } from "../../services/API";
import DeviceView from "./Device.view";
import DeviceTable from "./DeviceTable";

function Device({ history }) {
  const [rows, setRows] = useState([]);
  useEffect(
    () => {
      if (history.location.pathname === "/device") {
        DeviceRequests.get().then(res => {
          setRows(res.data.data);
        });
      }
    },
    [history.location.pathname]
  );
  async function onDelete(id) {
    setRows(rows.filter(item => item.id !== id));
    try {
      await DeviceRequests.delete(id);
    } catch (err) {}
  }
  return (
    <DeviceView
      deviceTableComponent={
        <DeviceTable
          rows={rows}
          onEditBtnClick={id => history.push(`/device/edit/${id}`)}
          onDeleteBtnClick={onDelete}
        />
      }
      onAddBtnClick={() => history.push("/device/add")}
    />
  );
}
export default Device;
