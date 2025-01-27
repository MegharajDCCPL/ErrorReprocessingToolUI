import { NavLink, useNavigate } from "react-router-dom";
import styles from "./SideNavbar.module.css";
import { useUser } from "../common/UserProvider";

const SideNavbar = () => {
  const navigate = useNavigate();
  const { selectedComponentName, setSelectedComponentName } = useUser();

  const handleNavLinkClick = (page) => {
    setSelectedComponentName(page);
    navigate(`/homepage/${page}`);
  };

  return (
    <div className={`${styles["side-navbar"]} ps-2 `}>
      <ul>
        <label className={`${styles["label"]}`}>Dashboard</label>
        <li
          className={`${
            selectedComponentName === "dashboard"
              ? `${styles["active-link"]}`
              : ""
          } `}
          onClick={() => handleNavLinkClick("dashboard")}
        >
          <img className={`${styles["icon"]}`} src={""} />
          <NavLink to="dashboard">Graphs</NavLink>
        </li>
        <li
          className={`${
            selectedComponentName === "actionreport"
              ? `${styles["active-link"]}`
              : ""
          } `}
          onClick={() => handleNavLinkClick("actionreport")}
        >
          <img className={`${styles["icon"]}`} src={""} />
          <NavLink to="/actionreport">Actionable Report</NavLink>
        </li>
        <label className={`${styles["label"]}`}>Actions</label>
        <li
          className={`${
            selectedComponentName === "reprocesserrors"
              ? `${styles["active-link"]}`
              : ""
          } `}
          onClick={() => handleNavLinkClick("reprocesserrors")}
        >
          <img className={`${styles["icon"]}`} src={""} />
          <NavLink to="/reprocesserrors">ReProcess Errors</NavLink>
        </li>
        <li
          className={`${
            selectedComponentName === "reopenerrors"
              ? `${styles["active-link"]}`
              : ""
          } `}
          onClick={() => handleNavLinkClick("reopenerrors")}
        >
          <img className={`${styles["icon"]}`} src={""} />
          <NavLink to="/reopenerrors">ReOpen Errors</NavLink>
        </li>
        <li
          className={`${
            selectedComponentName === "archive"
              ? `${styles["active-link"]}`
              : ""
          } `}
          onClick={() => handleNavLinkClick("archive")}
        >
          <img className={`${styles["icon"]}`} src={""} />
          <NavLink to="/archive">Archive </NavLink>
        </li>
        <li
          className={`${
            selectedComponentName === "purge" ? `${styles["active-link"]}` : ""
          } `}
          onClick={() => handleNavLinkClick("purge")}
        >
          <img className={`${styles["icon"]}`} src={""} />
          <NavLink to="/purge">Purge </NavLink>
        </li>
        <label className={`${styles["label"]}`}>General Configuration</label>

        <li
          className={`${
            selectedComponentName === "InterfaceManagement"
              ? `${styles["active-link"]}`
              : ""
          } `}
          onClick={() => handleNavLinkClick("InterfaceManagement")}
        >
          <img className={`${styles["icon"]}`} src={""} />
          <NavLink to="/InterfaceManagement">Interface</NavLink>
        </li>
        <li
          className={`${
            selectedComponentName === "InterfaceGroupManagement"
              ? `${styles["active-link"]}`
              : ""
          } `}
          onClick={() => handleNavLinkClick("InterfaceGroupManagement")}
        >
          <img className={`${styles["icon"]}`} src={""} />
          <NavLink to="/InterfaceGroupManagement">Interface Group</NavLink>
        </li>

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
