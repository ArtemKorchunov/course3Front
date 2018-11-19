import React, { useState } from "react";

import { login as loginRequest } from "../../services/API";
import { localStorageApi } from "../../services";

import { formErrorsWrap } from "../util/form";
import LoginView from "./Login.view";
import Form from "./Form";

function Login({ history }) {
  const [formValues] = useState({ email: "", password: "" });
  async function onSubmit(values, { setErrors }) {
    try {
      const {
        data: { data }
      } = await loginRequest(values);
      for (let prop in data) {
        localStorageApi.setItem(prop, data[prop]);
      }
      history.push("/");
    } catch (err) {
      console.dir(err);
      formErrorsWrap(setErrors, err);
    }
  }

  return (
    <LoginView
      formComponent={<Form values={formValues} onSubmit={onSubmit} />}
    />
  );
}

export default Login;
