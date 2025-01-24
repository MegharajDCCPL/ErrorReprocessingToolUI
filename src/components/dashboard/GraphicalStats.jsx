import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import styles from "./Dashboard.module.css";

// Registering Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const GraphicalStats = ({ data }) => {
  const chartData = {
    labels: ["Open", "Reprocessed", "Closed", "Total"],
    datasets: [
      {
        label: "Error Counts",
        data: [
          data.openCount,
          data.reprocessedCount,
          data.closedCount,
          data.totalCount,
        ],
        backgroundColor: ["#ff5733", "#33c4ff", "#33ff57", "#ffeb33"],
        borderColor: ["#ff5733", "#33c4ff", "#33ff57", "#ffeb33"],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Error Statistics (Graphical View)",
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.raw} errors`;
          },
        },
      },
    },
  };

  return (
    <div className={styles["graphical-stats-container"]}>
      <div className={styles["stat-card"]}>
        <h5 className={styles["stat-card-title"]}>
          Error Statistics (Graphical)
        </h5>
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default GraphicalStats;
