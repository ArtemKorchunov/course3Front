import React, { useState } from "react";
import Select from "react-select";
import { Trans } from "react-i18next";
import RTChart from "react-rt-chart";

import { Device } from "../../../services/API";
import { localStorageApi } from "../../../services";

import { useAsyncFilterResp, useSocketConnect } from "../../hooks";
import DashboardWrap from "../../DashboardWrap";
import "./LiveChart.scss";

function LiveChart() {
  const [options, loading] = useAsyncFilterResp(Device.get, [], value =>
    value.data.data.map(item => ({
      value: item.id,
      label: item.name
    }))
  );
  const [pickedSuggest, setPickedSuggest] = useState({ value: null });
  const message = useSocketConnect(
    `http://localhost:4000/device?token=${localStorageApi.getItem()}&device=${
      pickedSuggest.value
    }`,
    "/listen",
    pickedSuggest.value
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
