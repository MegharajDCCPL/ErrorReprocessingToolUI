import TableUtility from "../common/modified-datatable/TableUtility";
import { Button } from "react-bootstrap";
import data from "../../data/Data";

const Close = () => {
  const gridColumns = [
    { Header: "Record Date", accessor: "recordDate" },
    { Header: "Message Type", accessor: "messageType" },
    { Header: "Message ID", accessor: "messageId" },
    { Header: "Critical Element", accessor: "criticalElement" },
    { Header: "Error", accessor: "error" },
    { Header: "Error Code", accessor: "errorCode" },
    { Header: "Adapter Type", accessor: "adapterType" },
    { Header: "Response", accessor: "response" },
  ];

  return (
    <div className="">
      <TableUtility
        gridColumns={gridColumns}
        gridData={data}
        pageSizes={[5, 10, 20]}
      />
      <div className="d-flex justify-content-end gap-3 pt-2 ms-3 me-3 border-top border-subtle">
        <Button
          id="close-errors-btn"
          variant="outline-secondary"
          size="sm"
          onClick={""}
        >
          Open
        </Button>
        <Button
          id="close-errors-btn"
          variant="outline-primary"
          size="sm"
          onClick={""}
        >
          Archive
        </Button>
        <Button
          id="close-errors-btn"
          variant="outline-primary"
          size="sm"
          onClick={""}
        >
          Archive All
        </Button>
        <Button
          id="close-errors-btn"
          variant="outline-danger"
          size="sm"
          onClick={""}
        >
          Purge
        </Button>
        <Button
          id="close-errors-btn"
          variant="outline-danger"
          size="sm"
          onClick={""}
        >
          Purge All
        </Button>
      </div>
    </div>
  );
};

export default Close;
