const API_BASE_URL = document.getElementById("API_URL").getAttribute("value");

const ERT_API_URLS = {
  Open_Errors_URL: `${API_BASE_URL}/api/OpenErrors`,
  Close_Open_Errors_URL: `${API_BASE_URL}/api/OpenErrors/Close`,
  Reprocess_Open_Errors_URL: `${API_BASE_URL}/api/OpenErrors/Reprocess`,
  Closed_Errors_URL: `${API_BASE_URL}/api/ClosedErrors/GetClosedErrors`,
  Open_Closed_Errors_URL: `${API_BASE_URL}/api/ClosedErrors/Open`,
  Closed_Reprocess_Errors_URL: `${API_BASE_URL}/api/ClosedErrors/GetClosedAndReprocessedErrors`,
  Archive_Errors_URL: `${API_BASE_URL}/api/ClosedErrors/Archive`,
  Archived_Errors_URL: `${API_BASE_URL}/api/ArchivedErrors`,
  Purge_Errors_URL: `${API_BASE_URL}/api/Purge/Purge`,
  InterfaceList_URL: `${API_BASE_URL}/interface`,
  UsersList_URL: `${API_BASE_URL}/interfaceUser`,
  Error_Counts_URL: `${API_BASE_URL}/api/ErrorProcessCount/GetErrorCountsByStatus`,
  Recent_Errors_URL: `${API_BASE_URL}/api/OpenErrors/GetRecentErrors`,
  Pie_Chart_URL: `${API_BASE_URL}/api/ErrorProcessCount/GetErrorCountsByInterface`,
  Bar_Chart_URL: `${API_BASE_URL}/api/ErrorProcessCount/GetErrorHistory`,
  SubAppAccess_URL: `${API_BASE_URL}/api/SubAppsAccess/sub-apps-access`,
  Retention_Days_URL: `${API_BASE_URL}/api/Settings/`,
};

export default ERT_API_URLS;
