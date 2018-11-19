import React from "react";
import { Button } from "@material-ui/core";
import { Formik, FastField } from "formik";
import { CustomInput } from "../util/form";

function LoginForm({ values, onSubmit }) {
  return (
    <Formik
      initialValues={values}
      onSubmit={onSubmit}
      render={props => {
        console.log(props);
        return (
          <form onSubmit={props.handleSubmit}>
            <FastField
              label="Email"
              name="email"
              type="email"
              component={CustomInput}
            />
            <FastField
              label="Password"
              name="password"
              type="password"
              component={CustomInput}
            />
            <Button variant="outlined" color="primary" type="submit">
              Submit
            </Button>
            {props.errors.general && <div>{props.errors.general}</div>}
          </form>
        );
      }}
    />
  );
}

export default LoginForm;
