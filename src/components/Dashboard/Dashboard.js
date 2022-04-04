import React from "react";
import BarCharts from "../BarCharts/BarCharts";
import LineCharts from "../LineCharts/LineCharts";

const Dashboard = () => {
  return (
    <div>
      <LineCharts></LineCharts>
      <BarCharts></BarCharts>
    </div>
  );
};

export default Dashboard;
