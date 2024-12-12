import { Outlet } from "react-router-dom";
import styles from "./MiddleContainer.module.css";

const MiddleContainer = () => {
  return (
    <div className={`${styles["whole-container"]} bg-light flex-grow-1 p-2`}>
      <Outlet />
    </div>
  );
};

export default MiddleContainer;
