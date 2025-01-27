import CreateInterface from "./CreateInterface";
import ViewInterface from "./ViewInterface";
import { Button, OverlayTrigger, Tooltip, Form } from "react-bootstrap";
import React, { useEffect, useState, useRef } from "react";
import styles from "./Interface.Module.css";

const InterfaceManagement = () => {
  const [currentPage, setCurrentPage] = useState("View");

  return (
    <div className="bg-light d-flex flex-column h-100">
      <div className="d-flex gap-3 ms-3 me-3 mt-3 pb-3 border-bottom border-subtle">
        <Button
          className={
            currentPage === "View"
              ? `${styles["btn-active"]}`
              : `${styles["btn"]}`
          }
          size="sm"
          onClick={() => setCurrentPage("View")}
        >
          View Interface
        </Button>
        <Button
          className={
            currentPage === "Create"
              ? `${styles["btn-active"]}`
              : `${styles["btn"]}`
          }
          size="sm"
          onClick={() => setCurrentPage("Create")}
        >
          Create Interface
        </Button>
      </div>
      {currentPage === "View" ? <ViewInterface /> : <CreateInterface />}
    </div>
  );
};

export default InterfaceManagement;
