import React from "react";
import {
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox as CheckboxCustom
} from "@material-ui/core";
import { Field } from "formik";

import Select from "react-select";

export function CustomSelect({
  field: { name, value },
  form: { touched, errors, setFieldValue, setFieldTouched },
  ...props // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
}) {
  console.log(props.options);
  return (
    <div className="input-wrap p-t-b-20">
      <Select
        autoBlur
        labelKey="name"
        name={name}
        onBlur={() => setFieldTouched(name, true)}
        onChange={value => setFieldValue(name, value)}
        options={props.options}
        valueKey="value"
        value={value}
      />
      {touched[name] &&
        errors[name] && <div className="error">{errors[name]}</div>}
    </div>
  );
}

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
  if (!error) return errorHandler("Oooops!");
  return typeof error.data === "string" || typeof error.data.data === "string"
    ? errorHandler({ general: error.data || error.data.data })
    : errorHandler(error.data.data);
}
