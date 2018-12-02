import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { translate } from "react-i18next";

import DashboardRoutes from "./DashboardRoutes";
import AdminRoutes from "./AdminRoutes";
import { Login, Register } from "../components";

//Route types
import UserRoute from "./RouteTypes/UserRoute";
import AdminRoute from "./RouteTypes/AdminRoute";
import RedirectByRights from "./RouteTypes/RedirectByRights";

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
          <AdminRoute path="/dashboard/admin" component={AdminRoutes} />
          <UserRoute path="/dashboard" component={DashboardRoutes} />
          <RedirectByRights path="/" />
        </Switch>
      </Suspense>
    </>
  );
}

export default translate("translations")(AppRoutes);
