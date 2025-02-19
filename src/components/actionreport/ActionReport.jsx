import { useState, useRef, useEffect } from "react";
import TableUtility from "../common/modified-datatable/TableUtility";
import EditableCell from "../common/modified-datatable/EditableCell";
import { Button, Form, OverlayTrigger, Tooltip } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DatePicker from "react-datepicker";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-datepicker/dist/react-datepicker.css";
import ApiMethods from "../../utils/ApiMethods";
import ERT_API_URLS from "../../utils/ERTConfig";
import ErrorLogger from "../common/ErrorLogger";
import { v4 as uuidv4 } from "uuid";
import { FaFilter, FaComment } from "react-icons/fa";
import { useUser } from "../common/UserProvider";
import CommentsModal from "../common/modified-datatable/CommentsModal";
import * as XLSX from "xlsx";

const ActionReport = () => {
  const options = { className: "toastify-font-sora" };
  const { setSelectedComponentName, userDetails } = useUser();
  useEffect(() => {
    setSelectedComponentName("actionreport");
  }, []);
  const [formData, setFormData] = useState({
    MessageId: "",
    ErrorCode: "",
    Error: "",
    MesObject: "",
    MesObjectValue: "",
    AdapterType: "",
    MessageType: "",
    AdapterName: "",
    OriginalMessageContent: "",
  });
  const [actionEnable, setActionEnable] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [isFilteredBtnClicked, setIsFilteredBtnClicked] = useState(false);
  const [initialFilteredData, setInitialFilteredData] = useState([]);
  const [uuid, setUuid] = useState(uuidv4());
  const [filteredData, setFilteredData] = useState([]);
  const [dataRangeDrop, setDataRangeDrop] = useState("1-10000");
  const [allDataCount, setAllDataCount] = useState("");
  const [loading, setLoading] = useState(false);
  const [ranges, setRanges] = useState([]);
  const [selectAllErrors, setSelectAllErrors] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [filteredDataApiRes, setFilteredDataApiRes] = useState({});
  let retryCount = 0;
  const typeaheadRef = useRef([]);
  const [interfaceTypeOptions, setInterfaceTypeOptions] = useState([
    { label: "Inbound" },
    { label: "Outbound" },
  ]);

  const [actions, setActions] = useState([]);
  const [selectedAction, setSelectedAction] = useState([]);
  const [commentsModalShow, setCommentsModalShow] = useState(false);
  const [currentComment, setCurrentComment] = useState("");
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);

  const handleShowComments = (comment, rowIndex) => {
    setCurrentComment(comment);
    setSelectedRowIndex(rowIndex);
    setCommentsModalShow(true);
  };

  const handleSaveComment = (newComment) => {
    if (selectedRowIndex !== null) {
      const updatedData = [...filteredData];
      updatedData[selectedRowIndex].comments = newComment;
      setFilteredData(updatedData);
    }
  };

  const handleDownloadExcel = () => {
    if (!filteredData || filteredData.length === 0) {
      toast.info("No data available to download", options);
      return;
    }
    const headers = gridColumns
      .filter(
        (column) => column.show !== false && column.accessor !== "isChecked"
      )
      .map((column) => column.Header);

    const rows = filteredData.map((row) => {
      return gridColumns
        .filter(
          (column) => column.show !== false && column.accessor !== "isChecked"
        )
        .map((column) => row[column.accessor]);
    });

    const ws = XLSX.utils.aoa_to_sheet([headers, ...rows]);

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Error Data");

    XLSX.writeFile(wb, "Error_Data.xlsx");
  };

  useEffect(() => {
    const fetchActions = async () => {
      try {
        //calling Get method
        await ApiMethods.handleApiGetAction(
          ERT_API_URLS.Actions_URL,
          "Records doesn't exist.",
          0,
          setLoading,
          setActions
        );
      } catch (error) {
        ErrorLogger(error);
      }
    };
    fetchActions();
  }, []);

  // Generate ranges based on all data count
  useEffect(() => {
    if (allDataCount !== "") {
      generateRanges(allDataCount);
    }
  }, [allDataCount]);

  // Handle data range change
  useEffect(() => {
    if (dataRangeDrop !== "") {
      const [start, end] = dataRangeDrop.split("-");
      const generateUrl = `${ERT_API_URLS.Action_Errors_URL}?ServerName=${userDetails.serverName}&startValue=${start}&endValue=${end}`;

      // If any filters are applied, modify the URL to include the filters
      if (isFilteredBtnClicked) {
        handleFilteredData(constructFilterURL(generateUrl));
      } else {
        handleFilteredData(generateUrl);
      }
    }
  }, [dataRangeDrop, isFilteredBtnClicked]);

  // Handle filtered data response
  useEffect(() => {
    if (initialFilteredData && Object.keys(initialFilteredData).length > 0) {
      const updatedData = initialFilteredData["openErrors"].map((row) => ({
        ...row,
        isChecked: false,
      }));
      setFilteredData(updatedData);
    }
  }, [initialFilteredData]);

  useEffect(() => {
    try {
      if (filteredDataApiRes && Object.keys(filteredDataApiRes).length > 0) {
        const updatedData = filteredDataApiRes["openErrors"].map((row) => ({
          ...row,
          isChecked: false,
        }));
        setFilteredData(updatedData);
      }
    } catch (error) {
      ErrorLogger(error);
    }
  }, [filteredDataApiRes]);

  // Handle filtered data count
  // useEffect(() => {
  //   if (dataRangeDrop !== "") {
  //     const [start, end] = dataRangeDrop.split("-");
  //     handleFilteredDataCount(start, end);
  //   }
  // }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDropdownChange = async (selected, fieldName) => {
    if (fieldName === "Action") {
      setActionEnable(true);
      setSelectedAction(selected[0]);
    }
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: selected.length > 0 ? selected[0].label : "",
    }));
  };

  const handleActionError = async () => {
    const selectedErrors = filteredData.filter((row) => row.isChecked);

    if (selectedErrors.length === 0) {
      toast.info("No errors selected for Action.", options);
      return;
    }

    const errorDetails = selectedErrors.map((row) => ({
      errorId: parseInt(row.errorId, 10),
      comment: row.comments,
      errorStatus: selectedAction,
    }));

    const payload = {
      serverName: userDetails.serverName,
      errorDetails: errorDetails,
    };

    try {
      await ApiMethods.handleApiPostAction(
        "",
        "",
        ERT_API_URLS.Change_Action_URL,
        ~"",
        "Error in taking Action",
        "",
        setLoading,
        handleRefreshPage,
        0, // Retry count
        payload,
        uuid,
        setUuid
      );
    } catch (error) {
      ErrorLogger(error);
    }
  };

  // Handle success after closing errors, fetch updated records
  const handleRefreshPage = async () => {
    setFilteredData([]);
    setSelectedAction([]);
    typeaheadRef.current.forEach((ref) => ref && ref.clear());
    setActionEnable(false);
    await handleFilteredData(
      constructFilterURL(
        `${ERT_API_URLS.Action_Errors_URL}?ServerName=${userDetails.serverName}`
      )
    );
  };

  const handleReset = async () => {
    // Reset form data
    setFormData({
      MessageId: "",
      ErrorCode: "",
      Error: "",
      MesObject: "",
      MesObjectValue: "",
      AdapterType: "",
      MessageType: "",
      AdapterName: "",
      OriginalMessageContent: "",
    });

    // Reset date filters
    setStartDate(null);
    setEndDate(null);

    // Clear any typeahead filters (assuming this is being used in your form)
    typeaheadRef.current.forEach((ref) => ref && ref.clear());

    // Reset any filtered data or ranges
    setFilteredData([]);
    setRanges([]);

    // Re-fetch the initial data (with no filters applied)
    const initialURL = `${ERT_API_URLS.Action_Errors_URL}?ServerName=${userDetails.serverName}`;
    await handleFilteredData(initialURL);

    // Optionally, reset pagination range if needed
    setDataRangeDrop("1-10000"); // Reset data range drop-down if applicable
  };
  // Construct filter URL with form data and date range
  const constructFilterURL = (url) => {
    let filterURL = url;
    Object.keys(formData).forEach((key) => {
      if (formData[key]) {
        filterURL += `&${key}=${formData[key]}`;
      }
    });

    if (startDate) {
      filterURL += `&StartDate=${formatDate(startDate)}`;
    }
    if (endDate) {
      filterURL += `&EndDate=${formatDate(endDate)}`;
    }

    return filterURL;
  };

  const handleCheckboxChange = (row) => {
    setFilteredData((prevData) => {
      const updatedData = prevData.map((dataRow) =>
        dataRow.errorId === row.errorId
          ? { ...dataRow, isChecked: !dataRow.isChecked }
          : dataRow
      );
      const allChecked = updatedData.every((dataRow) => dataRow.isChecked);
      setSelectAllErrors(allChecked);
      return updatedData;
    });
  };

  const handleSelectAllChange = () => {
    setSelectAllErrors(!selectAllErrors);
    setFilteredData((prevData) => {
      return prevData.map((dataRow) => ({
        ...dataRow,
        isChecked: !selectAllErrors,
      }));
    });
  };

  // Grid columns with checkboxes
  const gridColumns = [
    {
      Header: (
        <Form.Check
          custom="true"
          type="checkbox"
          id="selectAllCheckbox"
          checked={selectAllErrors}
          onChange={() => handleSelectAllChange()}
        />
      ),
      accessor: "isChecked",
      Cell: (props) => <EditableCell {...props} type="checkbox" />,
    },
    {
      Header: "Comments",
      accessor: "comments",
      Cell: ({ row }) => (
        <div className="d-flex justify-content-center align-items-center">
          <Button
            variant="outline-secondary"
            size="sm"
            className="d-flex align-items-center justify-content-center p-1 rounded-circle shadow-sm"
            onClick={() => handleShowComments(row.original.comments, row.index)}
            style={{ width: "30px", height: "30px" }}
          >
            <FaComment size={15} />
          </Button>
        </div>
      ),
    },
    { Header: "Error ID", accessor: "errorId", show: false },
    { Header: "Record Date", accessor: "recordDate" },
    { Header: "Message Type", accessor: "messageType" },
    { Header: "Message ID", accessor: "messageId" },
    { Header: "MES Object", accessor: "mesObject" },
    { Header: "MES Object Value", accessor: "mesObjectValue" },
    { Header: "Interface Type", accessor: "interfaceType" },
    { Header: "Error", accessor: "error" },
    { Header: "Error Code", accessor: "errorCode" },
    { Header: "Adapter Type", accessor: "adapterType" },
    { Header: "Response", accessor: "response" },
    { Header: "Original Message Content", accessor: "originalMessageContent" },
    { Header: "Request", accessor: "request" },
  ];

  const handleFilter = async () => {
    try {
      const isFormDataEmpty = Object.keys(formData).every(
        (key) => !formData[key]
      );

      const isDateRangeEmpty = startDate === null && endDate === null;

      if (isFormDataEmpty && isDateRangeEmpty) {
        toast.info("No data to filter", options);
        return;
      }
      let FilterURL = `${ERT_API_URLS.Action_Errors_URL}?ServerName=192.168.1.33`;

      // Append form data to URL
      Object.keys(formData).forEach((key) => {
        if (formData[key]) {
          FilterURL += `&${key}=${formData[key]}`;
        }
      });

      if (startDate !== null) {
        FilterURL += `&StartDate=${formatDate(startDate)}`;
      }
      if (endDate !== null) {
        FilterURL += `&EndDate=${formatDate(endDate)}`;
      }

      let apiResponse = await ApiMethods.handleApiGetAction(
        FilterURL,
        "Records doesn't exist.",
        retryCount,
        setLoading,
        setFilteredDataApiRes
      );
      if (apiResponse !== null) {
        setAllDataCount(apiResponse["totalRecords"]);
        setFilteredData(apiResponse["openErrors"]);
      } else {
        setAllDataCount("0");
        setFilteredData([]);
      }
    } catch (error) {
      ErrorLogger(error);
    }
  };

  // Handle filtered data based on URL
  // const handleFilteredData = async (url) => {
  //   try {
  //     const response = await ApiMethods.handleApiGetAction(
  //       url,
  //       "Records doesn't exist.",
  //       0,
  //       setLoading,
  //       setInitialFilteredData
  //     );
  //     setAllDataCount(response?.totalRecords || "0");
  //     console.log(response);
  //   } catch (error) {
  //     ErrorLogger(error);
  //   }
  // };

  const handleFilteredData = async (url) => {
    try {
      const response = await ApiMethods.handleApiGetAction(
        url,
        "Records doesn't exist.",
        0,
        setLoading,
        (apiResponse) => {
          setAllDataCount(apiResponse.totalRecords || "0");
          setFilteredData(apiResponse.openErrors || []);
        }
      );
    } catch (error) {
      ErrorLogger(error);
    }
  };

  // Handle filtered data count
  // const handleFilteredDataCount = async (startRow, endRow) => {
  //   try {
  //     const apiResponse = await ApiMethods.handleApiGetAction(
  //       `${ERT_API_URLS.Closed_Errors_URL}?ServerName=${userDetails.serverName}&startValue=${startRow}&endValue=${endRow}`,
  //       "Records doesn't exist.",
  //       0,
  //       setLoading,
  //       setAllDataCount
  //     );
  //     setAllDataCount(apiResponse?.totalRecords || "0");
  //   } catch (error) {
  //     ErrorLogger(error);
  //   }
  // };

  const formatDate = (date) => {
    const pad = (num, size) => {
      let s = "000" + num;
      return s.substring(s.length - size);
    };
    const yyyy = date.getFullYear();
    const MM = pad(date.getMonth() + 1, 2);
    const dd = pad(date.getDate(), 2);
    const HH = pad(date.getHours(), 2);
    const mm = pad(date.getMinutes(), 2);
    const ss = pad(date.getSeconds(), 2);
    const SSS = pad(date.getMilliseconds(), 3);

    return `${yyyy}-${MM}-${dd} ${HH}:${mm}:${ss}.${SSS}`;
  };

  const handleFilterRangeDrop = (event) => {
    try {
      if (event[0] !== undefined && event.length > 0) {
        setDataRangeDrop(event[0]);
      } else {
        setDataRangeDrop("");
      }
    } catch (error) {
      ErrorLogger(error);
    }
  };

  const generateRanges = (totalCount) => {
    const rangeSize = 10000;
    const numRanges = Math.ceil(totalCount / rangeSize);
    const newRanges = [];

    if (numRanges === 1) {
      newRanges.push("1-10000");
    } else {
      for (let i = 0; i < numRanges; i++) {
        const start = i * rangeSize + 1;
        const end = Math.min((i + 1) * rangeSize, totalCount);
        newRanges.push(`${start}-${end}`);
      }
    }
    setRanges(newRanges);
  };

  return (
    <div className="">
      <ToastContainer className="toastify-font-sora" />
      <div className="d-flex flex-row flex-wrap align-items-center mt-2 mb-4 gap-3">
        <div>
          <label className="module-header" style={{ fontSize: "18px" }}>
            Total Error Count : {allDataCount ? allDataCount : ""}
          </label>
        </div>
        <div className="d-flex align-items-center">
          <label className="me-2" style={{ marginTop: "0.375rem" }}>
            Filtered Data Range
          </label>

          <Typeahead
            id="instance-range-typeahead"
            className="me-2"
            style={{ width: "8.7rem" }}
            labelKey="name"
            options={ranges}
            defaultSelected={[{ name: "1-10000" }]}
            placeholder="Set range..."
            onChange={handleFilterRangeDrop}
            filterBy={() => true} // Disable filtering
            inputProps={{ readOnly: true }} // Make input field read-only
          />
        </div>

        <OverlayTrigger
          placement="right"
          overlay={<Tooltip id="filter-tooltip">Apply Filter</Tooltip>}
        >
          <Button
            variant="outline-primary"
            size="sm"
            onClick={() => setShowFilters(!showFilters)}
          >
            <FaFilter />
          </Button>
        </OverlayTrigger>
        <div className="d-flex align-items-center gap-2 ms-auto dropup">
          <label className="me-2">Actions</label>
          <Typeahead
            id="Actions"
            labelKey="label"
            ref={(ref) => (typeaheadRef.current[0] = ref)}
            options={actions}
            filterBy={() => true}
            inputProps={{ readOnly: true }}
            // selected={formData.Action ? [{ label: formData.Action }] : []}
            onChange={(selected) => handleDropdownChange(selected, "Action")}
            placeholder="Choose an Action..."
          />

          <Button
            id="close-errors-btn"
            variant="outline-secondary"
            size="sm"
            onClick={handleActionError}
            disabled={!actionEnable}
          >
            Action
          </Button>
        </div>
      </div>

      <div className="d-flex gap-3">
        {showFilters && (
          <div
            className="d-flex flex-column rounded border overflow-auto"
            style={{
              height: "76vh",
              width: "40rem",
            }}
          >
            <div className="flex-grow-1 overflow-auto">
              <Form>
                <div className="ms-2 mt-3 d-flex flex-wrap align-items-center gap-3 p-2">
                  <Form.Group controlId="MessageId">
                    <Form.Label>Message ID</Form.Label>
                    <Form.Control
                      type="text"
                      name="MessageId"
                      value={formData.MessageId}
                      onChange={handleInputChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="ErrorCode">
                    <Form.Label>Error Code</Form.Label>
                    <Form.Control
                      type="text"
                      name="ErrorCode"
                      value={formData.ErrorCode}
                      onChange={handleInputChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="Error">
                    <Form.Label>Error</Form.Label>
                    <Form.Control
                      type="text"
                      name="Error"
                      value={formData.Error}
                      onChange={handleInputChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="MesObject">
                    <Form.Label>Mes Object</Form.Label>
                    <Form.Control
                      type="text"
                      name="MesObject"
                      value={formData.MesObject}
                      onChange={handleInputChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="MesObjectValue">
                    <Form.Label>Mes Object Value</Form.Label>
                    <Form.Control
                      name="MesObjectValue"
                      type="text"
                      value={formData.MesObjectValue}
                      onChange={handleInputChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="AdapterType">
                    <Form.Label>Adapter Type</Form.Label>
                    <Form.Control
                      name="AdapterType"
                      type="text"
                      value={formData.AdapterType}
                      onChange={handleInputChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="AdapterName">
                    <Form.Label>Adapter Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="AdapterName"
                      value={formData.AdapterName}
                      onChange={handleInputChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="MessageType">
                    <Form.Label>Message Type</Form.Label>
                    <Form.Control
                      type="text"
                      name="MessageType"
                      value={formData.MessageType}
                      onChange={handleInputChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="InterfaceType">
                    <Form.Label>Interface Type</Form.Label>
                    <Typeahead
                      id="InterfaceType"
                      labelKey="label"
                      options={interfaceTypeOptions}
                      filterBy={() => true}
                      inputProps={{ readOnly: true }}
                      selected={
                        formData.InterfaceType
                          ? [{ label: formData.InterfaceType }]
                          : []
                      }
                      onChange={(selected) =>
                        handleDropdownChange(selected, "InterfaceType")
                      }
                      placeholder="Choose an Interface Type"
                    />
                  </Form.Group>

                  <Form.Group controlId="OriginalMessageContent">
                    <Form.Label>Original Message Content</Form.Label>
                    <Form.Control
                      type="text"
                      name="OriginalMessageContent"
                      value={formData.OriginalMessageContent}
                      onChange={handleInputChange}
                    />
                  </Form.Group>

                  <div>
                    <label className="me-2 mb-2" style={{ display: "grid" }}>
                      From Date
                    </label>
                    <DatePicker
                      id="fromDate"
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      className="form-control"
                      dateFormat="MM/dd/yyyy"
                      showMonthDropdown
                      showYearDropdown
                      dropdownMode="select"
                      placeholderText="Choose a date"
                      maxDate={endDate || new Date()}
                    />
                  </div>
                  <div>
                    <label className="me-2 mb-2" style={{ display: "grid" }}>
                      To Date
                    </label>
                    <DatePicker
                      id="toDate"
                      selected={endDate}
                      onChange={(date) => setEndDate(date)}
                      className="form-control"
                      dateFormat="MM/dd/yyyy"
                      showMonthDropdown
                      showYearDropdown
                      dropdownMode="select"
                      placeholderText="Choose a date"
                      minDate={startDate}
                      maxDate={new Date()}
                    />
                  </div>
                </div>
              </Form>
            </div>
            <div className="d-flex justify-content-end gap-3 me-3 mb-2  position-sticky bottom-0 p-2">
              <Button
                variant="outline-secondary"
                size="sm"
                id="reset-btn"
                className="ms-2 mt-4"
                style={{ width: "7rem" }}
                onClick={handleReset}
              >
                Reset
              </Button>
              <Button
                variant="outline-primary"
                size="sm"
                className="mt-4"
                style={{ width: "7rem" }}
                onClick={async () => await handleFilter()}
              >
                Apply
              </Button>
            </div>
          </div>
        )}

        {/* Table Utility */}
        <div style={{ height: "76vh", overflowX: "auto" }}>
          <TableUtility
            gridColumns={gridColumns.filter((column) => column.show !== false)}
            gridData={filteredData}
            setData={setFilteredData}
            pageSizes={[5, 10, 20]}
            customMethod={handleCheckboxChange}
          />
          <CommentsModal
            show={commentsModalShow}
            handleClose={() => setCommentsModalShow(false)}
            initialComment={currentComment}
            onSave={handleSaveComment}
          />
        </div>
      </div>
      <div className="d-flex justify-content-end mt-2 gap-3 pt-2 ms-3 me-4 border-top border-subtle">
        <Button
          id="download-excel-btn"
          variant="outline-primary"
          size="sm"
          onClick={handleDownloadExcel}
        >
          Download Excel
        </Button>
      </div>
    </div>
  );
};

export default ActionReport;
