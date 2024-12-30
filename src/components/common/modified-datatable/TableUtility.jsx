import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
  useRowSelect,
} from "react-table";
import styles from "./TableUtility.module.css";
import { useState, useEffect, useMemo } from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import RowModal from "./RowModal";
import XMLModal from "./XMLModal"; // Add the new XMLModal import

const TableUtility = (props) => {
  const [modalShow, setModalShow] = useState(false);
  const [xmlModalShow, setXmlModalShow] = useState(false); // State for the XML modal
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [xmlData, setXmlData] = useState(""); // State for storing XML data
  const columns = useMemo(() => props.gridColumns, [props.gridColumns]);
  const data = useMemo(() => props.gridData, [props.gridData]);
  const [skipPageReset, setSkipPageReset] = useState(false);
  const defaultPageSize = 10;

  const handleRowDoubleClick = (row) => {
    setSelectedRowData(row.original);
    setModalShow(true);
  };

  const handleGotoPage = (e) => {
    const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0;
    gotoPage(pageNumber);
  };

  const updateData = (rowIndex, columnId, value) => {
    setSkipPageReset(true);

    props.setData((old) =>
      old.map((row, index) => {
        if (index === rowIndex) {
          const updatedRow = {
            ...old[rowIndex],
            [columnId]: value,
          };

          if (props.customMethod !== undefined)
            props.customMethod(updatedRow, columnId);

          return updatedRow;
        }
        return row;
      })
    );
  };

  useEffect(() => {
    setSkipPageReset(false);
  }, [data]);

  // Custom global filter logic for wildcard search
  const globalFilterFunction = (rows, columnIds, filterValue) => {
    if (!filterValue) return rows;
    // Trim leading and trailing spaces from the filterValue
    const trimmedFilterValue = filterValue.trim();
    // Replace % and _ with regex equivalents and escape other special characters
    const regex = new RegExp(
      trimmedFilterValue
        .replace(/[-\/\\^$+?.()|[\]{}]/g, "\\$&") // Escape special characters
        .replace(/%/g, ".*") // Replace % with .*
        .replace(/_/g, "."), // Replace _ with .
      "i"
    ); // "i" flag for case-insensitive matching

    return rows.filter((row) =>
      columnIds.some((columnId) => regex.test(String(row.values[columnId])))
    );
  };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow,
    state, // Destructure state from useTable
    setGlobalFilter, // Destructure setGlobalFilter from useGlobalFilter
    selectedFlatRows, // give selected array [objects when check box checked]
  } = useTable(
    {
      columns, // your column definitions
      data, // your row data
      initialState: { pageIndex: 0, pageSize: defaultPageSize }, // to set initial page
      autoResetPage: !skipPageReset,
      autoResetGlobalFilter: false,
      updateData,
      globalFilter: globalFilterFunction, // Use the custom global filter
    },
    useGlobalFilter, // Enable global filtering
    useSortBy, // Enable sorting
    usePagination, // enable pagination
    useRowSelect // adding row select
  );

  const { globalFilter, pageIndex, pageSize } = state;

  // Function to handle XML click (Show More)
  const handleShowXML = (xmlContent) => {
    setXmlData(xmlContent); // Set the XML content for the modal
    setXmlModalShow(true); // Show the XML modal
  };

  return (
    <>
      <div
        id="record-search-bar"
        className="d-flex justify-content-between align-items-center flex-wrap"
      >
        <div id="record-filter" className="pt-2 d-flex align-items-center">
          <Form.Label className="mt-2 me-2">Show</Form.Label>
          <Form.Select
            id="grid-record-filter"
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {props.pageSizes.map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </Form.Select>
          <Form.Label className="mt-2 ms-2">entries</Form.Label>
        </div>
        <div
          id="search-filter"
          className="pt-2 d-flex align-items-center justify-content-end"
        >
          <Form.Label className="mt-2 me-2">Search</Form.Label>
          <Form.Control
            className="me-1 w-50"
            id="txt-search-filter"
            type="text"
            name="search"
            value={globalFilter || ""}
            onChange={(e) => {
              setGlobalFilter(e.target.value);
            }}
          />
        </div>
      </div>
      <div className={styles["table-container"]}>
        <div className={styles["tab-body"]}>
          <table id="react-table" {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => {
                const { key, ...restHeaderGroupProps } =
                  headerGroup.getHeaderGroupProps();
                return (
                  <tr key={key} {...restHeaderGroupProps}>
                    {headerGroup.headers.map((column) => {
                      const { key, ...restColumn } = column.getHeaderProps(
                        column.getSortByToggleProps()
                      );
                      return (
                        <th key={key} {...restColumn}>
                          <div>
                            {column.render("Header")}
                            <span>
                              {column.isSorted
                                ? column.isSortedDesc
                                  ? " 🔽"
                                  : " 🔼"
                                : ""}
                            </span>
                          </div>
                        </th>
                      );
                    })}
                  </tr>
                );
              })}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row, i) => {
                prepareRow(row);
                const { key, ...restRowProps } = row.getRowProps();
                return (
                  <tr
                    key={key}
                    {...restRowProps}
                    onDoubleClick={() => handleRowDoubleClick(row)}
                  >
                    {row.cells.map((cell, index) => {
                      const { key, ...restCellProps } = cell.getCellProps();
                      // Check if the cell value contains XML
                      const cellValue = cell.value;
                      const isXML =
                        typeof cellValue === "string" &&
                        cellValue.startsWith("<") &&
                        cellValue.endsWith(">");
                      const rowError = cell.column.Header === "Error";

                      return (
                        <td
                          key={key}
                          {...restCellProps}
                          style={
                            isXML || rowError
                              ? {
                                  maxWidth: "200px",
                                  whiteSpace: "nowrap",
                                  overflow: "hidden",
                                }
                              : {}
                          }
                        >
                          {isXML ? (
                            <>
                              <div style={{ flex: 1, marginRight: "10px" }}>
                                {cellValue.slice(0, 100)}...
                              </div>
                              <Button
                                variant="link"
                                onClick={() => handleShowXML(cellValue)}
                                style={{ padding: "0", fontSize: "12px" }}
                              >
                                Show More
                              </Button>
                            </>
                          ) : (
                            cell.render("Cell")
                          )}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div
          id="pagination"
          className="d-flex flex-wrap justify-content-center align-items-center gap-3 mt-3"
        >
          <span>
            Page {pageIndex + 1} of {pageOptions.length}
          </span>
          <span className="d-flex align-items-center">
            <Form.Label className="mt-2 me-2">Go to page:</Form.Label>
            <Form.Control
              className={styles["go-to-page"]}
              id="go-to-page"
              type="number"
              min="1"
              defaultValue={pageIndex + 1}
              onChange={handleGotoPage}
            />
          </span>
          <span className="d-flex justify-content-center align-items-center gap-2">
            <Button
              id="btn-back"
              className={
                canPreviousPage === false
                  ? `${styles["paginationBtn-disabled"]}`
                  : null
              }
              onClick={() => gotoPage(0)}
              disabled={!canPreviousPage}
              size="sm"
            >
              {"<<"}
            </Button>
            <Button
              id="btn-previousPage"
              className={
                canPreviousPage === false
                  ? `${styles["paginationBtn-disabled"]}`
                  : null
              }
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
              size="sm"
            >
              {"<"}
            </Button>
            <Button
              id="btn-nextPage"
              className={
                canNextPage === false
                  ? `${styles["paginationBtn-disabled"]}`
                  : null
              }
              onClick={() => nextPage()}
              disabled={!canNextPage}
              size="sm"
            >
              {">"}
            </Button>
            <Button
              id="btn-next"
              className={
                canNextPage === false
                  ? `${styles["paginationBtn-disabled"]}`
                  : null
              }
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
              size="sm"
            >
              {">>"}
            </Button>
          </span>
        </div>
      </div>
      <RowModal
        show={modalShow}
        handleClose={() => setModalShow(false)}
        rowData={selectedRowData}
      />
      <XMLModal
        show={xmlModalShow}
        handleClose={() => setXmlModalShow(false)}
        xmlData={xmlData}
      />
    </>
  );
};

export default TableUtility;
