import React, { useMemo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);



const options = {
  fill: true,
  responsive: false,
  scales: {
    y: {
      min: 0,
    },
  },
  plugins: {
    legend: {
      display: true,
    },
  },
};

const LineChart = ({groups}) => {

  const setChartValues = ()=>{
      const values = Object.values(groups);
      const addedValues = values.map(value=>value.map(exp=>Number(exp.amount)).reduce((pv,cv)=> pv+cv,0))
      return addedValues
  }

  const setChartLabels = ()=>{
    const dates = Object.keys(groups);
    return dates;
  }


  const scores = groups? setChartValues(): [0,1,2,3,4,5];
  const labels = groups? setChartLabels() : [0,1,2,3,4,5];

  const data = useMemo(function () {
    return {
      datasets: [
        {
          label: "Mis datos",
          data: scores,
          tension: 0.3,
          borderColor: "rgb(75, 192, 192)",
          pointRadius: 6,
          pointBackgroundColor: "rgb(75, 192, 192)",
          backgroundColor: "rgba(75, 192, 192, 0.3)",
        },
      ],
      labels,
    };
  }, []);

  return <Line data={data} options={options} className="mx-auto"/>;
};

export default LineChart;
