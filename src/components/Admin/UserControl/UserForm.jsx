import React from "react";
import { Button } from "@material-ui/core";
import { Trans } from "react-i18next";
import { Formik, FastField } from "formik";
import { CustomInput } from "../../util/form";

function DeviceForm({ values, onSubmit, btnText }) {
  return (
    <div className="form-wrap">
      <Formik
        initialValues={values}
        onSubmit={onSubmit}
        render={props => {
          return (
            <form onSubmit={props.handleSubmit}>
              <FastField
                label={<Trans>Name</Trans>}
                name="name"
                type="text"
                component={CustomInput}
              />
              <FastField
                label={<Trans>Email</Trans>}
                name="email"
                type="text"
                multiline
                rowsMax="4"
                component={CustomInput}
              />
              <div className="btn-wrap btn-wrap__center">
                <Button
                  variant="outlined"
                  color="primary"
                  type="submit"
                  className="btn btn__center"
                >
                  {btnText}
                </Button>
              </div>
              {props.errors.general && <div>{props.errors.general}</div>}
            </form>
          );
        }}
      />
    </div>
  );
}

export default DeviceForm;
