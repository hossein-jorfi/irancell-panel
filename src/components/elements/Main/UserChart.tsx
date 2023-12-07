import { Chart as ChartJS, registerables } from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(...registerables);

const UserChart = () => {
  const data = {
    labels: ["7/1", "7/10", "7/18", "7/25", "7/28"],
    datasets: [
      {
        data: [500, 1000, 2200, 2500, 1700],
        fill: true,
        backgroundColor: "#fffcef",
        borderColor: "#fdc816",
        tension: 0.45,
        borderWidth: 4,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="mt-6 p-5 bg-white rounded-xl relative">
      <p className="font-lalezar absolute top-4 text-xl">
        نمودار میزان مصرف کل
      </p>
      <Line className="mt-4" data={data} options={options} />
    </div>
  );
};

export default UserChart;
