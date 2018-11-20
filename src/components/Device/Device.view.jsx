import React from "react";
import { Paper, Typography, Button } from "@material-ui/core";

import "./Device.scss";
function DeviceView({ deviceTableComponent, onAddBtnClick }) {
  return (
    <div className="background device">
      <Paper className="device-content-bg">
        <div className="device-content-head headline_padding">
          <Typography variant="h5" gutterBottom className="headline_padding">
            Devices
          </Typography>
          <div className="btn-wrap btn-wrap_align-center">
            <Button
              variant="outlined"
              color="secondary"
              onClick={onAddBtnClick}
            >
              Add Device
            </Button>
          </div>
        </div>
        {deviceTableComponent}
      </Paper>
    </div>
  );
}

export default DeviceView;
