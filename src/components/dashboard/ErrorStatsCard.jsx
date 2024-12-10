import React from "react";
import styles from "./Dashboard.module.css";

// Card component for individual error statistics
const StatCard = ({ title, value }) => (
  <div className={styles["stat-card"]}>
    <h5 className={styles["stat-card-title"]}>{title}</h5>
    <span className={styles["stat-value"]}>{value}</span>
  </div>
);

const ErrorStatsCard = ({ data }) => {
  return (
    <div className={styles["error-stats-container"]}>
      <StatCard
        title="Unprocessed Errors"
        value={data.totalunprocessederrors}
      />
      <StatCard title="Errors This Month" value={data.totalerrorsthismonth} />
      <StatCard
        title="Errors Reprocessed This Month"
        value={data.errorsreprocessedthismonth}
      />
      <StatCard
        title="Unprocessed Errors This Month"
        value={data.totalunprocessederrorsthismonth}
      />
    </div>
  );
};

export default ErrorStatsCard;
