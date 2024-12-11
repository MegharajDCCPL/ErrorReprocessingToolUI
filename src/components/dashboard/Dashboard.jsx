import React, { useState, useEffect } from "react";
import ChartsComponent from "../dashboard/ChartComponent";
import TableUtility from "../common/modified-datatable/TableUtility";
import data from "../../data/Data";
import ErrorStatsCard from "../dashboard/ErrorStatsCard";

const Dashboard = () => {
  const gridColumns = [
    { Header: "Record Date", accessor: "recordDate" },
    { Header: "Message Type", accessor: "messageType" },
    { Header: "Message ID", accessor: "messageId" },
    { Header: "Critical Element", accessor: "criticalElement" },
    { Header: "Error", accessor: "error" },
    { Header: "Error Code", accessor: "errorCode" },
    { Header: "Adapter Type", accessor: "adapterType" },
    { Header: "Response", accessor: "response" },
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
      <div>
        <ErrorStatsCard data={errorStats} />
      </div>
      <div className="mt-3">
        <ChartsComponent />
      </div>
      <TableUtility
        gridColumns={gridColumns}
        gridData={data}
        pageSizes={[5, 10, 20]}
      />
    </div>
  );
};

export default Dashboard;
