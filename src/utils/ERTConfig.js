const API_BASE_URL = document.getElementById("API_URL").getAttribute("value");
// const API_BASE_URL = "https://192.168.1.33:8073";

const ERT_API_URLS = {
  Reprocess_URL: `${API_BASE_URL}/reprocess`,
  InterfaceList_URL: `${API_BASE_URL}/interface`,
  UsersList_URL: `${API_BASE_URL}/interfaceUser`,
};

export default ERT_API_URLS;
