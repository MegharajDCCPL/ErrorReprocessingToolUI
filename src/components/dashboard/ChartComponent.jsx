import { useEffect, useState } from "react";
import { Pie, Bar } from "react-chartjs-2";
import ApiMethods from "../../utils/ApiMethods";
import ERT_API_URLS from "../../utils/ERTConfig";
import { useUser } from "../../components/common/UserProvider.jsx";
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
  const { userDetails } = useUser();
  const [pieData, setPieData] = useState(null);
  const [barData, setBarData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fixedColors = [
    "#FF5733",
    "#33FF57",
    "#3357FF",
    "#F1C40F",
    "#9B59B6",
    "#E74C3C",
    "#16A085",
    "#1ABC9C",
    "#2ECC71",
    "#3498DB",
    "#F39C12",
    "#D35400",
    "#BDC3C7",
    "#34495E",
    "#7F8C8D",
    "#2C3E50",
    "#8E44AD",
    "#2980B9",
    "#27AE60",
    "#F1C40F",
    "#D35400",
    "#9B59B6",
    "#34495E",
    "#F39C12",
    "#E74C3C",
    "#16A085",
    "#1ABC9C",
    "#9B59B6",
    "#2ECC71",
    "#3498DB",
    "#F1C40F",
    "#7F8C8D",
    "#16A085",
    "#F39C12",
    "#E74C3C",
    "#F1C40F",
    "#2980B9",
    "#9B59B6",
    "#E74C3C",
    "#FF5733",
    "#33FF57",
    "#7F8C8D",
    "#8E44AD",
    "#34495E",
    "#1ABC9C",
    "#2ECC71",
    "#3498DB",
    "#F1C40F",
    "#D35400",
    "#BDC3C7",
    "#FF5733",
    "#8E44AD",
    "#9B59B6",
  ];

  useEffect(() => {
    fetchPieChartData();
    fetchBarChartData();
  }, []);
  const dummyPieData = {
    labels: ["Category 1", "Category 2", "Category 3", "Category 4"],
    datasets: [
      {
        data: [20, 30, 25, 25],
        backgroundColor: fixedColors.slice(0, 4),
        borderColor: "#FFFFFF",
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
  const fetchPieChartData = async () => {
    try {
      setLoading(true);
      let URL = `${ERT_API_URLS.Pie_Chart_URL}?ServerName=${userDetails.serverName}`;
      const response = await ApiMethods.handleApiGetAction(
        URL,
        "Records doesn't exist.",
        0,
        setLoading,
        setPieData
      );

      const categories = Object.keys(response);
      const values = Object.values(response);

      // Cycle through fixed colors instead of generating random colors
      const colors = fixedColors.slice(0, values.length); // Get a slice of the fixed colors

      const total = values.reduce((acc, value) => acc + value, 0);

      const formattedData = {
        labels: categories,
        datasets: [
          {
            data: values.map((value) => (value / total) * 100),
            backgroundColor: colors,
            borderColor: "#FFFFFF",
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
    } catch (error) {
      console.error("Error fetching pie chart data", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchBarChartData = async () => {
    try {
      setLoading(true);
      let URL = `${ERT_API_URLS.Bar_Chart_URL}?ServerName=${userDetails.serverName}`;
      const response = await ApiMethods.handleApiGetAction(
        URL,
        "Records doesn't exist.",
        0,
        setLoading,
        setBarData
      );

      if (Array.isArray(response)) {
        const monthNames = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];

        const months = [...new Set(response.map((item) => item.month))];
        const monthsWithNames = months.map(
          (monthNumber) => monthNames[parseInt(monthNumber) - 1]
        );

        const interfaceNames = [
          ...new Set(response.map((item) => item.interfaceName)),
        ];

        const dataset = interfaceNames.map((interfaceName, index) => {
          const data = months.map((month) => {
            const entry = response.find(
              (item) =>
                item.month === month && item.interfaceName === interfaceName
            );
            return entry ? entry.totalCount : 0;
          });

          // Use the same fixed color array for bars
          const color = fixedColors[index % fixedColors.length];

          return {
            label: interfaceName,
            data: data,
            backgroundColor: color,
            borderColor: "#FFFFFF",
            borderWidth: 2,
            datalabels: {
              backgroundColor: color,
              color: "#fff",
              borderRadius: 4,
              font: {
                weight: "bold",
              },
              padding: 4,
            },
          };
        });

        const formattedData = {
          labels: monthsWithNames,
          datasets: dataset,
        };

        setBarData(formattedData);
      } else {
        console.error("Response is not an array:", response);
      }
    } catch (error) {
      console.error("Error fetching bar chart data", error);
    } finally {
      setLoading(false);
    }
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

  return (
    <div>
      {pieData && barData ? (
        <div className={styles["graphs"]}>
          <div className={styles["pie-chart"]}>
            <Pie data={pieData} options={pieOptions} />
            <h6 className={`${styles["headings"]} mt-4`}>Total Transactions</h6>
          </div>
          <div className={styles["bar-chart"]}>
            <Bar data={barData} />
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
