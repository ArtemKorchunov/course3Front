import React from "react";
import Paper from "@material-ui/core/Paper";

import Form from "./Form";
import "./Login.scss";

function LoginView() {
  return (
    <div className="container-wrap">
      <Paper className="container">
        <div className="content-wrap">
          <div className="content">
            <Form />
          </div>
        </div>
      </Paper>
    </div>
  );
}

export default LoginView;
