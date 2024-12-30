import { Outlet } from "react-router-dom";

const MiddleContainer = () => {
  return (
    <div className="bg-light flex-grow-1 overflow-auto">
      <Outlet />
    </div>
  );
};

export default MiddleContainer;
