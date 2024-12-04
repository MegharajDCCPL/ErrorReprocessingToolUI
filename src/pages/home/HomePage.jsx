import SideNavBar from "../../components/common/SideNavBar";
import MiddleContainer from "../../components/common/MiddleContainer";
import styles from "./Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const HomePage = () => {
  return (
    <div className={`d-flex h-100 bg-light position-relative`}>
      <>
        <SideNavBar />
        <MiddleContainer />
      </>
    </div>
  );
};

export default HomePage;
