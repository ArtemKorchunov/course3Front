import React from "react";
import { Trans } from "react-i18next";
import { Paper, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./Login.scss";

function LoginView({ formComponent }) {
  return (
    <div className="container-wrap login">
      <Paper className="container">
        <Typography variant="h4" className="h4">
          <Trans>LOGIN</Trans>
        </Typography>
        <div className="content-wrap">
          <div className="content">
            {formComponent}
            <div className="link-wrap link-wrap_center">
              <Link to="/register" className="link link_bottom">
                <Trans>Or Sign Up!</Trans>
              </Link>
            </div>
          </div>
        </div>
      </Paper>
    </div>
  );
}

export default LoginView;
