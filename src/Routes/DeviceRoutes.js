import React, { Suspense } from "react";
import { Route } from "react-router-dom";

import { Device, DeviceAdd, DeviceEdit } from "../components";

function DeviceRoutes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Route path="/dashboard/device" render={props => <Device {...props} />} />
      <Route path="/dashboard/device/add" component={DeviceAdd} />
      <Route path="/dashboard/device/edit/:id" component={DeviceEdit} />
    </Suspense>
  );
}

export default DeviceRoutes;
