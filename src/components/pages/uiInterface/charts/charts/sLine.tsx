"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

// Dynamically import ApexCharts so it only runs on the client
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const LineChart = () => {
  const [sline] = useState<any>({
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    series: [
      {
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
      },
    ],
    grid: {
      row: {
        colors: ["#f1f2f3", "transparent"], // alternating row colors
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
  });

  return (
    <div id="chart">
      <ReactApexChart
        options={sline}
        series={sline.series}
        type="line"
        height={350}
      />
    </div>
  );
};

export default LineChart;
