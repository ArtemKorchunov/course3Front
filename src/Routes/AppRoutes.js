import React, { Suspense } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { translate } from "react-i18next";

import DashboardRoutes from "./DashboardRoutes";
import { Login, Register } from "../components";

function AppRoutes({ i18n }) {
  return (
    <>
      <div className="language-wrap">
        <button onClick={() => i18n.changeLanguage("uk")}>uk</button>
        <button onClick={() => i18n.changeLanguage("en")}>en</button>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/login" render={props => <Login {...props} />} />
          <Route path="/register" render={props => <Register {...props} />} />
          <Route path="/dashboard" component={DashboardRoutes} />
          <Redirect exact from="/" to="/dashboard/device" />
        </Switch>
      </Suspense>
    </>
  );
}

export default translate("translations")(AppRoutes);
