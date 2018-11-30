import React from "react";
import { Route } from "react-router-dom";

import { LiveChart } from "../components";

function ChartRoutes() {
  return <Route path="/dashboard/live-chart" component={LiveChart} />;
}

export default ChartRoutes;
