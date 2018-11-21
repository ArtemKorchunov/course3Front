import React from "react";
import { Trans } from "react-i18next";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import "./Header.scss";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

function HeaderView({ classes, accountComponent, menuIconComponent }) {
  return (
    <AppBar position="static">
      <Toolbar>
        {menuIconComponent}
        <Typography variant="h6" color="inherit" className={classes.grow}>
          <Trans>Dashboard</Trans>
        </Typography>
        <div>{accountComponent}</div>
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(styles)(HeaderView);
