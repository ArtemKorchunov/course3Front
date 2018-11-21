import React, { useState, useEffect } from "react";
import Select from "react-select";
import { Trans } from "react-i18next";
import RTChart from "react-rt-chart";

import { useAsync } from "react-use";
import Sockette from "sockette";
import { Device } from "../../services/API";
import DashboardWrap from "../DashboardWrap";
import "./Chart.scss";

function Chart({ history }) {
  let ws = { close: () => {} };
  const { loading, value } = useAsync(Device.get);
  const [options, setOptions] = useState([]);
  const [pickedSuggest, setPickedSuggest] = useState({ value: null });
  const [message, setMessage] = useState(null);
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
  useEffect(
    () => {
      if (pickedSuggest.value) {
        ws = new Sockette(
          `${process.env.REACT_APP_WS_URL}/device/${pickedSuggest.value}`,
          {
            onmessage: e => {
              console.log(e);
              setMessage({
                date: new Date(),
                Chart: +e.data
              });
            }
          }
        );
      }
      return function cleanup() {
        console.log("cleanup");
        ws.close(1000);
      };
    },
    [pickedSuggest.value]
  );
  return (
    <DashboardWrap
      headlineTitle={<Trans>Chart</Trans>}
      contentComponent={
        !pickedSuggest.value ? (
          <div className="content-wrap content-wrap__title content-wrap__center">
            <span className="title-overlay">
              <Trans>Select item to see Chart.</Trans>
            </span>
          </div>
        ) : (
          <RTChart fields={["Chart"]} data={message} />
        )
      }
      headlineComponent={
        <div className="live-select-wrap">
          <Select
            value={pickedSuggest}
            onChange={selectedOption => setPickedSuggest({ ...selectedOption })}
            options={options}
          />
        </div>
      }
    />
  );
}
export default Chart;
