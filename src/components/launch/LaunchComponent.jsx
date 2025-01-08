import { useState, useEffect } from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { useUser } from "../../components/common/UserProvider.jsx";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import styles from "./LaunchPage.module.css";
import ApiMethods from "../../utils/ApiMethods";
import ERT_API_URLS from "../../utils/ERTConfig";
import { ToastContainer } from "react-toastify";
import ErrorLogger from "../common/ErrorLogger.js";
import axios from "axios";
import LoadingSpinner from "../common/LoadingSpinner";

const Nexus_UI_URL = document
  .getElementById("Nexus_UI_URL")
  .getAttribute("value");

const Nexus_API_URL = document
  .getElementById("Nexus_API_URL")
  .getAttribute("value");

const LaunchComponent = () => {
  const { setUserDetails } = useUser();
  const [selectedServer, setSelectedServer] = useState(null);
  const [selectedApp, setSelectedApp] = useState([]);
  const [loggedInDetails, setLoggedInDetails] = useState({});
  const [options, setOptions] = useState([]);
  const [optionApiRes, setOptionApiRes] = useState([]);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [uuid, setUuid] = useState(uuidv4());
  const [loading, setLoading] = useState(false);
  const [apiResponse, setApiResponse] = useState(null);
  const [appPort, setAppPort] = useState(null);
  const [statusCode, setStatusCode] = useState(null);
  const navigate = useNavigate();
  let retryCount = 0;
  // const [appModules, setAppModules] = useState([]);

  useEffect(() => {
    try {
      const messageHandler = (event) => {
        if (event.origin.toLowerCase() !== Nexus_UI_URL.toLowerCase()) return;
        let recivedAppId = event.data.selectedAppId;
        setSelectedApp(event.data.selectedAppId);
        setLoggedInDetails(event.data.loggedInAllDetails);
        fetchData(recivedAppId);
      };
      window.addEventListener("message", messageHandler);
      window.parent.postMessage("iframeLoaded", Nexus_UI_URL.toLowerCase());
      return () => {
        window.removeEventListener("message", messageHandler);
      };
    } catch (error) {
      ErrorLogger(error);
    }
  }, []);

  useEffect(() => {
    try {
      setIsButtonDisabled(
        !selectedServer ||
          !options.some((opt) => opt.serverName === selectedServer.serverName)
      );
    } catch (error) {
      ErrorLogger(error);
    }
  }, [selectedServer, options]);

  useEffect(() => {
    try {
      if (optionApiRes.length > 0) {
        setOptions(optionApiRes);
      }
    } catch (error) {
      ErrorLogger(error);
    }
  }, [optionApiRes]);

  // const fetchData = async (recivedAppId) => {
  //   const apiUrl = `${Nexus_API_URL}/product/${recivedAppId}`;
  //   try {
  //     const response = await axios.get(apiUrl, {
  //       withCredentials: true,
  //     });
  //     // const response = await ApiMethods.handleApiGetAction(
  //     //   apiUrl,
  //     //   "Records doesn't exist.",
  //     //   retryCount,
  //     //   setLoading,
  //     //   "",
  //     //   "Error fetching server options."
  //     // );

  //     if (response !== null && response.length > 0) {
  //       const serverNames = response.map((server) => ({
  //         id: server.serverId,
  //         serverName: server.serverName,
  //         utcOffset: server.utcOffset,
  //         serverPort: server.serverPort,
  //         envColor: server.envColor,
  //         envName: server.envName,
  //       }));
  //       console.log("serverNames", serverNames);
  //       setOptionApiRes(serverNames);
  //     }
  //   } catch (error) {
  //     ErrorLogger(error);
  //   }
  // };

  const fetchData = async (recivedAppId) => {
    const apiUrl = `${Nexus_API_URL}/product/${recivedAppId}`;
    try {
      const response = await axios.get(apiUrl, {
        withCredentials: true,
      });
      if (
        response &&
        response.data &&
        Array.isArray(response.data) &&
        response.data.length > 0
      ) {
        const serverNames = response.data.map((server) => ({
          id: server.serverId,
          serverName: server.serverName,
          utcOffset: server.utcOffset,
          serverPort: server.serverPort,
          envColor: server.envColor,
          envName: server.envName,
        }));
        setOptionApiRes(serverNames);
      } else {
        console.log("No server data available.");
      }
    } catch (error) {
      ErrorLogger(error);
    }
  };

  const handleServerSelection = async (selected) => {
    try {
      if (selected.length > 0) {
        const apiUrl = `${Nexus_API_URL}/server-config/user-app-server-port?userId=${loggedInDetails.userId}&appId=${selectedApp}&serverId=${selected[0].id}`;
        //calling Get method
        // ApiMethods.handleApiGetAction(
        //   apiUrl,
        //   "Records doesn't exist.",
        //   retryCount,
        //   setLoading,
        //   setAppPort,
        //   "Error in fetching app modules."
        // );

        const appPort = await axios.get(apiUrl, {
          withCredentials: true,
        });
        setAppPort(appPort.data);

        setSelectedServer({
          serverName: selected[0].serverName,
          utcOffset: selected[0].utcOffset,
          serverPort: selected[0].serverPort,
          envColor: selected[0].envColor,
          envName: selected[0].envName,
        });
      }
    } catch (error) {
      ErrorLogger(error);
    }
  };

  const handleLaunchClick = async (event) => {
    event.preventDefault();

    const payload = {
      userId: loggedInDetails.userId,
      userName: loggedInDetails.userName,
      roleTypeId: loggedInDetails.roleTypeId,
      roleId: loggedInDetails.roleId,
      domainId: loggedInDetails.domainId,
      app: "",
      serverName: selectedServer.serverName,
      serverPort: appPort,
      utcOffset: selectedServer.utcOffset,
    };
    setUserDetails(payload);
    navigate("/homepage/dashboard");
    try {
      const response = await ApiMethods.handleApiPostAction(
        "",
        "",
        ERT_API_URLS.SubAppAccess_URL,
        "",
        "Error in Purging Error",
        "",
        setLoading,
        "",
        0,
        payload,
        uuid,
        setUuid
      );
      if (response.redirectUrl) {
        const res = await ApiMethods.handleApiGetAction(
          response.redirectUrl,
          "Error fetching redirect URL data.",
          retryCount,
          setLoading,
          setApiResponse,
          "An error occurred while processing your request."
        );

        if (res && res.redirectUrl) {
          await ApiMethods.handleApiGetAction(
            res.redirectUrl,
            "Error fetching final redirect URL data.",
            retryCount,
            setLoading,
            setApiResponse,
            "An error occurred while processing your request.",
            setStatusCode
          );
        }
      }

      const message = {
        type: "Header",
        data: selectedServer.serverName,
        color: selectedServer.envColor,
      };
      window.parent.postMessage(message, Nexus_UI_URL);
    } catch (error) {
      ErrorLogger(error);
    }
  };

  // useEffect(() => {
  //   if (statusCode === 200) {
  //     handleRedirect();
  //   }
  // }, [statusCode]);

  // const handleRedirect = async () => {
  //   //calling Get method
  //   const moduleRes = await ApiMethods.handleApiGetAction(
  //     `${ERT_API_URLS.AppModule_URL}`,
  //     "Records doesn't exist.",
  //     retryCount,
  //     setLoading,
  //     setAppModules,
  //     "Error in fetching app modules."
  //   );

  //   if (moduleRes !== null && moduleRes.length > 0) {
  //     // Need to mantain this default menu-name to avoid mis-match
  //     let defaultMenuName = moduleRes[0];
  //     if (moduleRes.includes("Dashboard")) {
  //       defaultMenuName = "Dashboard";
  //     } else if (moduleRes.includes("Export")) {
  //       defaultMenuName = "Export";
  //     } else if (moduleRes.includes("Import")) {
  //       defaultMenuName = "Import";
  //     } else if (moduleRes.includes("Data References")) {
  //       defaultMenuName = "Data References";
  //     } else if (moduleRes.includes("Objects Library")) {
  //       defaultMenuName = "Objects Library";
  //     } else if (moduleRes.includes("Fields Library")) {
  //       defaultMenuName = "Fields Library";
  //     } else if (moduleRes.includes("Objects Permission")) {
  //       defaultMenuName = "Objects Permission";
  //     } else if (moduleRes.includes("Objects Permission")) {
  //       defaultMenuName = "Objects Permission";
  //     } else if (moduleRes.includes("Audit Trail Complete")) {
  //       defaultMenuName = "Audit Trail Complete";
  //     }

  //     navigate(
  //       `/homepage/${defaultMenuName.toLowerCase().replace(/\s+/g, "-").trim()}`
  //     );
  //   } else {
  //     navigate("/homepage");
  //   }
  // };

  return (
    <>
      <div
        className={`${styles["launch-container"]} rounded-4 me-5 d-flex flex-column justify-content-center`}
      >
        {/* <LoadingSpinner loading={loading} /> */}
        <ToastContainer />
        {/* {!loading && ( */}
        <div>
          <Form
            id="launch-form"
            onSubmit={handleLaunchClick}
            className={`${styles["launch-form"]} d-flex flex-column justify-content-between p-3 flex-grow-1`}
          >
            <Form.Group
              controlId="formConnectServer"
              className="d-flex flex-column align-items-center"
            >
              <Form.Label className={`${styles["connect-server"]} text-center`}>
                Select Server<span className="text-danger">*</span>
              </Form.Label>
              <Typeahead
                id="server-typeahead"
                labelKey="serverName"
                options={options}
                placeholder="Choose a server..."
                onChange={handleServerSelection}
                filterBy={() => true}
                className={`${styles["form-control"]} w-100`}
                inputProps={{
                  readOnly: true,
                  style: {
                    backgroundColor: selectedServer
                      ? `#${selectedServer.envColor}`
                      : undefined,
                    border: "none",
                    color: "white",
                  },
                }}
              />
              {/* {selectedServer && selectedServer.envName && (
                <Form.Text
                  className={`${styles["connect-server"]} text-center`}
                >
                  {selectedServer.envName}
                </Form.Text>
              )} */}
            </Form.Group>
            {/* <p>{selectedServer}</p> */}
            <div className="d-flex justify-content-center mt-4">
              <Button
                id="connect-button"
                variant="primary"
                type="submit"
                className={`${styles["connect-btn"]}`}
                // disabled={isButtonDisabled}
              >
                Connect
              </Button>
            </div>
          </Form>
        </div>
        {/* )} */}
      </div>
    </>
  );
};

export default LaunchComponent;
