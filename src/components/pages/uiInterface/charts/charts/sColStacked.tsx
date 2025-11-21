"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

// Dynamically import ApexCharts for Next.js
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ScolStacked = () => {
  const [sColStacked] = useState<any>({
    chart: {
      height: 350,
      type: "bar",
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: "bottom",
            offsetX: -10,
            offsetY: 0,
          },
        },
      },
    ],
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    series: [
      {
        name: "PRODUCT A",
        data: [44, 55, 41, 67, 22, 43],
      },
      {
        name: "PRODUCT B",
        data: [13, 23, 20, 8, 13, 27],
      },
      {
        name: "PRODUCT C",
        data: [11, 17, 15, 15, 21, 14],
      },
      {
        name: "PRODUCT D",
        data: [21, 7, 25, 13, 22, 8],
      },
    ],
    xaxis: {
      type: "datetime",
      categories: [
        "01/01/2011 GMT",
        "01/02/2011 GMT",
        "01/03/2011 GMT",
        "01/04/2011 GMT",
        "01/05/2011 GMT",
        "01/06/2011 GMT",
      ],
    },
    legend: {
      position: "right",
      offsetY: 40,
    },
    fill: {
      opacity: 1,
    },
  });

  return (
    <div id="chart">
      <ReactApexChart
        options={sColStacked}
        series={sColStacked.series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default ScolStacked;
