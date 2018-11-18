import React, { Suspense } from "react";
import { Route } from "react-router-dom";

import { Device, Header } from "../components";

function DeviceRoutes() {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Route path="/device" render={props => <Device {...props} />} />
      </Suspense>
    </>
  );
}

export default DeviceRoutes;
