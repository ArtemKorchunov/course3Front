import React from "react";
import { Trans } from "react-i18next";
import { Paper, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./Register.scss";

function RegisterView({ formComponent }) {
  return (
    <div className="container-wrap register">
      <div className="container">
        <Paper className="container-bg">
          <Typography variant="h4" className="h4">
            <Trans>Register</Trans>
          </Typography>
          <div className="content-wrap">
            <div className="content">
              {formComponent}
              <div className="link-wrap link-wrap_center">
                <Link to="/login" className="link link_bottom">
                  <Trans>Or Sign In!</Trans>
                </Link>
              </div>
            </div>
          </div>
        </Paper>
      </div>
    </div>
  );
}

export default RegisterView;
