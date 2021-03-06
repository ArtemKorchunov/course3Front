import React from "react";
import { Button } from "@material-ui/core";
import { Trans } from "react-i18next";
import { Formik, FastField, Field } from "formik";
import { CustomInput, CustomSelect, Checkbox } from "../../util/form";

function DeviceForm({ values, onSubmit, btnText, sensorOptions }) {
  return (
    <div className="form-wrap">
      <Formik
        initialValues={values}
        onSubmit={onSubmit}
        render={props => {
          console.log(props.error);

          return (
            <form onSubmit={props.handleSubmit}>
              <FastField
                label={<Trans>Name</Trans>}
                name="name"
                type="text"
                component={CustomInput}
              />
              <FastField
                label={<Trans>Description</Trans>}
                name="description"
                type="textarea"
                multiline
                rowsMax="4"
                component={CustomInput}
              />
              <Field
                label={'Sensors'}
                name="sensors"
                options={sensorOptions}
                component={CustomSelect}
              />
              <Checkbox
                name="status"
                value="active"
                label={<Trans>Status is Active</Trans>}
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
