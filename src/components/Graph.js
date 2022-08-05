import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";

const Graph = (props) => {
  ChartJS.register(...registerables);
  const temp = props.temp;
  const tempmax = props.tempmax;
  const tempmin = props.tempmin;
  const date = props.date + " " + "Aug";
  const temp1 = props.temp1;
  const temp2 = props.temp2;
  const temp3 = props.temp3;
  const temp4 = props.temp4;
  const temp1max = props.temp1max;
  const temp2max = props.temp2max;
  const temp3max = props.temp3max;
  const temp4max = props.temp4max;
  const temp1min = props.temp1max;
  const temp2min = props.temp2min;
  const temp3min = props.temp3min;
  const temp4min = props.temp4min;

  const date1 = props.date1 + " " + "Aug";
  const date2 = props.date2 + " " + "Aug";
  const date3 = props.date3 + " " + "Aug";
  const date4 = props.date4 + " " + "Aug";

  const options = {
    title: {
      display: false,
    },
    legend: {
      position: "top",
      title: "Temperature",
      backgroundColor: "white",
    },
    elements: {
      line: {
        tension: 0.5,
        color: "white",
      },
    },
  };
  ChartJS.defaults.color = "white";
  const data = {
    labels: [date, date1, date2, date3, date4],
    datasets: [
      {
        fill: true,
        label: "Temperature-Min",
        data: [tempmin, temp1min, temp2min, temp3min, temp4min],
        borderColor: "rgba(223, 235, 53)",
        backgroundColor: "rgba(223, 235, 53, 0.5)",
      },

      {
        fill: true,
        label: "Temperature",
        data: [temp, temp1, temp2, temp3, temp4],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        fill: true,
        label: "Temperature-Max",
        data: [tempmax, temp1max, temp2max, temp3max, temp4max],
        borderColor: "rgba(235, 53, 53)",
        backgroundColor: "rgba(235, 53, 53, 0.5)",
      },
    ],
  };
  return <Line data={data} options={options}></Line>;
};

export default Graph;
