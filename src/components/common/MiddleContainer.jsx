import { Outlet } from "react-router-dom";
import styles from "./MiddleContainer.module.css";

const MiddleContainer = () => {
  return (
    <div className="bg-light flex-grow-1 overflow-auto">
      <Outlet />
    </div>
  );
};

export default MiddleContainer;
