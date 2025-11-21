"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

// Dynamically import ApexCharts to avoid SSR issues
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const SBarChart = () => {
  const [sBar] = useState<any>({
    chart: {
      height: 350,
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    series: [
      {
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
      },
    ],
    xaxis: {
      categories: [
        "South Korea",
        "Canada",
        "United Kingdom",
        "Netherlands",
        "Italy",
        "France",
        "Japan",
        "United States",
        "China",
        "Germany",
      ],
    },
  });

  return (
    <div id="chart">
      <ReactApexChart
        options={sBar}
        series={sBar.series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default SBarChart;
