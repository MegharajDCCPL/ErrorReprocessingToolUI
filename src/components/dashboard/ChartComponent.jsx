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

  useEffect(() => {
    fetchPieChartData();
    fetchBarChartData();
  }, []);

  // Function to fetch the data for Pie chart (for example, API call)
  const fetchPieChartData = async () => {
    try {
      setLoading(true);
      let URL = `${ERT_API_URLS.Pie_Chart_URL}?ServerName=${userDetails.serverName}`;
      const response = await ApiMethods.handleApiGetAction(
        URL,
        "Records doesn't exist.",
        0,
        setLoading,
        setPieData,
        "Error in fetching errors"
      );

      const categories = Object.keys(response); // Extract categories like 'irproductmsgtype', 'mfgOrder', etc.
      const values = Object.values(response); // Extract corresponding values

      // Generate a set of unique colors for each segment
      const colors = generateColors(values.length);

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

  // Helper function to generate a set of colors dynamically
  const generateColors = (num) => {
    const colors = [];
    for (let i = 0; i < num; i++) {
      colors.push(generateRandomColor());
    }
    return colors;
  };

  // Helper function to generate a random color
  const generateRandomColor = () => {
    const randomColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
    return randomColor;
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
        setBarData,
        "Error in fetching errors"
      );

      if (Array.isArray(response)) {
        // Create a month name mapping
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

        const dataset = interfaceNames.map((interfaceName) => {
          const data = months.map((month) => {
            const entry = response.find(
              (item) =>
                item.month === month && item.interfaceName === interfaceName
            );
            return entry ? entry.totalCount : 0;
          });

          const randomColor = generateRandomColor();

          return {
            label: interfaceName,
            data: data,
            backgroundColor: randomColor,
            borderColor: "#FFFFFF",
            borderWidth: 2,
            datalabels: {
              backgroundColor: randomColor,
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
