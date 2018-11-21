import React from "react";
import { Route } from "react-router-dom";

import { Chart } from "../components";

function ChartRoutes() {
  return <Route path="/dashboard/charts" component={Chart} />;
}

export default ChartRoutes;
