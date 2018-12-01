import React from "react";
import { Route, Redirect } from "react-router-dom";
import { localStorageApi } from "services";

function UserRoute({ component: Component, routeProps = {}, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => {
        return localStorageApi.getItem("isAdmin") === "false" ? (
          <Component {...props} {...routeProps} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
}

export default UserRoute;
