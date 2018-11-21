import React, { useState, useEffect } from "react";
import Select from "react-select";
import { useAsync } from "react-use";

import { Device } from "../../services/API";
import DashboardWrap from "../DashboardWrap";
import "./Chart.scss";

function Chart({ history }) {
  const { loading, value } = useAsync(Device.get);
  const [options, setOptions] = useState([]);
  const [pickedSuggest, setPickedSuggest] = useState(null);

  useEffect(
    () => {
      if (!value) return;
      setOptions(
        value.data.data.map(item => ({
          value: item.id,
          label: item.name
        }))
      );
    },
    [loading]
  );
  return (
    <DashboardWrap
      headlineTitle="Chart"
      contentComponent={
        !pickedSuggest ? (
          <div className="content-wrap content-wrap__title content-wrap__center">
            <span className="title-overlay">Select item to see Chart.</span>
          </div>
        ) : null
      }
      headlineComponent={
        <div className="live-select-wrap">
          <Select
            value={pickedSuggest}
            onChange={selectedOption => setPickedSuggest(selectedOption)}
            options={options}
          />
        </div>
      }
    />
  );
}
export default Chart;
