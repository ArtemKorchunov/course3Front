import React from "react";
import { Typography } from "@material-ui/core";

function DeviceView({
  contentComponent,
  headlineComponent = null,
  headlineTitle
}) {
  return (
    <>
      <div className="device-content-head headline_padding">
        <Typography variant="h5" gutterBottom className="headline_padding">
          {headlineTitle}
        </Typography>
        {headlineComponent}
      </div>
      {contentComponent}
    </>
  );
}

export default DeviceView;
