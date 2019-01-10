import React, { useState, useEffect } from "react";
import { Trans } from "react-i18next";
import Select from "react-select";
import { Doughnut, HorizontalBar } from "react-chartjs-2";

import { useAsyncFilterResp } from "components/hooks";
import { Device, Stats } from "services/API";

import DashboardWrap from "components/DashboardWrap";
import "./OtherAnalytics.scss";

const data = {
  labels: ["Cool", "Medium", "Hot"],
  datasets: [
    {
      data: [50, 100, 300],
      backgroundColor: ["#36A2EB", "#FFCE56", "#FF6384"],
      hoverBackgroundColor: ["#36A2EB", "#FFCE56", "#FF6384"]
    }
  ]
};

const dataH = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ],
  datasets: [
    {
      label: "Report Number 1",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
  ]
};

function OtherAnalytics() {
  const [pickedSuggest, setPickedSuggest] = useState({ value: null });
  const [monthStats, setMonthStats] = useState(null);
  const [temperatureLevelStats, setTemperatureLevel] = useState(null);

  async function getMonthStats(deviceId) {
    const monthArray = [...dataH.datasets[0].data];

    const {
      data: { data: res }
    } = await Stats.getMonthStats(deviceId);
    for (let i = 0; i < res.length; i++) {
      monthArray[res[i].month_id - 1] = res[i].average;
    }
    setMonthStats(monthArray);
  }
  async function getTemperatureLevel(deviceId) {
    const {
      data: { data }
    } = await Stats.getTemperatureLevel(deviceId);
    setTemperatureLevel(Object.keys(data).map(key => data[key]));
  }

  useEffect(
    () => {
      if (pickedSuggest.value) {
        getMonthStats(pickedSuggest.value);
        getTemperatureLevel(pickedSuggest.value);
      }
    },
    [pickedSuggest.value]
  );

  const [options, loading] = useAsyncFilterResp(Device.get, [], value =>
    value.data.data.map(item => ({
      value: item.id,
      label: item.name
    }))
  );
  console.log(monthStats, temperatureLevelStats);

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
              <Doughnut
                data={{
                  ...data,
                  datasets: [
                    { ...data.datasets[0], data: temperatureLevelStats }
                  ]
                }}
                width={400}
              />
            </div>
            <div className="analytic-item__wrap horizontal-bar">
              <HorizontalBar
                data={{
                  ...dataH,
                  datasets: [{ ...dataH.datasets[0], data: monthStats }]
                }}
              />
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
