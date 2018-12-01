import React from "react";
import { Route } from "react-router-dom";
import { Paper } from "@material-ui/core";

import { Header, UserControl } from "../components";

const headerLinks = [
  {
    link: "/dashboard/admin/user-control",
    text: "User Control"
  }
];

function AdminRoutes() {
  return (
    <>
      <Route
        path="/dashboard/admin"
        render={props => <Header {...props} headerLinks={headerLinks} />}
      />
      <div className="background device">
        <Paper className="device-content-bg">
          <Route path="/dashboard/admin/user-control" component={UserControl} />
        </Paper>
      </div>
    </>
  );
}

export default AdminRoutes;
