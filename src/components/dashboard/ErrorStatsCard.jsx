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
      <StatCard title="Open Error Count" value={data.openCount} />
      <StatCard title="Reprocessed Error Count" value={data.reprocessedCount} />
      <StatCard title="Closed Error Count" value={data.closedCount} />
      <StatCard title="Total Error Count" value={data.totalCount} />
    </div>
  );
};

export default ErrorStatsCard;
