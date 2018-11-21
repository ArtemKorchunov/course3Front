import React from "react";
import { Route } from "react-router-dom";
import { Paper } from "@material-ui/core";

import { Header } from "../components";
import DeviceRoutes from "./DeviceRoutes";

function DashboardRoutes() {
  return (
    <>
      <Route path="/dashboard" render={props => <Header {...props} />} />
      <div className="background device">
        <Paper className="device-content-bg">
          <Route path="/dashboard/device" component={DeviceRoutes} />
        </Paper>
      </div>
    </>
  );
}

export default DashboardRoutes;
