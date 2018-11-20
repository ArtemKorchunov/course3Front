import React from "react";
import { Dialog, Slide } from "@material-ui/core";

function Transition(props) {
  return <Slide direction="up" {...props} />;
}
function DeviceAddView({ formComponent, onClose }) {
  return (
    <Dialog
      open
      onClose={onClose}
      TransitionComponent={Transition}
      keepMounted
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      {formComponent}
    </Dialog>
  );
}

export default DeviceAddView;
