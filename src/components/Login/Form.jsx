import React from "react";
import { Formik, FastField, Form } from "formik";
import { CustomInput } from "../util/form";

function LoginForm() {
  return (
    <Formik
      initialValues={{ email: "jared", password: "" }}
      onSubmit={(values, actions) => {}}
      render={props => {
        return (
          <form onSubmit={props.handleSubmit}>
            <FastField label="Email" name="email" component={CustomInput} />
            <FastField
              label="Password"
              name="password"
              type="password"
              component={CustomInput}
            />
            <button type="submit">Submit</button>
          </form>
        );
      }}
    />
  );
}

export default LoginForm;
