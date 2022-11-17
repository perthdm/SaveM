import React from "react";
import Chart from "react-apexcharts";

const DonutChart = () => {
  let options = {
    chart: {
      width: 500,
      type: "donut"
    },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 270
      }
    },
    dataLabels: {
      enabled: false
    },
    fill: {
      type: "gradient"
    },
    legend: {
      formatter: function (val, opts) {
        return val + " - " + opts.w.globals.series[opts.seriesIndex];
      }
    },
    title: {
      text: "Statement Summary Graph"
    },
    colors: ["#289efa", "#ff7948", "#ffc000"],
    responsive: [
      {
        breakpoint: 300,
        options: {
          chart: {
            width: 400
          },
          legend: {
            position: "top"
          }
        }
      }
    ]
  };

  const series = [30000, 22000, 8000];

  return <Chart options={options} series={series} type="donut" width={480} />;
};

export default DonutChart;
