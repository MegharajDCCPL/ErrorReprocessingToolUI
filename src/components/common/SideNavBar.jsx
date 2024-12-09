import { NavLink, useNavigate } from "react-router-dom";
import styles from "./SideNavbar.module.css";
// import { useUser } from "../common/UserProvider";

const SideNavbar = () => {
  const navigate = useNavigate();

  const handleNavLinkClick = (page) => {
    navigate(`/homepage/${page}`);
  };

  return (
    <div className={`${styles["side-navbar"]} ps-2 `}>
      <ul>
        <li
          className={`${styles["active-link"]}`}
          onClick={() => handleNavLinkClick("dashboard")}
        >
          <img className={`${styles["icon"]}`} src={""} />
          <NavLink to="dashboard">Dashboard</NavLink>
        </li>
        <li
          className={`${styles["active-link"]}`}
          onClick={() => handleNavLinkClick("reprocess")}
        >
          <img className={`${styles["icon"]}`} src={""} />
          <NavLink to="/reprocess">Reprocess</NavLink>
        </li>
        <li
          className={`${styles["active-link"]}`}
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
