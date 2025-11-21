"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import ApexChart (avoids SSR errors)
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const DonutChart: React.FC = () => {
  const [donutChart] = useState<any>({
    chart: {
      height: 350,
      type: "donut",
      toolbar: { show: false },
    },
    series: [44, 55, 41, 17],
    labels: ["Apples", "Bananas", "Oranges", "Berries"], // optional labels
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: { width: 200 },
          legend: { position: "bottom" },
        },
      },
    ],
  });

  return (
    <div className="w-full flex justify-center">
      <Chart options={donutChart} series={donutChart.series} type="donut" height={350} />
    </div>
  );
};

export default DonutChart;
