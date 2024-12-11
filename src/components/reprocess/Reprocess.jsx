import { useState, useRef, useEffect } from "react";
import TableUtility from "../common/modified-datatable/TableUtility";
import { Button, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-datepicker/dist/react-datepicker.css";
import ApiMethods from "../../utils/ApiMethods";
import ERT_API_URLS from "../../utils/ERTConfig";
import ErrorLogger from "../common/ErrorLogger";
import data from "../../data/Data";

const Reprocess = () => {
  const [formData, setFormData] = useState({
    ErrorCode: "",
    Error: "",
    CriticalElementName: "",
    AdapterType: "",
    MessageType: "",
    MessageId: "",
    AdapterName: "",
    OriginalMessageContent: "",
  });
  const [showFilters, setShowFilters] = useState(false);
  const [isFilteredBtnClicked, setIsFilteredBtnClicked] = useState(false);
  const [initialfilteredDataApiRes, setInitialFilteredDataApiRes] = useState(
    {}
  );
  const [filteredDataApiRes, setFilteredDataApiRes] = useState({});
  const [filteredData, setFilteredData] = useState([]);
  const [dataRangeDrop, setDataRangeDrop] = useState("1-10000");
  const [allDataCount, setAllDataCount] = useState("");
  const [allDataCountApiRes, setAllDataCountApiRes] = useState([]);
  const [ranges, setRanges] = useState([]);
  const [loading, setLoading] = useState(false);
  let retryCount = 0;
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const typeaheadRef = useRef([]);

  useEffect(() => {
    try {
      if (allDataCount !== "") {
        generateRanges(allDataCount);
      }
    } catch (error) {
      ErrorLogger(error);
    }
  }, [allDataCount]);

  useEffect(() => {
    try {
      if (dataRangeDrop !== "") {
        const [start, end] = dataRangeDrop.split("-");
        let generateUrl = `${ERT_API_URLS.Reprocess_URL}startValue=${start}&endValue=${end}`;
        if (isFilteredBtnClicked) {
          let FilterURL = `${ERT_API_URLS.AuditTrail_URL}`;
          if (formData.Error !== "") {
            FilterURL += `&Error=${formData.Error}`;
          }
          if (formData.CriticalElementName) {
            FilterURL += `&MESObjectValue=${formData.CriticalElementName}`;
          }
          if (formData.ErrorCode) {
            FilterURL += `&ErrorCode=${formData.ErrorCode}`;
          }
          if (formData.AdapterType) {
            FilterURL += `&AdapterType=${formData.AdapterType}`;
          }
          if (formData.MessageType) {
            FilterURL += `&MessageType=${formData.MessageType}`;
          }
          if (formData.MessageId) {
            FilterURL += `&MessageId=${formData.MessageId}`;
          }
          if (formData.AdapterName) {
            FilterURL += `&Request=${formData.AdapterName}`;
          }
          if (formData.OriginalMessageContent) {
            FilterURL += `&OriginalMessageContent=${formData.OriginalMessageContent}`;
          }
          if (fromDate !== undefined && fromDate !== null) {
            FilterURL += `&fromDate=${formatDate(fromDate)}`;
          }

          if (toDate !== undefined && toDate !== null) {
            FilterURL += `&toDate=${formatDate(toDate)}`;
          }
        }
        handleFilteredData(generateUrl);
      }
    } catch (error) {
      ErrorLogger(error);
    }
  }, [dataRangeDrop]);

  useEffect(() => {
    try {
      if (
        initialfilteredDataApiRes &&
        Object.keys(initialfilteredDataApiRes).length > 0
      ) {
        setFilteredData(initialfilteredDataApiRes["auditTrails"]);
      }
    } catch (error) {
      ErrorLogger(error);
    }
  }, [initialfilteredDataApiRes]);

  useEffect(() => {
    try {
      if (filteredDataApiRes && Object.keys(filteredDataApiRes).length > 0) {
        setFilteredData(filteredDataApiRes["auditTrails"]);
      }
    } catch (error) {
      ErrorLogger(error);
    }
  }, [filteredDataApiRes]);

  useEffect(() => {
    try {
      if (dataRangeDrop !== "") {
        const [start, end] = dataRangeDrop.split("-");
        handleFilteredDataCount(start, end);
      }
    } catch (error) {
      ErrorLogger(error);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleReset = () => {
    setFilteredData([]);
    setRanges([]); //clearing range value
    setAllDataCount("0");
    setFormData({
      ErrorCode: "",
      Error: "",
      CriticalElementName: "",
      AdapterType: "",
      MessageType: "",
      MessageId: "",
      AdapterName: "",
      OriginalMessageContent: "",
    });
    typeaheadRef.current.forEach((ref) => {
      if (ref) {
        ref.clear();
      }
    });
    setFromDate(null);
    setToDate(null);
  };

  const [selectedMessages, setSelectedMessages] = useState([]);

  const handleCheckboxChange = (messageId) => {
    setSelectedMessages((prevSelected) => {
      if (prevSelected.includes(messageId)) {
        // If the message ID is already selected, uncheck it
        return prevSelected.filter((id) => id !== messageId);
      } else {
        // Otherwise, add it to the selected list
        return [...prevSelected, messageId];
      }
    });
  };

  const handleSelectAllChange = (e) => {
    if (e.target.checked) {
      setSelectedMessages(data.map((row) => row.messageId));
    } else {
      setSelectedMessages([]);
    }
  };

  // Check if all individual checkboxes are selected
  const isAllSelected =
    data.length > 0 && selectedMessages.length === data.length;

  // Grid columns with checkboxes
  const gridColumns = [
    {
      Header: (
        <Form.Check
          custom="true"
          type="checkbox"
          id="selectAllCheckbox"
          checked={isAllSelected}
          onChange={handleSelectAllChange}
        />
      ),
      accessor: "Select",
      Cell: ({ row }) => (
        <Form.Check
          custom="true"
          type="checkbox"
          id={`checkbox-${row.original.messageId}`}
          checked={selectedMessages.includes(row.original.messageId)}
          onChange={() => handleCheckboxChange(row.original.messageId)}
        />
      ),
    },
    { Header: "Record Date", accessor: "recordDate" },
    { Header: "Message Type", accessor: "messageType" },
    { Header: "Message ID", accessor: "messageId" },
    { Header: "Critical Element", accessor: "criticalElement" },
    { Header: "Error", accessor: "error" },
    { Header: "Error Code", accessor: "errorCode" },
    { Header: "Adapter Type", accessor: "adapterType" },
    { Header: "Response", accessor: "response" },
  ];

  const handleSubmit = async () => {
    // Handle form submission
    console.log(selectedMessages);
  };

  const handleFilter = async () => {
    try {
      // setRanges([]); //clearing range value
      setIsFilteredBtnClicked(true);
      // setFilteredData([]);
      // const [start, end] = dataRangeDrop.split("-");

      let FilterURL = `${ERT_API_URLS.Reprocess_URL}`;
      if (formData.Error !== "") {
        FilterURL += `&Error=${formData.Error}`;
      }
      if (formData.CriticalElementName) {
        FilterURL += `&MESObjectValue=${formData.CriticalElementName}`;
      }
      if (formData.ErrorCode) {
        FilterURL += `&ErrorCode=${formData.ErrorCode}`;
      }
      if (formData.AdapterType) {
        FilterURL += `&AdapterType=${formData.AdapterType}`;
      }
      if (formData.MessageType) {
        FilterURL += `&MessageType=${formData.MessageType}`;
      }
      if (formData.MessageId) {
        FilterURL += `&MessageId=${formData.MessageId}`;
      }
      if (formData.AdapterName) {
        FilterURL += `&Request=${formData.AdapterName}`;
      }
      if (formData.OriginalMessageContent) {
        FilterURL += `&OriginalMessageContent=${formData.OriginalMessageContent}`;
      }
      if (fromDate !== undefined && fromDate !== null) {
        FilterURL += `&fromDate=${formatDate(fromDate)}`;
      }

      if (toDate !== undefined && toDate !== null) {
        FilterURL += `&toDate=${formatDate(toDate)}`;
      }

      // if (selectedUserDrop && Object.keys(selectedUserDrop).length > 0) {
      //   auditTrailUrl += `&EmployeeName=${selectedUserDrop.userName}`;
      // }

      //calling Get method
      const apiResponse = await ApiMethods.handleApiGetAction(
        FilterURL,
        "Records doesn't exist.",
        retryCount,
        setLoading,
        setFilteredDataApiRes,
        "Error in fetching filtered data."
      );

      // if (apiResponse !== null) {
      //   setAllDataCount(apiResponse["totalRecords"]);
      // } else {
      //   setAllDataCount("0");
      // }
    } catch (error) {
      ErrorLogger(error);
    }
  };

  const handleFilteredData = async (url) => {
    //calling Get method
    await ApiMethods.handleApiGetAction(
      url,
      "Records doesn't exist.",
      retryCount,
      setLoading,
      setInitialFilteredDataApiRes,
      "Error in fetching filtered data."
    );
  };

  const handleFilteredDataCount = async (startRow, endRow) => {
    //calling Get method
    const apiResponse = await ApiMethods.handleApiGetAction(
      `${ERT_API_URLS.Reprocess_URL}startValue=${startRow}&endValue=${endRow}`,
      "Records doesn't exist.",
      retryCount,
      setLoading,
      setAllDataCountApiRes,
      "Error in fetching filtered data count."
    );

    if (apiResponse !== null) {
      setAllDataCount(apiResponse["totalRecords"]);
    } else {
      setAllDataCount("0");
    }
  };

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

  const handleDropdownChange = async (selected) => {
    console.log("selected", selected[0].label);
    setFormData((prevData) => ({
      ...prevData,
    }));
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
      <div className="d-flex flex-wrap mt-4 mb-4 align-items-center gap-3">
        <div>
          <label className="module-header" style={{ fontSize: "18px" }}>
            Total Un-Processed Error (Error Count :
            {/* {allDataCount
            ? allDataCount
            : ""} */}
            )
          </label>
        </div>
        <div className="d-flex flex-row">
          <label style={{ marginTop: "0.375rem" }}>Filtered Data Range</label>

          <Typeahead
            id="instance-range-typeahead"
            className="ms-2"
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
        <Button
          variant="outline-primary"
          size="sm"
          style={{ width: "7rem" }}
          onClick={() => setShowFilters((prev) => !prev)}
        >
          {showFilters ? "Hide Filters" : "Show Filters"}
        </Button>
      </div>
      {showFilters && (
        <Form className="rounded  border">
          <div className="ms-2 mt-3 d-flex flex-wrap align-items-center gap-3 p-2 ">
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
                className="form-control"
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

            <Form.Group controlId="CriticalElement">
              <Form.Label>Critical Element</Form.Label>
              <Typeahead
                id="CriticalElement"
                labelKey="label"
                ref={(ref) => (typeaheadRef.current[0] = ref)}
                options={[
                  { label: "CriticalElement 1" },
                  { label: "CriticalElement 2" },
                  { label: "CriticalElement 3" },
                  { label: "CriticalElement 4" },
                  { label: "CriticalElement 5" },
                ]}
                filterBy={() => true}
                inputProps={{ readOnly: true }}
                placeholder="Choose an CriticalElement..."
                onChange={(selected) => handleDropdownChange(selected)}
              />
            </Form.Group>

            <Form.Group controlId="CriticalElementName">
              <Form.Label>Critical Element Name</Form.Label>
              <Form.Control
                type="text"
                name="CriticalElementName"
                value={formData.CriticalElementName}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="AdapterType">
              <Form.Label>Adapter Type</Form.Label>
              <Form.Control
                type="text"
                name="AdapterType"
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
                ref={(ref) => (typeaheadRef.current[1] = ref)}
                options={[
                  { label: "Interface Type 1" },
                  { label: "Interface Type 2" },
                  { label: "Interface Type 3" },
                  { label: "Interface Type 4" },
                  { label: "Interface Type 5" },
                ]}
                filterBy={() => true}
                inputProps={{ readOnly: true }}
                placeholder="Choose an Interface Type..."
                onChange={(selected) => console.log("Dropdown", selected)}
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
                ref={(ref) => (typeaheadRef.current[3] = ref)}
                selected={fromDate}
                onChange={(date) => setFromDate(date)}
                className="form-control"
                dateFormat="MM/dd/yyyy"
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                placeholderText="Choose a date"
                maxDate={toDate || new Date()} // Disable dates after toDate or future dates
              />
            </div>
            <div>
              <label className="me-2 mb-2" style={{ display: "grid" }}>
                To Date
              </label>
              <DatePicker
                id="toDate"
                ref={(ref) => (typeaheadRef.current[4] = ref)}
                selected={toDate}
                onChange={(date) => setToDate(date)}
                className="form-control"
                dateFormat="MM/dd/yyyy"
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                placeholderText="Choose a date"
                minDate={fromDate} // Disable dates before fromDate
                maxDate={new Date()} // Disable future dates
              />
            </div>
          </div>
          <div className="d-flex justify-content-end gap-3 me-3 mb-2">
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
              Filter
            </Button>
          </div>
        </Form>
      )}

      {/* Table Component */}
      <TableUtility
        gridColumns={gridColumns}
        gridData={data}
        pageSizes={[5, 10, 20]}
        customMethod={handleCheckboxChange}
      />

      {/* Action Buttons */}
      <div className="d-flex justify-content-end gap-3 pt-2 ms-3 me-3 border-top border-subtle">
        <Button
          id="close-errors-btn"
          variant="outline-danger"
          size="sm"
          onClick={""}
        >
          Close Error
        </Button>
        <Button
          id="reprocess-errors-btn"
          variant="outline-primary"
          size="sm"
          type="submit"
          onClick={async () => await handleSubmit()}
        >
          Reprocess
        </Button>
      </div>
    </div>
  );
};

export default Reprocess;
