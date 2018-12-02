import React from "react";
import { Route, Redirect } from "react-router-dom";
import { localStorageApi } from "services";

function AdminRoute({ component: Component, routeProps = {}, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => {
        return localStorageApi.getItem("admin") === "true" ? (
          <Component {...props} {...routeProps} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
}

export default AdminRoute;
