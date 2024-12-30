import { Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Common.module.css";

const LoadingSpinner = ({ loading }) => {
  return (
    loading && (
      <div
        className={
          "position-fixed top-0 start-0 bottom-0 end-0 d-flex justify-content-center align-items-center bg-white bg-opacity-50"
        }
      >
        <div
          className={`${styles["loading-spinner"]} d-flex justify-content-center align-items-center`}
        >
          <Spinner animation="border" role="status" variant="white">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <p className="ms-2 text-white">
            Please wait... we are processing your request.
          </p>
        </div>
      </div>
    )
  );
};

export default LoadingSpinner;
