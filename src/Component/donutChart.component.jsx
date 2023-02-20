import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import * as d3 from 'd3';
import classes from './donutChart.module.css';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = () => {
  const [data, setData] = useState({
    labels: [
      "Delhi",
      "Mumbai",
      "Kolkata",
      "Chennai",
      "Pune",
      "Bengaluru",
      "Hyderabad",
    ],
    datasets: [
      {
        data: [3000, 2000, 1500, 2500, 4000, 5000, 3500],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
          "#00FF00",
        ]
      },
    ],
  });

  const randomizeData = () => {
    const newData = {
      labels: [
        "Delhi",
        "Mumbai",
        "Kolkata",
        "Chennai",
        "Pune",
        "Bengaluru",
        "Hyderabad",
      ],
      datasets: [
        {
          data: Array.from(
            { length: 7 },
            () => Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000
          ),
          backgroundColor: Array.from({ length: 7 }, () =>
            d3.rgb(
              Math.floor(Math.random() * 256),
              Math.floor(Math.random() * 256),
              Math.floor(Math.random() * 256)
            )
          )
        },
      ],
    };
    setData(newData);
  };

  return (
    <div className={classes.chartContainer}>
      <button className={classes.randomizeButton} onClick={randomizeData}>Randomize</button>
      <span className={classes.donutChart}><Doughnut data={data}  /></span>
      <small className={classes.copyRight}>&copy; 2023 Rishabh Mishra. All rights reserved.</small>
    </div>
  );
};

export default DonutChart;
