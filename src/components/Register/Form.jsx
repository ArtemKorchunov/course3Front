import React from "react";
import { Trans } from "react-i18next";
import { Button } from "@material-ui/core";
import { Formik, FastField } from "formik";
import { CustomInput } from "../util/form";

function RegisterForm({ values, onSubmit }) {
  return (
    <Formik
      initialValues={values}
      onSubmit={onSubmit}
      render={props => {
        return (
          <form onSubmit={props.handleSubmit}>
            <FastField label="Name" name="name" component={CustomInput} />
            <FastField
              label={<Trans>Email</Trans>}
              name="email"
              type="email"
              component={CustomInput}
            />
            <FastField
              label={<Trans>Password</Trans>}
              name="password"
              type="password"
              component={CustomInput}
            />
            <FastField
              label={<Trans>Confirm Password</Trans>}
              name="confirm_password"
              type="password"
              component={CustomInput}
            />
            <Button variant="outlined" color="primary" type="submit">
              <Trans>Submit</Trans>
            </Button>
            {props.errors.general && <div>props.errors.general</div>}
          </form>
        );
      }}
    />
  );
}

export default RegisterForm;
