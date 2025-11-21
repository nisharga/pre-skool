"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

// Dynamically import ApexCharts for Next.js
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const MixedChart = () => {
  const [options] = useState<any>({
    chart: {
      height: 350,
      type: "line", // base type
      toolbar: {
        show: false,
      },
    },
    series: [
      {
        name: "Website Blog",
        type: "column",
        data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160],
      },
      {
        name: "Social Media",
        type: "line",
        data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
      },
    ],
    stroke: {
      width: [0, 4], // no stroke for bars, thicker for line
    },
    title: {
      text: "Traffic Sources",
    },
    labels: [
      "01 Jan 2001",
      "02 Jan 2001",
      "03 Jan 2001",
      "04 Jan 2001",
      "05 Jan 2001",
      "06 Jan 2001",
      "07 Jan 2001",
      "08 Jan 2001",
      "09 Jan 2001",
      "10 Jan 2001",
      "11 Jan 2001",
      "12 Jan 2001",
    ],
    xaxis: {
      type: "datetime",
    },
    yaxis: [
      {
        title: {
          text: "Website Blog",
        },
      },
      {
        opposite: true,
        title: {
          text: "Social Media",
        },
      },
    ],
  });

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={options.series}
        type="line"
        height={350}
      />
    </div>
  );
};

export default MixedChart;
