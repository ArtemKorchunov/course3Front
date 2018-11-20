import React, { Suspense } from "react";
import { Route } from "react-router-dom";

import { Device, Header, DeviceAdd, DeviceEdit } from "../components";

function DeviceRoutes() {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Route path="/device" render={props => <Device {...props} />} />
        <Route path="/device/add" component={DeviceAdd} />
        <Route path="/device/edit/:id" component={DeviceEdit} />
      </Suspense>
    </>
  );
}

export default DeviceRoutes;
