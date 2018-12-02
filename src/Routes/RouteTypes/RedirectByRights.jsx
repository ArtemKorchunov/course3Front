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
          (localStorageApi.getItem("admin") === undefined && (
            <Redirect to="/login" />
          )) ||
          (localStorageApi.getItem("admin") === "true" && (
            <Redirect to="/dashboard/admin/user-control" />
          )) ||
          (localStorageApi.getItem("admin") === "false" && (
            <Redirect to="/dashboard/device" />
          ))
        );
      }}
    />
  );
}

export default RedirectByRights;
