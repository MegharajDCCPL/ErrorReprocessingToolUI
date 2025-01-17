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
