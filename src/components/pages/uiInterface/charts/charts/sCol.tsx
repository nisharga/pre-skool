"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

// Dynamically import ApexCharts to avoid SSR errors
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const SColChart = () => {
  const [sCol] = useState<any>({
    chart: {
      height: 350,
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    series: [
      {
        name: "Net Profit",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: "Revenue",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
    ],
    xaxis: {
      categories: [
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ],
    },
    yaxis: {
      title: {
        text: "$ (thousands)",
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val: any) {
          return "$ " + val + " thousands";
        },
      },
    },
  });

  return (
    <div id="chart">
      <ReactApexChart
        options={sCol}
        series={sCol.series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default SColChart;
