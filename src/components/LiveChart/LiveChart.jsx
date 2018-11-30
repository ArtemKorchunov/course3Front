import React, { useState, useEffect } from "react";
import Select from "react-select";
import { Trans } from "react-i18next";
import RTChart from "react-rt-chart";

import Sockette from "sockette";
import { Device } from "../../services/API";
import { useAsyncFilterResp } from "../hooks";
import DashboardWrap from "../DashboardWrap";
import "./LiveChart.scss";

function LiveChart({ history }) {
  let ws = { close: () => {} };
  const [options, loading] = useAsyncFilterResp(Device.get, [], value =>
    value.data.data.map(item => ({
      value: item.id,
      label: item.name
    }))
  );
  const [pickedSuggest, setPickedSuggest] = useState({ value: null });
  const [message, setMessage] = useState(null);
  useEffect(
    () => {
      if (pickedSuggest.value) {
        ws = new Sockette(
          `${process.env.REACT_APP_WS_URL}/device/${pickedSuggest.value}`,
          {
            onmessage: e => {
              const data = JSON.parse(e.data);
              setMessage({
                date: new Date(),
                Chart: +data.heat,
                Stability: data.prediction.pop()
              });
            }
          }
        );
      }
      return function cleanup() {
        ws.close(1000);
      };
    },
    [pickedSuggest.value]
  );
  return (
    <DashboardWrap
      headlineTitle={<Trans>Live Chart</Trans>}
      contentComponent={
        !pickedSuggest.value ? (
          <div className="content-wrap content-wrap__title content-wrap__center">
            <span className="title-overlay">
              <Trans>Select item to see Live Chart.</Trans>
            </span>
          </div>
        ) : (
          <RTChart fields={["Chart", "Stability"]} data={message} />
        )
      }
      headlineComponent={
        <div className="live-select-wrap">
          <Select
            value={pickedSuggest}
            onChange={selectedOption => setPickedSuggest({ ...selectedOption })}
            options={options}
            isLoading={loading}
          />
        </div>
      }
    />
  );
}
export default LiveChart;
