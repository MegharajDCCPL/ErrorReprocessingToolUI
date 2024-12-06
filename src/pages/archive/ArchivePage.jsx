import Archive from "../../components/archive/Archive";
import styles from "../CommonPages.module.css";
import { useState } from "react";
import { Button } from "react-bootstrap";

const ArchivePage = () => {
  const [currentPage, setCurrentPage] = useState("View");
  return (
    <div className="bg-light d-flex flex-column h-100">
      <div className="d-flex gap-3 me-3 pb-4 border-bottom border-subtle">
        <Button
          className={
            currentPage === "Create"
              ? `${styles["btn-active"]}`
              : `${styles["btn"]}`
          }
          size="sm"
          onClick={() => setCurrentPage("Create")}
        >
          Archived
        </Button>
      </div>
      <Archive />
    </div>
  );
};

export default ArchivePage;
