import React from "react";
import { Pie, PieChart } from "recharts";

const PieCharts = () => {
  const data = [
    {
      month: "Mar",
      investment: 100000,
      sell: 241,
      revenue: 10401,
    },
    {
      month: "Apr",
      investment: 200000,
      sell: 423,
      revenue: 24500,
    },
    {
      month: "May",
      investment: 500000,
      sell: 726,
      revenue: 67010,
    },
    {
      month: "Jun",
      investment: 400000,
      sell: 529,
      revenue: 40405,
    },
    {
      month: "Jul",
      investment: 600000,
      sell: 601,
      revenue: 50900,
    },
    {
      month: "Aug",
      investment: 670000,
      sell: 670,
      revenue: 61000,
    },
  ];

  return (
    <div>
      <PieChart width={500} height={300}></PieChart>
      <Pie
        data={data}
        dataKey="revenue"
        nameKey="month"
        cx="50%"
        cy="50%"
        outerRadius={50}
        fill="#8884d8"
      ></Pie>
      <Pie
        data={data}
        dataKey="sell"
        nameKey="month"
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={80}
        fill="#82ca9d"
        label
      />
    </div>
  );
};

export default PieCharts;
