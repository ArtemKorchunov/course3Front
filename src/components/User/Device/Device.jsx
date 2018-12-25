import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { Trans } from "react-i18next";

import { Device as DeviceRequests, getSensors } from "services/API";
import DashboardWrap from "components/DashboardWrap";
import DeviceTable from "./DeviceTable";
import "./Device.scss";
import { useAsyncFilterResp } from "../../hooks";

function Device({ history }) {
  const [rows, setRows] = useState([]);
  
  useEffect(
    () => {
      if (history.location.pathname === "/dashboard/device") {
        try {
        DeviceRequests.get().then(res => {
          setRows(res.data.data);
        });
      } catch(err) {
        console.dir(err)
      } 
      }
    },
    [history.location.pathname]
  );
  const [sensors] = useAsyncFilterResp(getSensors, [], value =>
    value.data.data.map(item => ({
      value: item.id,
      label: item.name
    }))
  );
  async function onDelete(id) {
    setRows(rows.filter(item => item.id !== id));
    try {
      await DeviceRequests.delete(id);
    } catch (err) {}
  }

  return (
    <DashboardWrap
      headlineTitle={<Trans>Device</Trans>}
      contentComponent={
        <DeviceTable
          rows={rows}
          onEditBtnClick={id => history.push({ pathname: `/dashboard/device/edit/${id}`, state: { sensors }})}
          onDeleteBtnClick={onDelete}
        />
      }
      headlineComponent={
        <div className="btn-wrap btn-wrap_align-center">
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => history.push({ pathname: `/dashboard/device/add`, state: { sensors }})}
          >
            {<Trans>Add Device</Trans>}
          </Button>
        </div>
      }
    />
  );
}
export default Device;
