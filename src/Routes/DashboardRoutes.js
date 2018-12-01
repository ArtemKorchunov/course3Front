import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Paper } from "@material-ui/core";

import { Header, OtherAnalytics } from "../components";
import DeviceRoutes from "./DeviceRoutes";
import ChartRoutes from "./ChartRoutes";

const headerLinks = [
  {
    link: "/dashboard/device",
    text: "Device"
  },
  {
    link: "/dashboard/live-chart",
    text: "Live Chart"
  },
  {
    link: "/dashboard/other-analytics",
    text: "Other Analytics"
  }
];
function DashboardRoutes() {
  return (
    <>
      <Route
        path="/dashboard"
        render={props => <Header {...props} headerLinks={headerLinks} />}
      />
      <div className="background device">
        <Paper className="device-content-bg">
          <Route path="/dashboard/device" component={DeviceRoutes} />
          <Route path="/dashboard/live-chart" component={ChartRoutes} />
          <Route path="/dashboard/other-analytics" component={OtherAnalytics} />
        </Paper>
      </div>
    </>
  );
}

export default DashboardRoutes;
