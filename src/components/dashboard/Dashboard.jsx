import React, { useState, useEffect } from "react";
import ChartsComponent from "../dashboard/ChartComponent";
import TableUtility from "../common/modified-datatable/TableUtility";
import data from "../../data/Data";
import ErrorStatsCard from "../dashboard/ErrorStatsCard";
import { useUser } from "../common/UserProvider";

const Dashboard = () => {
  const { setSelectedComponentName } = useUser();
  useEffect(() => {
    setSelectedComponentName("dashboard");
  }, []);

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

  // State to store error stats fetched from the API
  const [errorStats, setErrorStats] = useState({
    totalunprocessederrors: 9,
    totalerrorsthismonth: 5,
    errorsreprocessedthismonth: 2,
    totalunprocessederrorsthismonth: 3,
  });

  // Fetch data from API when component mounts
  // useEffect(() => {
  //  try {
  //     await ApiMethods.handleApiGetAction(
  //       API_URLS.ServerConfig_URL,
  //       "Records doesn't exist.",
  //       0,
  //       setLoading,
  //       setServerApiResponse,
  //       "Error in fetching servers"
  //     );
  //   } catch (error) {
  //     ErrorLogger(error);
  //   }
  // }, []);

  // Display loading state while fetching data
  if (!errorStats) {
    return <div>Loading...</div>;
  }

  return (
    <div>
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
          gridData={data}
          pageSizes={[5, 10, 20]}
        />
      </div>
    </div>
  );
};

export default Dashboard;
