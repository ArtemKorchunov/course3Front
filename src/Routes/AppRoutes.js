import React, { Suspense } from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import DeviceRoutes from "./DeviceRoutes";
import { Login, Register } from "../components";

function AppRoutes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/login" render={props => <Login {...props} />} />
        <Route path="/register" render={props => <Register {...props} />} />
        <Route path="/device" component={DeviceRoutes} />
        <Redirect exact from="/" to="/device" />
      </Switch>
    </Suspense>
  );
}

export default AppRoutes;
