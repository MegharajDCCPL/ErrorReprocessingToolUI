import { NavLink, useNavigate } from "react-router-dom";
import styles from "./SideNavbar.module.css";
import { useUser } from "../common/UserProvider";
import { useEffect, useState } from "react";
import reopenIcon from "../../assets/reopen.svg";
import reprocessIcon from "../../assets/reprocess.svg";
import archiveIcon from "../../assets/archive.svg";
import purgeIcon from "../../assets/purge.svg";
import dashboardIcon from "../../assets/dashboard.svg";
import actionReportIcon from "../../assets/action-report.svg";
import interfaceIcon from "../../assets/interface.svg";
import interfaceGroupIcon from "../../assets/interface-group.svg";
import ApiMethods from "../../utils/ApiMethods";
import ERT_API_URLS from "../../utils/ERTConfig";

const SideNavbar = () => {
  const navigate = useNavigate();
  const { selectedComponentName, setSelectedComponentName } = useUser();
  const [appModules, setAppModules] = useState([]);
  const [loading, setLoading] = useState(false);
  let retryCount = 0;

  const handleNavLinkClick = (page) => {
    setSelectedComponentName(page);
    navigate(`/homepage/${page}`);
  };
  useEffect(() => {
    getAppModules();
  }, []);

  const getAppModules = async () => {
    //calling Get method
    const moduleRes = await ApiMethods.handleApiGetAction(
      `${ERT_API_URLS.AppModule_URL}`,
      "Error in fetching app modules.",
      retryCount,
      setLoading,
      setAppModules
    );
  };

  return (
    <div className={`${styles["side-navbar"]}`}>
      <ul>
        {(appModules.includes("Graphs") ||
          appModules.includes("Actionable Report")) && (
          <label className={`${styles["label"]}`}>Dashboard</label>
        )}
        {appModules.includes("Graphs") && (
          <li
            className={`${
              selectedComponentName === "dashboard"
                ? `${styles["active-link"]}`
                : ""
            } `}
            onClick={() => handleNavLinkClick("dashboard")}
          >
            <img className={`${styles["icon"]}`} src={dashboardIcon} />
            <NavLink to="dashboard">Graphs</NavLink>
          </li>
        )}
        {appModules.includes("Actionable Report") && (
          <li
            className={`${
              selectedComponentName === "actionreport"
                ? `${styles["active-link"]}`
                : ""
            } `}
            onClick={() => handleNavLinkClick("actionreport")}
          >
            <img className={`${styles["icon"]}`} src={actionReportIcon} />
            <NavLink to="/actionreport">Actionable Report</NavLink>
          </li>
        )}
        {(appModules.includes("Archive") ||
          appModules.includes("ReOpen Errors") ||
          appModules.includes("ReProcess Errors") ||
          appModules.includes("Purge")) && (
          <label className={`${styles["label"]}`}>Actions</label>
        )}
        {appModules.includes("ReProcess Errors") && (
          <li
            className={`${
              selectedComponentName === "reprocesserrors"
                ? `${styles["active-link"]}`
                : ""
            } `}
            onClick={() => handleNavLinkClick("reprocesserrors")}
          >
            <img className={`${styles["icon"]}`} src={reprocessIcon} />
            <NavLink to="/reprocesserrors">ReProcess Errors</NavLink>
          </li>
        )}
        {appModules.includes("ReOpen Errors") && (
          <li
            className={`${
              selectedComponentName === "reopenerrors"
                ? `${styles["active-link"]}`
                : ""
            } `}
            onClick={() => handleNavLinkClick("reopenerrors")}
          >
            <img className={`${styles["icon"]}`} src={reopenIcon} />
            <NavLink to="/reopenerrors">ReOpen Errors</NavLink>
          </li>
        )}
        {appModules.includes("Archive") && (
          <li
            className={`${
              selectedComponentName === "archive"
                ? `${styles["active-link"]}`
                : ""
            } `}
            onClick={() => handleNavLinkClick("archive")}
          >
            <img className={`${styles["icon"]}`} src={archiveIcon} />
            <NavLink to="/archive">Archive </NavLink>
          </li>
        )}
        {appModules.includes("Purge") && (
          <li
            className={`${
              selectedComponentName === "purge"
                ? `${styles["active-link"]}`
                : ""
            } `}
            onClick={() => handleNavLinkClick("purge")}
          >
            <img className={`${styles["icon"]}`} src={purgeIcon} />
            <NavLink to="/purge">Purge </NavLink>
          </li>
        )}
        {(appModules.includes("Interface") ||
          appModules.includes("Interface Group")) && (
          <label className={`${styles["label"]}`}>General Configuration</label>
        )}
        {appModules.includes("Interface") && (
          <li
            className={`${
              selectedComponentName === "InterfaceManagement"
                ? `${styles["active-link"]}`
                : ""
            } `}
            onClick={() => handleNavLinkClick("InterfaceManagement")}
          >
            <img className={`${styles["icon"]}`} src={interfaceIcon} />
            <NavLink to="/InterfaceManagement">Interface</NavLink>
          </li>
        )}
        {appModules.includes("Interface Group") && (
          <li
            className={`${
              selectedComponentName === "InterfaceGroupManagement"
                ? `${styles["active-link"]}`
                : ""
            } `}
            onClick={() => handleNavLinkClick("InterfaceGroupManagement")}
          >
            <img className={`${styles["icon"]}`} src={interfaceGroupIcon} />
            <NavLink to="/InterfaceGroupManagement">Interface Group</NavLink>
          </li>
        )}

        {/* <li
          className={`${
            selectedComponentName === "settings"
              ? `${styles["active-link"]}`
              : ""
          } `}
          onClick={() => handleNavLinkClick("settings")}
        >
          <img className={`${styles["icon"]}`} src={""} />
          <NavLink to="/settings">Settings</NavLink>
        </li> */}
      </ul>
    </div>
  );
};

export default SideNavbar;
