import { useEffect, useState } from "react";
import { Pie, Bar, Doughnut } from "react-chartjs-2"; // Import Doughnut chart
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import styles from "./Dashboard.module.css";

// Register required components from Chart.js
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  ChartDataLabels
);

const ChartsComponent = () => {
  const [pieData, setPieData] = useState(null);
  const [barData, setBarData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    PieChart();
    BarChart();
  }, []);

  // Pie chart using dummy data
  const PieChart = () => {
    const dummyPieData = {
      Product: 8,
      mfgOrder: 12,
    };
    const total = dummyPieData.Product + dummyPieData.mfgOrder;
    const formattedData = {
      labels: ["Product", "mfgOrder"],
      datasets: [
        {
          data: [
            (dummyPieData.Product / total) * 100,
            (dummyPieData.mfgOrder / total) * 100,
          ],
          backgroundColor: ["#5C6BC0", "#66BB6A"],
          borderColor: ["#FFFFFF"],
          borderWidth: 2,
          hoverOffset: 4,
          datalabels: {
            anchor: "end",
            align: "end",
            color: "#fff",
            backgroundColor: function (context) {
              return context.dataset.backgroundColor;
            },
            borderRadius: 4,
            font: {
              weight: "bold",
            },
          },
        },
      ],
    };
    setPieData(formattedData);
  };

  // Bar chart using dummy data
  const BarChart = () => {
    const dummyBarData = {
      months: [
        "December",
        "November",
        "October",
        "September",
        "August",
        "July",
      ],
      errorCounts: {
        Product: [3, 6, 0, 5, 2, 0],
        MfgOrder: [7, 8, 2, 4, 5, 6],
      },
    };

    const formattedData = {
      labels: dummyBarData.months.reverse(),
      datasets: [
        {
          label: "Product Error Count",
          data: dummyBarData.errorCounts.Product.reverse(),
          backgroundColor: "#5C6BC0", // A clean blue shade for the Product dataset
          borderColor: "#1565C0", // Darker blue border for better contrast
          borderWidth: 2,
          hoverBackgroundColor: "#5C6BC0",
          hoverBorderColor: "#fff",
          barThickness: 30,
        },
        {
          label: "Mfg Order Error Count",
          data: dummyBarData.errorCounts.MfgOrder.reverse(),
          backgroundColor: "#43A047", // Professional green for Mfg Order dataset
          borderColor: "#2C6B2F", // Darker green border for contrast
          borderWidth: 2,
          hoverBackgroundColor: "#2C6B2F", // Darker green for hover effect
          hoverBorderColor: "#fff",
          barThickness: 30,
        },
      ],
    };
    setBarData(formattedData);
  };

  const pieOptions = {
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            return `${tooltipItem.label}: ${tooltipItem.raw}`;
          },
        },
      },
      datalabels: {
        display: true,
      },
    },
    elements: {
      arc: {
        borderWidth: 2,
        borderColor: "#fff",
        hoverBorderWidth: 3,
        shadowOffsetX: 5,
        shadowOffsetY: 5,
        shadowBlur: 10,
        shadowColor: "rgba(0,0,0,0.5)",
      },
    },
  };

  const barOptions = {
    scales: {
      x: {
        title: {
          display: true,
          text: "Months",
        },
      },
      y: {
        title: {
          display: true,
          text: "Error Count",
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
          },
        },
      },
      datalabels: {
        display: true,
        align: "end",
        anchor: "end",
        backgroundColor: "#5C6BC0",
        borderRadius: 4,
        color: "#fff",
        font: {
          weight: "bold",
        },
        formatter: (value, context) => {
          return value;
        },
      },
    },
    maintainAspectRatio: false,
    elements: {
      bar: {
        borderWidth: 2,
        shadowColor: "rgba(0,0,0,0.5)",
        shadowBlur: 10,
        shadowOffsetX: 5,
        shadowOffsetY: 5,
      },
    },
  };

  return (
    <div>
      {pieData && barData ? (
        <div className={styles["graphs"]}>
          <div className={styles["pie-chart"]}>
            <Pie data={pieData} options={pieOptions} />
            <h6 className={`${styles["headings"]} mt-4`}>Total Transactions</h6>
          </div>
          <div className={styles["bar-chart"]}>
            <Bar data={barData} options={barOptions} />
            <h6 className={`${styles["headings"]} mt-4`}>Error Count</h6>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ChartsComponent;
