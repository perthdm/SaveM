import React from "react";
import Chart from "react-apexcharts";

const RadarChartWrapper = ({ colorLine, textLabel }) => {
  let option = {
    chart: {
      id: "basic-bar"
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: "60%"
          // background: "#293450"
        }
      }
    },
    labels: [textLabel],
    dataLabels: {
      name: {
        offsetY: -10,
        color: "#fff",
        fontSize: "13px"
      },
      value: {
        color: "#fff",
        fontSize: "30px",
        show: true
      }
    },
    stroke: {
      lineCap: "round"
    },
    colors: [colorLine]
    // fill: {
    //   type: "gradient",
    //   gradient: {
    //     shade: "dark",
    //     type: "vertical",
    //     gradientToColors: ["#05E996"],
    //     stops: [0, 100]
    //   }
    // }
  };

  return <Chart options={option} series={[80]} type="radialBar" height={180} />;
};

export default RadarChartWrapper;
