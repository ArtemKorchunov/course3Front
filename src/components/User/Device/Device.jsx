import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { Trans } from "react-i18next";

import { Device as DeviceRequests } from "services/API";
import DashboardWrap from "components/DashboardWrap";
import DeviceTable from "./DeviceTable";
import "./Device.scss";

function Device({ history }) {
  const [rows, setRows] = useState([]);
  useEffect(
    () => {
      if (history.location.pathname === "/dashboard/device") {
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
    <DashboardWrap
      headlineTitle={<Trans>Device</Trans>}
      contentComponent={
        <DeviceTable
          rows={rows}
          onEditBtnClick={id => history.push(`/dashboard/device/edit/${id}`)}
          onDeleteBtnClick={onDelete}
        />
      }
      headlineComponent={
        <div className="btn-wrap btn-wrap_align-center">
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => history.push("/dashboard/device/add")}
          >
            {<Trans>Add Device</Trans>}
          </Button>
        </div>
      }
    />
  );
}
export default Device;
