import LaunchComponent from "../../components/launch/LaunchComponent";
import LaunchCarousel from "../../components/launch/LaunchCarousel";
import cardsData from "../../data/cardsdata";
import styles from "./Launch.module.css";

const LaunchPage = () => {
  return (
    <div>
      <div className="bg-light flex-grow-1 overflow-auto vh-100">
        <div className={`${styles["header-title"]}`}>
          <h2 className="d-flex align-items-baseline">
            Error Reprocessing Tool<h5 className="ms-2">V4.0.0</h5>
          </h2>
          <h5 className="fst-italic">
            Central Hub for Seamless Error Handling and Reprocessing
          </h5>
        </div>
        <div className="container-fluid d-flex justify-content-center w-auto">
          <div className={`${styles["LaunchCarousel"]} `}>
            <div
              style={{ alignItems: "start" }}
              className={`${styles["header-title"]} pt-3`}
            >
              <h4>Robust features of Error Reprocessing Tool</h4>
            </div>
            <LaunchCarousel cardsData={cardsData} />
          </div>
          <div>
            <LaunchComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaunchPage;
