const API_BASE_URL = document.getElementById("API_URL").getAttribute("value");

const ERT_API_URLS = {
  //Action Page
  Action_Errors_URL: `${API_BASE_URL}/api/OpenErrors/GetOpenErrors`,
  Actions_URL: `${API_BASE_URL}/api/OpenErrors/GetActionableErrorStatus`,
  Change_Action_URL: `${API_BASE_URL}/api/OpenErrors/ErrorStatusChangeAction`,

  //Reprocess Page
  Open_Errors_URL: `${API_BASE_URL}/api/OpenErrors/GetActionableErrors`,
  Close_Open_Errors_URL: `${API_BASE_URL}/api/OpenErrors/Close`,
  Reprocess_Open_Errors_URL: `${API_BASE_URL}/api/OpenErrors/Reprocess`,

  //Close Page
  Closed_Errors_URL: `${API_BASE_URL}/api/ClosedErrors/GetClosedErrors`,
  Open_Closed_Errors_URL: `${API_BASE_URL}/api/ClosedErrors/Open`,

  //Archive Page
  Closed_Reprocess_Errors_URL: `${API_BASE_URL}/api/ClosedErrors/GetClosedAndReprocessedErrors`,
  Archive_Errors_URL: `${API_BASE_URL}/api/ClosedErrors/Archive`,

  //PurgePage
  Archived_Errors_URL: `${API_BASE_URL}/api/ArchivedErrors`,
  Purge_Errors_URL: `${API_BASE_URL}/api/Purge/Purge`,

  //Retention Days
  Retention_Days_URL: `${API_BASE_URL}/api/Settings/`,

  InterfaceList_URL: `${API_BASE_URL}/interface`,
  UsersList_URL: `${API_BASE_URL}/interfaceUser`,
  NX_Users_URL: `${API_BASE_URL}/interfaceUser/users`,

  //Dashboard
  Error_Counts_URL: `${API_BASE_URL}/api/ErrorProcessCount/GetErrorCountsByStatus`,
  Recent_Errors_URL: `${API_BASE_URL}/api/OpenErrors/GetRecentErrors`,
  Pie_Chart_URL: `${API_BASE_URL}/api/ErrorProcessCount/GetErrorCountsByInterface`,
  Bar_Chart_URL: `${API_BASE_URL}/api/ErrorProcessCount/GetErrorHistory`,

  //Launch Page
  SubAppAccess_URL: `${API_BASE_URL}/api/SubAppsAccess/sub-apps-access`,
  AppModule_URL: `${API_BASE_URL}/module`,
};

export default ERT_API_URLS;
