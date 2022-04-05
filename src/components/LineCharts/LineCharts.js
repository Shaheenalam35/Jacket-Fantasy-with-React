import React from "react";
import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const LineCharts = () => {
  const data = [
    {
      month: "Mar",
      investment: 45000,
      sell: 241,
      revenue: 10401,
    },
    {
      month: "Apr",
      investment: 80000,
      sell: 423,
      revenue: 24500,
    },
    {
      month: "May",
      investment: 100000,
      sell: 726,
      revenue: 67010,
    },
    {
      month: "Jun",
      investment: 70000,
      sell: 529,
      revenue: 40405,
    },
    {
      month: "Jul",
      investment: 60000,
      sell: 601,
      revenue: 50900,
    },
    {
      month: "Aug",
      investment: 67000,
      sell: 670,
      revenue: 60000,
    },
  ];

  return (
    <div>
      <LineChart width={500} height={300} data={data}>
        <Line dataKey={"investment"}></Line>
        <Line dataKey={"revenue"}></Line>
        <XAxis dataKey={"month"}></XAxis>
        <YAxis dataKey={"investment"}></YAxis>
        <Tooltip></Tooltip>
      </LineChart>
    </div>
  );
};

export default LineCharts;
