import React, { useState, useEffect } from "react";
import ChartsComponent from "../dashboard/ChartComponent";
import TableUtility from "../common/modified-datatable/TableUtility";
import ErrorStatsCard from "../dashboard/ErrorStatsCard";
import ApiMethods from "../../utils/ApiMethods";
import { ToastContainer } from "react-toastify";
import ERT_API_URLS from "../../utils/ERTConfig";
import ErrorLogger from "../common/ErrorLogger";
import { useUser } from "../common/UserProvider";

const Dashboard = () => {
  const { setSelectedComponentName, userDetails } = useUser();
  useEffect(() => {
    setSelectedComponentName("dashboard");
  }, []);
  const [loading, setLoading] = useState(false);
  const [errorCounts, setErrorCounts] = useState([]);
  const [recentErrors, setRecentErrors] = useState([]);
  const [errorStats, setErrorStats] = useState({});
  // Grid columns for the table
  const gridColumns = [
    { Header: "Error ID", accessor: "errorId", show: false },
    { Header: "Record Date", accessor: "recordDate" },
    { Header: "Message Type", accessor: "messageType" },
    { Header: "Message ID", accessor: "messageId" },
    { Header: "MES Object", accessor: "mesObject" },
    { Header: "MES Object Value", accessor: "mesObjectValue" },
    { Header: "Interface Type", accessor: "interfaceType" },
    { Header: "Error", accessor: "error" },
    { Header: "Error Code", accessor: "errorCode" },
    { Header: "Adapter Type", accessor: "adapterType" },
    { Header: "Response", accessor: "response" },
    { Header: "Original Message Content", accessor: "originalMessageContent" },
    { Header: "Request", accessor: "request" },
    { Header: "Sequencer Error", accessor: "sequencerError" },
  ];

  // Fetch data from API when component mounts
  useEffect(() => {
    fetchRecentErrors();
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      let URL = `${ERT_API_URLS.Error_Counts_URL}?ServerName=${userDetails.serverName}`;
      const response = await ApiMethods.handleApiGetAction(
        URL,
        "Records doesn't exist.",
        0,
        setLoading,
        setErrorCounts
      );
      if (response) {
        const stats = {
          openCount: response.openCount || 0,
          reprocessedCount: response.reprocessedCount || 0,
          closedCount: response.closedCount || 0,
          totalCount: response.totalCount || 0,
        };
        setErrorStats(stats);
      } else {
        setErrorStats({
          openCount: 0,
          reprocessedCount: 0,
          closedCount: 0,
          totalCount: 0,
        });
      }
    } catch (error) {
      ErrorLogger(error);
    }
  };

  const fetchRecentErrors = async () => {
    try {
      let URL = `${ERT_API_URLS.Recent_Errors_URL}?ServerName=${userDetails.serverName}`;
      const response = await ApiMethods.handleApiGetAction(
        URL,
        "Records doesn't exist.",
        0,
        setLoading,
        setRecentErrors
      );
      console.log(response);
    } catch (error) {
      ErrorLogger(error);
    }
  };

  // Display loading state while fetching data
  if (loading || !errorStats) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ToastContainer />
      <div
        className="ms-4"
        style={{
          textAlign: "center",
        }}
      >
        <ErrorStatsCard className="ms-4" data={errorStats} />
      </div>
      <div className="mt-3 me-2">
        <ChartsComponent />
      </div>
      <div style={{ height: "76vh", overflowX: "auto" }}>
        <TableUtility
          gridColumns={gridColumns.filter((column) => column.show !== false)}
          gridData={recentErrors}
          pageSizes={[5, 10, 20]}
        />
      </div>
    </div>
  );
};

export default Dashboard;
