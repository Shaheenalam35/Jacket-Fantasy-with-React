import React from "react";
import BarCharts from "../BarCharts/BarCharts";
import LineCharts from "../LineCharts/LineCharts";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="line-chart">
        <h3>Line Charts monthly investment and revenue:- </h3>
        <LineCharts></LineCharts>
      </div>
      <div className="bar-chart">
        <h3>Bar Charts with monthly sell:-</h3>
        <BarCharts></BarCharts>
      </div>
    </div>
  );
};

export default Dashboard;
