"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

// Dynamically import ApexCharts so it loads only on the client
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const SLineAreaChart = () => {
  const [sLineArea] = useState<any>({
    chart: {
      height: 350,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    title: {
      text: "Product Trends by Month",
      align: "left",
    },
    series: [
      {
        name: "series1",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "series2",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00",
        "2018-09-19T01:30:00",
        "2018-09-19T02:30:00",
        "2018-09-19T03:30:00",
        "2018-09-19T04:30:00",
        "2018-09-19T05:30:00",
        "2018-09-19T06:30:00",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  });

  return (
    <div id="chart">
      <ReactApexChart
        options={sLineArea}
        series={sLineArea.series}
        type="area"
        height={350}
      />
    </div>
  );
};

export default SLineAreaChart;
