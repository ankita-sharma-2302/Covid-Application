import React from "react";
import { Line } from "react-chartjs-2";
import { dataResponse } from "../Types/type";

interface Props {
  yAxis: dataResponse[];
  xAxis: dataResponse[];
}

const Graph: React.FC<Props> = ({ yAxis, xAxis }) => {
  console.log("1111111111111111111",yAxis)
  console.log("222222222222222222",xAxis)
  const data = {
    labels: xAxis,
    datasets: [
      {
        label: "Covid-19  Report  (DD/MM/YY)",
        fill: true,
        lineTension: 0.3,
        backgroundColor: "rgba(25, 204,230, .3)",
        borderColor: "rgb(800, 10, 18)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgb(205, 130,1 58)",
        pointBackgroundColor: "rgb(25, 255, 255)",
        pointBorderWidth: 2,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgb(0, 0, 0)",
        pointHoverBorderColor: "rgba(220, 20, 220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: yAxis,
      },
    ],
  };

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      <Line data={data} />
    </div>
  );
};
export default Graph;
