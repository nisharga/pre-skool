"use client";
import { all_routes } from "@/router/all_routes";
import dynamic from "next/dynamic";
import LineChart from "./charts/sLine";
import SLineAreaChart from "./charts/sLineArea";
import SColChart from "./charts/sCol";
import ScolStacked from "./charts/sColStacked";
import SBarChart from "./charts/sBar";
import MixedChart from "./charts/mixedChart";
import DonutChart from "./charts/donutChart";
import RadialChart from "./charts/radialChart";
import Link from "next/link";
const routes = all_routes;

const ApexchartComponent = () => {

  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">Charts</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link href={routes.adminDashboard}>Dashboard</Link>
                </li>
                <li className="breadcrumb-item active">Charts</li>
              </ul>
            </div>
          </div>
        </div>

        {/* /Page Header */}
        <div className="row">
          {/* Chart */}
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Apex Simple</h5>
              </div>
              <div className="card-body">
                <div id="s-line" />
                <SLineAreaChart/>
              </div>
            </div>
          </div>
          {/* /Chart */}
          {/* Chart */}
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Area Chart</h5>
              </div>
              <div className="card-body">
                <div id="s-line-area" />
               <LineChart/>
              </div>
            </div>
          </div>
          {/* /Chart */}
          {/* Chart */}
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Column Chart</h5>
              </div>
              <div className="card-body">
                <div id="s-col" />
               <SColChart/>
              </div>
            </div>
          </div>
          {/* /Chart */}
          {/* Chart */}
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Column Stacked Chart</h5>
              </div>
              <div className="card-body">
                <div id="s-col-stacked" />
                <ScolStacked/>
              </div>
            </div>
          </div>
          {/* /Chart */}
          {/* Chart */}
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Bar Chart</h5>
              </div>
              <div className="card-body">
                <div id="s-bar" />
               <SBarChart/>
              </div>
            </div>
          </div>
          {/* /Chart */}
          {/* Chart */}
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Mixed Chart</h5>
              </div>
              <div className="card-body">
                <div id="mixed-chart" />
               <MixedChart/>
              </div>
            </div>
          </div>
          {/* /Chart */}
          {/* Chart */}
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Donut Chart</h5>
              </div>
              <div className="card-body">
                <div id="donut-chart" />
                <DonutChart/>
              </div>
            </div>
          </div>
          {/* /Chart */}
          {/* Chart */}
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Radial Chart</h5>
              </div>
              <div className="card-body">
                <div id="radial-chart" />
                <RadialChart/>
              </div>
            </div>
          </div>
          {/* /Chart */}
        </div>
      </div>
    </div>
  );
};

export default ApexchartComponent;
