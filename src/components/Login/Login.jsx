import React, { useState } from "react";

import { login as loginRequest } from "../../services/API";
import { formErrorsWrap } from "../util/form";
import LoginView from "./Login.view";
import Form from "./Form";

function Login({ history }) {
  const [formValues] = useState({ email: "", password: "" });
  async function onSubmit(values, { setErrors }) {
    try {
      const res = await loginRequest(values);
      history.push("/");
    } catch (err) {
      formErrorsWrap(setErrors, err.reponse.data);
    }
  }

  return (
    <LoginView
      formComponent={<Form values={formValues} onSubmit={onSubmit} />}
    />
  );
}

export default Login;
