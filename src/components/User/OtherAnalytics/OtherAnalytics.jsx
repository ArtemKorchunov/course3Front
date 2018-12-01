import React, { useState } from "react";
import { Trans } from "react-i18next";
import Select from "react-select";
import { Doughnut, HorizontalBar } from "react-chartjs-2";

import { useAsyncFilterResp } from "components/hooks";
import { Device } from "services/API";

import DashboardWrap from "components/DashboardWrap";
import "./OtherAnalytics.scss";

const data = {
  labels: ["Hot", "Cool", "Medium"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
    }
  ]
};

const dataH = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Report Number 1",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

function OtherAnalytics() {
  const [options, loading] = useAsyncFilterResp(Device.get, [], value =>
    value.data.data.map(item => ({
      value: item.id,
      label: item.name
    }))
  );
  const [pickedSuggest, setPickedSuggest] = useState({ value: null });
  return (
    <DashboardWrap
      headlineTitle={<Trans>Other Analytics</Trans>}
      contentComponent={
        !pickedSuggest.value ? (
          <div className="content-wrap content-wrap__title content-wrap__center">
            <span className="title-overlay">
              <Trans>Select item to see Charts.</Trans>
            </span>
          </div>
        ) : (
          <div className="analytics__wrap">
            <div className="analytic-item__wrap">
              <Doughnut data={data} width={400} />
            </div>
            <div className="analytic-item__wrap horizontal-bar">
              <HorizontalBar data={dataH} />
            </div>
          </div>
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
export default OtherAnalytics;
