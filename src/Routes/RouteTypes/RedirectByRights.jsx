import React from "react";
import { Route, Redirect } from "react-router-dom";
import { localStorageApi } from "services";

function RedirectByRights({ ...rest }) {
  console.log(rest);
  return (
    <Route
      {...rest}
      render={props => {
        return (
          (localStorageApi.getItem("isAdmin") === undefined && (
            <Redirect to="/login" />
          )) ||
          (localStorageApi.getItem("isAdmin") === "true" && (
            <Redirect to="/dashboard/admin/user-control" />
          )) ||
          (localStorageApi.getItem("isAdmin") === "false" && (
            <Redirect to="/dashboard/device" />
          ))
        );
      }}
    />
  );
}

export default RedirectByRights;
