import React from "react";
import {
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox as CheckboxCustom
} from "@material-ui/core";
import { Field } from "formik";

export function CustomInput({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) {
  return (
    <div className="input-wrap">
      <TextField
        label={field.label || null}
        margin="normal"
        variant="outlined"
        type="text"
        {...field}
        {...props}
      />
      {touched[field.name] &&
        errors[field.name] && <div className="error">{errors[field.name]}</div>}
    </div>
  );
}

export function Checkbox(props) {
  return (
    <Field name={props.name}>
      {({ field, form }) => (
        <FormGroup row>
          <FormControlLabel
            control={
              <CheckboxCustom
                {...props}
                checked={field.value.includes(props.value)}
                onChange={() => {
                  console.log(field);
                  if (field.value.includes(props.value)) {
                    const nextValue = field.value.filter(
                      value => value !== props.value
                    );
                    form.setFieldValue(props.name, nextValue);
                  } else {
                    const nextValue = field.value.concat(props.value);
                    form.setFieldValue(props.name, nextValue);
                  }
                }}
                value={props.value}
              />
            }
            label={props.label}
          />
        </FormGroup>
      )}
    </Field>
  );
}

export function formErrorsWrap(errorHandler, error) {
  return typeof error.data === "string" || typeof error.data.data === "string"
    ? errorHandler({ general: error.data || error.data.data })
    : errorHandler(error.data.data);
}
