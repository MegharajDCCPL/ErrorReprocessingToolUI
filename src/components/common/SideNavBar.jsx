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
        <li
          className={`${
            selectedComponentName === "dashboard"
              ? `${styles["active-link"]}`
              : ""
          } `}
          onClick={() => handleNavLinkClick("dashboard")}
        >
          <img className={`${styles["icon"]}`} src={""} />
          <NavLink to="dashboard">Dashboard</NavLink>
        </li>
        <li
          className={`${
            selectedComponentName === "reprocess"
              ? `${styles["active-link"]}`
              : ""
          } `}
          onClick={() => handleNavLinkClick("reprocess")}
        >
          <img className={`${styles["icon"]}`} src={""} />
          <NavLink to="/reprocess">ReProcess Errors</NavLink>
        </li>
        <li
          className={`${
            selectedComponentName === "close" ? `${styles["active-link"]}` : ""
          } `}
          onClick={() => handleNavLinkClick("close")}
        >
          <img className={`${styles["icon"]}`} src={""} />
          <NavLink to="/close">ReOpen Errors</NavLink>
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
        <li
          className={`${
            selectedComponentName === "settings"
              ? `${styles["active-link"]}`
              : ""
          } `}
          onClick={() => handleNavLinkClick("settings")}
        >
          <img className={`${styles["icon"]}`} src={""} />
          <NavLink to="/settings">Settings</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideNavbar;
