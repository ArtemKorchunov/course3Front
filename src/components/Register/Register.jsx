import React, { useState } from "react";

import { register as registerRequest } from "../../services/API";
import { formErrorsWrap } from "../util/form";
import RegisterView from "./Register.view";
import Form from "./Form";

function Register({ history }) {
  const [formValues] = useState({ email: "", password: "" });
  async function onSubmit(values, { setErrors }) {
    try {
      await registerRequest(values);
      history.push("/login");
    } catch (err) {
      formErrorsWrap(setErrors, err.reponse.data);
    }
  }

  return (
    <RegisterView
      formComponent={<Form values={formValues} onSubmit={onSubmit} />}
    />
  );
}

export default Register;
