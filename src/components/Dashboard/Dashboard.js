import React from "react";
import BarCharts from "../BarCharts/BarCharts";
import LineCharts from "../LineCharts/LineCharts";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <p>
        <LineCharts></LineCharts>
      </p>
      <p>
        <BarCharts></BarCharts>
      </p>
    </div>
  );
};

export default Dashboard;
