import TableUtility from "../common/modified-datatable/TableUtility";
import { Button } from "react-bootstrap";

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

  const gridData = [
    {
      recordDate: "9-20-2024 11:36:19 AM",
      messageType: "irproductmsgtype",
      messageId: "008d0486-bajg84-43da-91e2-e9cac82479dd",
      criticalElement: "ert-jjj33",
      error: "Product Type 'product-test-33' not found",
      errorCode: "13500616",
      adapterType: "Web API",
      response: "Error: Product Type 'product-test-33' not found",
    },
    {
      recordDate: "9-21-2024 10:00:45 AM",
      messageType: "irproductmsgtype",
      messageId: "a9bdf20f-e9c5-46b1-9dbb-37fce4b93b94",
      criticalElement: "ert-3ik4",
      error: "Product Type 'product-test-34' not found",
      errorCode: "13500617",
      adapterType: "Web API",
      response: "Error: Product Type 'product-test-34' not found",
    },
    {
      recordDate: "9-22-2024 09:30:22 AM",
      messageType: "irproductmsgtype",
      messageId: "9c453698i1a-bf67-40d1-972b-5973a19f1b94",
      criticalElement: "ert-0035",
      error: "Product Type 'product-test-35' not found",
      errorCode: "13500618",
      adapterType: "Web API",
      response: "Error: Product Type 'product-test-35' not found",
    },
    {
      recordDate: "9-23-2024 12:15:34 PM",
      messageType: "irproductmsgtype",
      messageId: "20fdc491-8f39-4cd0-b6d0-bbfdd3be731b",
      criticalElement: "ert-036",
      error: "Product Type 'product-test-36' not found",
      errorCode: "13500619",
      adapterType: "Web API",
      response: "Error: Product Type 'product-test-36' not found",
    },
    {
      recordDate: "9-24-2024 03:45:00 PM",
      messageType: "irproductmsgtype",
      messageId: "745b5f2derr-60d9-4e1e-b5bc-827ef84b7a1e",
      criticalElement: "ert-370",
      error: "Product Type 'product-test-37' not found",
      errorCode: "13500620",
      adapterType: "Web API",
      response: "Error: Product Type 'product-test-37' not found",
    },
  ];

  return (
    <div className="">
      <TableUtility
        gridColumns={gridColumns}
        gridData={gridData}
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
