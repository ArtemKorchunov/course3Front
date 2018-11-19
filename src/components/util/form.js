import React from "react";
import { TextField } from "@material-ui/core";

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

export function formErrorsWrap(errorHandler, error) {
  return typeof error.data === "string" || typeof error.data.data === "string"
    ? errorHandler({ general: error.data || error.data.data })
    : errorHandler(error.data.data);
}
