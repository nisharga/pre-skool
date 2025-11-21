"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import ApexCharts to avoid SSR issues
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const RadialChart: React.FC = () => {
  const [radialChart] = useState<any>({
    chart: {
      height: 350,
      type: "radialBar",
      toolbar: { show: false },
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: { fontSize: "22px" },
          value: { fontSize: "16px" },
          total: {
            show: true,
            label: "Total",
            formatter: function () {
              return 249; // You can calculate dynamically if needed
            },
          },
        },
      },
    },
    series: [44, 55, 67, 83],
    labels: ["Apples", "Oranges", "Bananas", "Berries"],
  });

  return (
    <div className="w-full flex justify-center">
      <Chart
        options={radialChart}
        series={radialChart.series}
        type="radialBar"
        height={350}
      />
    </div>
  );
};

export default RadialChart;
