const data = [
  {
    recordDate: "9/12/2023 11:42:03 AM",
    messageType: "irproductmsgtype",
    messageId: "0d0ffaf7-ce61-48e2-b441-96ea496d3aec",
    criticalElement: "12092023",
    criticalElementName: "Product",
    interfaceType: "Inbound",
    adapterType: "Web API",
    adapterName: "irproducttype",
    requestType: "POST",
    request:
      '<__InSite __version="1.1" __encryption="2"><__service __serviceType="ProductMaint"><__utcOffset>05:30</__utcOffset><__inputData><Syncname>12092023</Syncname><SyncRevision>1</SyncRevision></__inputData><__perform><__eventName>Sync</__eventName></__perform><__inputData><ObjectChanges><isUOMConversion __listAction="replace"><__listItem __listItemAction="add"><FromUOM><__name>1209</__name></FromUOM><ToUOM><__name>LR</__name></ToUOM><ConversionFactor>500</ConversionFactor></__listItem></isUOMConversion><Name>12092023</Name><Description>Test</Description><ProductType><__name>3000</__name></ProductType><Revision>1</Revision><StdStartFactory><__name /></StdStartFactory><StdStartUOM><__name>1209</__name></StdStartUOM></ObjectChanges></__inputData><__execute /><__requestData><CompletionMsg /><DataVersion /><ObjectToChange /></__requestData></__service></__InSite>',
    logType: "Error",
    originalMessageContent:
      '<ZMMDAYT1><IDOC BEGIN="1"><Z1MMDAY SEGMENT="1"><MATNR>12092023</MATNR><MAKTX>Test</MAKTX><BKLAS>3000</BKLAS><MEINS>1209</MEINS><WERKS>Factory</WERKS><E1MARMM SEGMENT="1"><MEINH>LR</MEINH><UMREZ>500</UMREZ><UMREN>1</UMREN></E1MARMM></Z1MMDAY></IDOC></ZMMDAYT1>',
    errorCode: "13500616",
    error: 'UOM "1209" not found',
    response:
      '<__InSite __encryption="2" __version="1.1"><__service __serviceType="ProductMaint"><__utcOffset>05:30</__utcOffset><__responseData><__exceptionData><__failureContext>__InSite.__service.__inputData.ObjectChanges.isUOMConversion.__listItem.FromUOM</__failureContext><__errorCode>13500616</__errorCode><__errorDescription>UOM "1209" not found</__errorDescription><__errorSource>File x:\\_build\\4\\s\\sources\\server\\cdo_client\\source\\csiobjectrefimpl.cpp Line 202</__errorSource><__errorSystemMessage>Unspecified error</__errorSystemMessage><__fieldName /><__severity>206</__severity><__exceptionParameters><CDOTypeName>UOM</CDOTypeName><Name>1209</Name></__exceptionParameters></__exceptionData></__responseData></__service></__InSite>',
    adapterEndPoint:
      "http://192.168.1.83:4401/irproductapi/messages?type=irproductmsgtype",
    reprocessAdapterType: "WebAPI",
    reprocessAdapterAddress:
      "http://192.168.1.83:4401/irproductapi/messages?type=irproductmsgtype",
    reprocessStatus: 0,
    reprocessBy: null,
    reprocessDate: null,
    errorXML:
      '<ErrorLog><RecordDate>9/12/2023 11:42:03 AM</RecordDate><MessageType>irproductmsgtype</MessageType><MessageID>0d0ffaf7-ce61-48e2-b441-96ea496d3aec</MessageID><FileName>irproductmsgtype09122023114203_error</FileName><CriticalElement>12092023</CriticalElement><CriticalElementName>Product</CriticalElementName><InterfaceType>Inbound</InterfaceType><AdapterType>Web API</AdapterType><AdapterName>irproducttype</AdapterName><AdapterEndPoint>http://192.168.1.83:4401/irproductapi/messages?type=irproductmsgtype</AdapterEndPoint><FilePath>D:\\IRtest\\ErrorResponse</FilePath><RequestType>POST</RequestType><Request><__InSite __version="1.1" __encryption="2"><__service __serviceType="ProductMaint"><__utcOffset>05:30</__utcOffset><__inputData><Syncname>12092023</Syncname><SyncRevision>1</SyncRevision></__inputData><__perform><__eventName>Sync</__eventName></__perform><__inputData><ObjectChanges><isUOMConversion __listAction="replace"><__listItem __listItemAction="add"><FromUOM><__name>1209</__name></FromUOM><ToUOM><__name>LR</__name></ToUOM><ConversionFactor>500</ConversionFactor></__listItem></isUOMConversion><Name>12092023</Name><Description>Test</Description><ProductType><__name>3000</__name></ProductType><Revision>1</Revision><StdStartFactory><__name /></StdStartFactory><StdStartUOM><__name>1209</__name></StdStartUOM></ObjectChanges></__inputData><__execute /><__requestData><CompletionMsg /><DataVersion /><ObjectToChange /></__requestData></__service></__InSite></Request><LogType>Error</LogType><OriginalMessageContent><ZMMDAYT1><IDOC BEGIN="1"><Z1MMDAY SEGMENT="1"><MATNR>12092023</MATNR><MAKTX>Test</MAKTX><BKLAS>3000</BKLAS><MEINS>1209</MEINS><WERKS>Factory</WERKS><E1MARMM SEGMENT="1"><MEINH>LR</MEINH><UMREZ>500</UMREZ><UMREN>1</UMREN></E1MARMM></Z1MMDAY></IDOC></ZMMDAYT1></OriginalMessageContent><ErrorCode>13500616</ErrorCode><Error>UOM "1209" not found</Error><ReprocessAdapterType>WebAPI</ReprocessAdapterType><ReprocessAdapterAddress>http://192.168.1.83:4401/irproductapi/messages?type=irproductmsgtype</ReprocessAdapterAddress><Response><__InSite __encryption="2" __version="1.1"><__service __serviceType="ProductMaint"><__utcOffset>05:30</__utcOffset><__responseData><__exceptionData><__failureContext>__InSite.__service.__inputData.ObjectChanges.isUOMConversion.__listItem.FromUOM</__failureContext><__errorCode>13500616</__errorCode><__errorDescription>UOM "1209" not found</__errorDescription><__errorSource>File x:\\_build\\4\\s\\sources\\server\\cdo_client\\source\\csiobjectrefimpl.cpp Line 202</__errorSource><__errorSystemMessage>Unspecified error</__errorSystemMessage><__fieldName /><__severity>206</__severity><__exceptionParameters><CDOTypeName>UOM</CDOTypeName><Name>1209</Name></__exceptionParameters></__exceptionData></__responseData></__service></__InSite></Response></ErrorLog>',
    emailSent: 0,
    manuallyUnarchived: 0,
  },
  {
    recordDate: "9/13/2023 02:45:56 PM",
    messageType: "irproductmsgtype",
    messageId: "f7a9bd58-20f3-4676-88d6-1a17ef5ac4d7",
    criticalElement: "12132023",
    criticalElementName: "Product",
    interfaceType: "Outbound",
    adapterType: "REST API",
    adapterName: "productadapter",
    requestType: "GET",
    request:
      '<__InSite __version="1.2"><__service __serviceType="ProductFetch"><__utcOffset>05:30</__utcOffset><__inputData><Syncname>12132023</Syncname><SyncRevision>2</SyncRevision></__inputData></__service></__InSite>',
    logType: "Error",
    originalMessageContent:
      '<PRODUCT><IDOC BEGIN="1"><Z1PRODUCT SEGMENT="1"><MATNR>12132023</MATNR><MAKTX>New Product</MAKTX></Z1PRODUCT></IDOC></PRODUCT>',
    errorCode: "13500617",
    error: "Product ID '12132023' not found",
    response:
      '<__InSite __version="1.1"><__service __serviceType="ProductFetch"><__errorCode>13500617</__errorCode><__errorDescription>Product ID \'12132023\' not found</__errorDescription></__service></__InSite>',
    adapterEndPoint:
      "http://192.168.1.85:5000/productapi/messages?type=irproductmsgtype",
    reprocessAdapterType: "RESTAPI",
    reprocessAdapterAddress:
      "http://192.168.1.85:5000/productapi/messages?type=irproductmsgtype",
    reprocessStatus: 0,
    reprocessBy: null,
    reprocessDate: null,
    errorXML:
      '<ErrorLog><RecordDate>9/13/2023 02:45:56 PM</RecordDate><MessageType>irproductmsgtype</MessageType><MessageID>f7a9bd58-20f3-4676-88d6-1a17ef5ac4d7</MessageID><CriticalElement>12132023</CriticalElement><CriticalElementName>Product</CriticalElementName><InterfaceType>Outbound</InterfaceType><AdapterType>REST API</AdapterType><AdapterName>productadapter</AdapterName><AdapterEndPoint>http://192.168.1.85:5000/productapi/messages?type=irproductmsgtype</AdapterEndPoint><RequestType>GET</RequestType><Request><__InSite __version="1.2"><__service __serviceType="ProductFetch"><__utcOffset>05:30</__utcOffset><__inputData><Syncname>12132023</Syncname><SyncRevision>2</SyncRevision></__inputData></__service></__InSite></Request><LogType>Error</LogType><OriginalMessageContent><PRODUCT><IDOC BEGIN="1"><Z1PRODUCT SEGMENT="1"><MATNR>12132023</MATNR><MAKTX>New Product</MAKTX></Z1PRODUCT></IDOC></PRODUCT></OriginalMessageContent><ErrorCode>13500617</ErrorCode><Error>Product ID \'12132023\' not found</Error><ReprocessAdapterType>RESTAPI</ReprocessAdapterType><ReprocessAdapterAddress>http://192.168.1.85:5000/productapi/messages?type=irproductmsgtype</ReprocessAdapterAddress><Response><__InSite __version="1.1"><__service __serviceType="ProductFetch"><__errorCode>13500617</__errorCode><__errorDescription>Product ID \'12132023\' not found</__errorDescription></__service></__InSite></Response></ErrorLog>',
    emailSent: 0,
    manuallyUnarchived: 0,
  },
  {
    recordDate: "9/14/2023 10:30:21 AM",
    messageType: "irproductmsgtype",
    messageId: "b2c5c2f0-f3cf-4025-a52a-9c6bbd2c59bb",
    criticalElement: "14092023",
    criticalElementName: "Product",
    interfaceType: "Inbound",
    adapterType: "Web API",
    adapterName: "productadapter",
    requestType: "PUT",
    request:
      '<__InSite __version="1.1"><__service __serviceType="ProductUpdate"><__utcOffset>05:30</__utcOffset><__inputData><ProductId>14092023</ProductId><ProductName>Updated Product</ProductName><ProductCategory>Electronics</ProductCategory></__inputData></__service></__InSite>',
    logType: "Error",
    originalMessageContent:
      '<PRODUCT><IDOC BEGIN="1"><Z1PRODUCT SEGMENT="1"><MATNR>14092023</MATNR><MAKTX>Updated Product</MAKTX><BKLAS>3000</BKLAS></Z1PRODUCT></IDOC></PRODUCT>',
    errorCode: "13500618",
    error: "Product ID '14092023' not found",
    response:
      '<__InSite __version="1.1"><__service __serviceType="ProductUpdate"><__errorCode>13500618</__errorCode><__errorDescription>Product ID \'14092023\' not found</__errorDescription></__service></__InSite>',
    adapterEndPoint:
      "http://192.168.1.86:6000/productapi/messages?type=irproductmsgtype",
    reprocessAdapterType: "WebAPI",
    reprocessAdapterAddress:
      "http://192.168.1.86:6000/productapi/messages?type=irproductmsgtype",
    reprocessStatus: 0,
    reprocessBy: null,
    reprocessDate: null,
    errorXML:
      '<ErrorLog><RecordDate>9/14/2023 10:30:21 AM</RecordDate><MessageType>irproductmsgtype</MessageType><MessageID>b2c5c2f0-f3cf-4025-a52a-9c6bbd2c59bb</MessageID><CriticalElement>14092023</CriticalElement><CriticalElementName>Product</CriticalElementName><InterfaceType>Inbound</InterfaceType><AdapterType>Web API</AdapterType><AdapterName>productadapter</AdapterName><AdapterEndPoint>http://192.168.1.86:6000/productapi/messages?type=irproductmsgtype</AdapterEndPoint><RequestType>PUT</RequestType><Request><__InSite __version="1.1"><__service __serviceType="ProductUpdate"><__utcOffset>05:30</__utcOffset><__inputData><ProductId>14092023</ProductId><ProductName>Updated Product</ProductName><ProductCategory>Electronics</ProductCategory></__inputData></__service></__InSite></Request><LogType>Error</LogType><OriginalMessageContent><PRODUCT><IDOC BEGIN="1"><Z1PRODUCT SEGMENT="1"><MATNR>14092023</MATNR><MAKTX>Updated Product</MAKTX><BKLAS>3000</BKLAS></Z1PRODUCT></IDOC></PRODUCT></OriginalMessageContent><ErrorCode>13500618</ErrorCode><Error>Product ID \'14092023\' not found</Error><ReprocessAdapterType>WebAPI</ReprocessAdapterType><ReprocessAdapterAddress>http://192.168.1.86:6000/productapi/messages?type=irproductmsgtype</ReprocessAdapterAddress><Response><__InSite __version="1.1"><__service __serviceType="ProductUpdate"><__errorCode>13500618</__errorCode><__errorDescription>Product ID \'14092023\' not found</__errorDescription></__service></__InSite></Response></ErrorLog>',
    emailSent: 0,
    manuallyUnarchived: 0,
  },
  {
    recordDate: "9/15/2023 04:15:30 PM",
    messageType: "irproductmsgtype",
    messageId: "c7e8b27a-b0a4-4925-b37d-d63c7423d576",
    criticalElement: "15092023",
    criticalElementName: "Product",
    interfaceType: "Outbound",
    adapterType: "REST API",
    adapterName: "productadapter",
    requestType: "POST",
    request:
      '<__InSite __version="1.3"><__service __serviceType="ProductCreation"><__utcOffset>05:30</__utcOffset><__inputData><ProductId>15092023</ProductId><ProductName>New Product</ProductName><ProductCategory>Apparel</ProductCategory></__inputData></__service></__InSite>',
    logType: "Error",
    originalMessageContent:
      '<PRODUCT><IDOC BEGIN="1"><Z1PRODUCT SEGMENT="1"><MATNR>15092023</MATNR><MAKTX>New Apparel</MAKTX><BKLAS>4000</BKLAS></Z1PRODUCT></IDOC></PRODUCT>',
    errorCode: "13500619",
    error: "Product ID '15092023' already exists",
    response:
      '<__InSite __version="1.1"><__service __serviceType="ProductCreation"><__errorCode>13500619</__errorCode><__errorDescription>Product ID \'15092023\' already exists</__errorDescription></__service></__InSite>',
    adapterEndPoint:
      "http://192.168.1.87:7000/productapi/messages?type=irproductmsgtype",
    reprocessAdapterType: "RESTAPI",
    reprocessAdapterAddress:
      "http://192.168.1.87:7000/productapi/messages?type=irproductmsgtype",
    reprocessStatus: 0,
    reprocessBy: null,
    reprocessDate: null,
    errorXML:
      '<ErrorLog><RecordDate>9/15/2023 04:15:30 PM</RecordDate><MessageType>irproductmsgtype</MessageType><MessageID>c7e8b27a-b0a4-4925-b37d-d63c7423d576</MessageID><CriticalElement>15092023</CriticalElement><CriticalElementName>Product</CriticalElementName><InterfaceType>Outbound</InterfaceType><AdapterType>REST API</AdapterType><AdapterName>productadapter</AdapterName><AdapterEndPoint>http://192.168.1.87:7000/productapi/messages?type=irproductmsgtype</AdapterEndPoint><RequestType>POST</RequestType><Request><__InSite __version="1.3"><__service __serviceType="ProductCreation"><__utcOffset>05:30</__utcOffset><__inputData><ProductId>15092023</ProductId><ProductName>New Product</ProductName><ProductCategory>Apparel</ProductCategory></__inputData></__service></__InSite></Request><LogType>Error</LogType><OriginalMessageContent><PRODUCT><IDOC BEGIN="1"><Z1PRODUCT SEGMENT="1"><MATNR>15092023</MATNR><MAKTX>New Apparel</MAKTX><BKLAS>4000</BKLAS></Z1PRODUCT></IDOC></PRODUCT></OriginalMessageContent><ErrorCode>13500619</ErrorCode><Error>Product ID \'15092023\' already exists</Error><ReprocessAdapterType>RESTAPI</ReprocessAdapterType><ReprocessAdapterAddress>http://192.168.1.87:7000/productapi/messages?type=irproductmsgtype</ReprocessAdapterAddress><Response><__InSite __version="1.1"><__service __serviceType="ProductCreation"><__errorCode>13500619</__errorCode><__errorDescription>Product ID \'15092023\' already exists</__errorDescription></__service></__InSite></Response></ErrorLog>',
    emailSent: 0,
    manuallyUnarchived: 0,
  },
  {
    recordDate: "9/16/2023 09:25:47 AM",
    messageType: "irproductmsgtype",
    messageId: "d5b43145-944d-4b50-b7c4-bcfdb24db1f1",
    criticalElement: "16092023",
    criticalElementName: "Product",
    interfaceType: "Inbound",
    adapterType: "Web API",
    adapterName: "productadapter",
    requestType: "DELETE",
    request:
      '<__InSite __version="1.2"><__service __serviceType="ProductDeletion"><__utcOffset>05:30</__utcOffset><__inputData><ProductId>16092023</ProductId></__inputData></__service></__InSite>',
    logType: "Error",
    originalMessageContent:
      '<PRODUCT><IDOC BEGIN="1"><Z1PRODUCT SEGMENT="1"><MATNR>16092023</MATNR><MAKTX>Deleted Product</MAKTX><BKLAS>5000</BKLAS></Z1PRODUCT></IDOC></PRODUCT>',
    errorCode: "13500620",
    error: "Product ID '16092023' does not exist",
    response:
      '<__InSite __version="1.1"><__service __serviceType="ProductDeletion"><__errorCode>13500620</__errorCode><__errorDescription>Product ID \'16092023\' does not exist</__errorDescription></__service></__InSite>',
    adapterEndPoint:
      "http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype",
    reprocessAdapterType: "WebAPI",
    reprocessAdapterAddress:
      "http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype",
    reprocessStatus: 0,
    reprocessBy: null,
    reprocessDate: null,
    errorXML:
      '<ErrorLog><RecordDate>9/16/2023 09:25:47 AM</RecordDate><MessageType>irproductmsgtype</MessageType><MessageID>d5b43145-944d-4b50-b7c4-bcfdb24db1f1</MessageID><CriticalElement>16092023</CriticalElement><CriticalElementName>Product</CriticalElementName><InterfaceType>Inbound</InterfaceType><AdapterType>Web API</AdapterType><AdapterName>productadapter</AdapterName><AdapterEndPoint>http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype</AdapterEndPoint><RequestType>DELETE</RequestType><Request><__InSite __version="1.2"><__service __serviceType="ProductDeletion"><__utcOffset>05:30</__utcOffset><__inputData><ProductId>16092023</ProductId></__inputData></__service></__InSite></Request><LogType>Error</LogType><OriginalMessageContent><PRODUCT><IDOC BEGIN="1"><Z1PRODUCT SEGMENT="1"><MATNR>16092023</MATNR><MAKTX>Deleted Product</MAKTX><BKLAS>5000</BKLAS></Z1PRODUCT></IDOC></PRODUCT></OriginalMessageContent><ErrorCode>13500620</ErrorCode><Error>Product ID \'16092023\' does not exist</Error><ReprocessAdapterType>WebAPI</ReprocessAdapterType><ReprocessAdapterAddress>http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype</ReprocessAdapterAddress><Response><__InSite __version="1.1"><__service __serviceType="ProductDeletion"><__errorCode>13500620</__errorCode><__errorDescription>Product ID \'16092023\' does not exist</__errorDescription></__service></__InSite></Response></ErrorLog>',
    emailSent: 0,
    manuallyUnarchived: 0,
  },
  {
    recordDate: "9/16/2023 09:25:47 AM",
    messageType: "irproductmsgtype",
    messageId: "d5b43145-944d-4b50-b7c4-bcfdb24db1f1",
    criticalElement: "16092023",
    criticalElementName: "Product",
    interfaceType: "Inbound",
    adapterType: "Web API",
    adapterName: "productadapter",
    requestType: "DELETE",
    request:
      '<__InSite __version="1.2"><__service __serviceType="ProductDeletion"><__utcOffset>05:30</__utcOffset><__inputData><ProductId>16092023</ProductId></__inputData></__service></__InSite>',
    logType: "Error",
    originalMessageContent:
      '<PRODUCT><IDOC BEGIN="1"><Z1PRODUCT SEGMENT="1"><MATNR>16092023</MATNR><MAKTX>Deleted Product</MAKTX><BKLAS>5000</BKLAS></Z1PRODUCT></IDOC></PRODUCT>',
    errorCode: "13500620",
    error: "Product ID '16092023' does not exist",
    response:
      '<__InSite __version="1.1"><__service __serviceType="ProductDeletion"><__errorCode>13500620</__errorCode><__errorDescription>Product ID \'16092023\' does not exist</__errorDescription></__service></__InSite>',
    adapterEndPoint:
      "http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype",
    reprocessAdapterType: "WebAPI",
    reprocessAdapterAddress:
      "http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype",
    reprocessStatus: 0,
    reprocessBy: null,
    reprocessDate: null,
    errorXML:
      '<ErrorLog><RecordDate>9/16/2023 09:25:47 AM</RecordDate><MessageType>irproductmsgtype</MessageType><MessageID>d5b43145-944d-4b50-b7c4-bcfdb24db1f1</MessageID><CriticalElement>16092023</CriticalElement><CriticalElementName>Product</CriticalElementName><InterfaceType>Inbound</InterfaceType><AdapterType>Web API</AdapterType><AdapterName>productadapter</AdapterName><AdapterEndPoint>http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype</AdapterEndPoint><RequestType>DELETE</RequestType><Request><__InSite __version="1.2"><__service __serviceType="ProductDeletion"><__utcOffset>05:30</__utcOffset><__inputData><ProductId>16092023</ProductId></__inputData></__service></__InSite></Request><LogType>Error</LogType><OriginalMessageContent><PRODUCT><IDOC BEGIN="1"><Z1PRODUCT SEGMENT="1"><MATNR>16092023</MATNR><MAKTX>Deleted Product</MAKTX><BKLAS>5000</BKLAS></Z1PRODUCT></IDOC></PRODUCT></OriginalMessageContent><ErrorCode>13500620</ErrorCode><Error>Product ID \'16092023\' does not exist</Error><ReprocessAdapterType>WebAPI</ReprocessAdapterType><ReprocessAdapterAddress>http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype</ReprocessAdapterAddress><Response><__InSite __version="1.1"><__service __serviceType="ProductDeletion"><__errorCode>13500620</__errorCode><__errorDescription>Product ID \'16092023\' does not exist</__errorDescription></__service></__InSite></Response></ErrorLog>',
    emailSent: 0,
    manuallyUnarchived: 0,
  },
  {
    recordDate: "9/16/2023 09:25:47 AM",
    messageType: "irproductmsgtype",
    messageId: "d5b43145-944d-4b50-b7c4-bcfdb24db1f1",
    criticalElement: "16092023",
    criticalElementName: "Product",
    interfaceType: "Inbound",
    adapterType: "Web API",
    adapterName: "productadapter",
    requestType: "DELETE",
    request:
      '<__InSite __version="1.2"><__service __serviceType="ProductDeletion"><__utcOffset>05:30</__utcOffset><__inputData><ProductId>16092023</ProductId></__inputData></__service></__InSite>',
    logType: "Error",
    originalMessageContent:
      '<PRODUCT><IDOC BEGIN="1"><Z1PRODUCT SEGMENT="1"><MATNR>16092023</MATNR><MAKTX>Deleted Product</MAKTX><BKLAS>5000</BKLAS></Z1PRODUCT></IDOC></PRODUCT>',
    errorCode: "13500620",
    error: "Product ID '16092023' does not exist",
    response:
      '<__InSite __version="1.1"><__service __serviceType="ProductDeletion"><__errorCode>13500620</__errorCode><__errorDescription>Product ID \'16092023\' does not exist</__errorDescription></__service></__InSite>',
    adapterEndPoint:
      "http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype",
    reprocessAdapterType: "WebAPI",
    reprocessAdapterAddress:
      "http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype",
    reprocessStatus: 0,
    reprocessBy: null,
    reprocessDate: null,
    errorXML:
      '<ErrorLog><RecordDate>9/16/2023 09:25:47 AM</RecordDate><MessageType>irproductmsgtype</MessageType><MessageID>d5b43145-944d-4b50-b7c4-bcfdb24db1f1</MessageID><CriticalElement>16092023</CriticalElement><CriticalElementName>Product</CriticalElementName><InterfaceType>Inbound</InterfaceType><AdapterType>Web API</AdapterType><AdapterName>productadapter</AdapterName><AdapterEndPoint>http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype</AdapterEndPoint><RequestType>DELETE</RequestType><Request><__InSite __version="1.2"><__service __serviceType="ProductDeletion"><__utcOffset>05:30</__utcOffset><__inputData><ProductId>16092023</ProductId></__inputData></__service></__InSite></Request><LogType>Error</LogType><OriginalMessageContent><PRODUCT><IDOC BEGIN="1"><Z1PRODUCT SEGMENT="1"><MATNR>16092023</MATNR><MAKTX>Deleted Product</MAKTX><BKLAS>5000</BKLAS></Z1PRODUCT></IDOC></PRODUCT></OriginalMessageContent><ErrorCode>13500620</ErrorCode><Error>Product ID \'16092023\' does not exist</Error><ReprocessAdapterType>WebAPI</ReprocessAdapterType><ReprocessAdapterAddress>http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype</ReprocessAdapterAddress><Response><__InSite __version="1.1"><__service __serviceType="ProductDeletion"><__errorCode>13500620</__errorCode><__errorDescription>Product ID \'16092023\' does not exist</__errorDescription></__service></__InSite></Response></ErrorLog>',
    emailSent: 0,
    manuallyUnarchived: 0,
  },
  {
    recordDate: "9/16/2023 09:25:47 AM",
    messageType: "irproductmsgtype",
    messageId: "d5b43145-944d-4b50-b7c4-bcfdb24db1f1",
    criticalElement: "16092023",
    criticalElementName: "Product",
    interfaceType: "Inbound",
    adapterType: "Web API",
    adapterName: "productadapter",
    requestType: "DELETE",
    request:
      '<__InSite __version="1.2"><__service __serviceType="ProductDeletion"><__utcOffset>05:30</__utcOffset><__inputData><ProductId>16092023</ProductId></__inputData></__service></__InSite>',
    logType: "Error",
    originalMessageContent:
      '<PRODUCT><IDOC BEGIN="1"><Z1PRODUCT SEGMENT="1"><MATNR>16092023</MATNR><MAKTX>Deleted Product</MAKTX><BKLAS>5000</BKLAS></Z1PRODUCT></IDOC></PRODUCT>',
    errorCode: "13500620",
    error: "Product ID '16092023' does not exist",
    response:
      '<__InSite __version="1.1"><__service __serviceType="ProductDeletion"><__errorCode>13500620</__errorCode><__errorDescription>Product ID \'16092023\' does not exist</__errorDescription></__service></__InSite>',
    adapterEndPoint:
      "http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype",
    reprocessAdapterType: "WebAPI",
    reprocessAdapterAddress:
      "http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype",
    reprocessStatus: 0,
    reprocessBy: null,
    reprocessDate: null,
    errorXML:
      '<ErrorLog><RecordDate>9/16/2023 09:25:47 AM</RecordDate><MessageType>irproductmsgtype</MessageType><MessageID>d5b43145-944d-4b50-b7c4-bcfdb24db1f1</MessageID><CriticalElement>16092023</CriticalElement><CriticalElementName>Product</CriticalElementName><InterfaceType>Inbound</InterfaceType><AdapterType>Web API</AdapterType><AdapterName>productadapter</AdapterName><AdapterEndPoint>http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype</AdapterEndPoint><RequestType>DELETE</RequestType><Request><__InSite __version="1.2"><__service __serviceType="ProductDeletion"><__utcOffset>05:30</__utcOffset><__inputData><ProductId>16092023</ProductId></__inputData></__service></__InSite></Request><LogType>Error</LogType><OriginalMessageContent><PRODUCT><IDOC BEGIN="1"><Z1PRODUCT SEGMENT="1"><MATNR>16092023</MATNR><MAKTX>Deleted Product</MAKTX><BKLAS>5000</BKLAS></Z1PRODUCT></IDOC></PRODUCT></OriginalMessageContent><ErrorCode>13500620</ErrorCode><Error>Product ID \'16092023\' does not exist</Error><ReprocessAdapterType>WebAPI</ReprocessAdapterType><ReprocessAdapterAddress>http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype</ReprocessAdapterAddress><Response><__InSite __version="1.1"><__service __serviceType="ProductDeletion"><__errorCode>13500620</__errorCode><__errorDescription>Product ID \'16092023\' does not exist</__errorDescription></__service></__InSite></Response></ErrorLog>',
    emailSent: 0,
    manuallyUnarchived: 0,
  },
  {
    recordDate: "9/16/2023 09:25:47 AM",
    messageType: "irproductmsgtype",
    messageId: "d5b43145-944d-4b50-b7c4-bcfdb24db1f1",
    criticalElement: "16092023",
    criticalElementName: "Product",
    interfaceType: "Inbound",
    adapterType: "Web API",
    adapterName: "productadapter",
    requestType: "DELETE",
    request:
      '<__InSite __version="1.2"><__service __serviceType="ProductDeletion"><__utcOffset>05:30</__utcOffset><__inputData><ProductId>16092023</ProductId></__inputData></__service></__InSite>',
    logType: "Error",
    originalMessageContent:
      '<PRODUCT><IDOC BEGIN="1"><Z1PRODUCT SEGMENT="1"><MATNR>16092023</MATNR><MAKTX>Deleted Product</MAKTX><BKLAS>5000</BKLAS></Z1PRODUCT></IDOC></PRODUCT>',
    errorCode: "13500620",
    error: "Product ID '16092023' does not exist",
    response:
      '<__InSite __version="1.1"><__service __serviceType="ProductDeletion"><__errorCode>13500620</__errorCode><__errorDescription>Product ID \'16092023\' does not exist</__errorDescription></__service></__InSite>',
    adapterEndPoint:
      "http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype",
    reprocessAdapterType: "WebAPI",
    reprocessAdapterAddress:
      "http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype",
    reprocessStatus: 0,
    reprocessBy: null,
    reprocessDate: null,
    errorXML:
      '<ErrorLog><RecordDate>9/16/2023 09:25:47 AM</RecordDate><MessageType>irproductmsgtype</MessageType><MessageID>d5b43145-944d-4b50-b7c4-bcfdb24db1f1</MessageID><CriticalElement>16092023</CriticalElement><CriticalElementName>Product</CriticalElementName><InterfaceType>Inbound</InterfaceType><AdapterType>Web API</AdapterType><AdapterName>productadapter</AdapterName><AdapterEndPoint>http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype</AdapterEndPoint><RequestType>DELETE</RequestType><Request><__InSite __version="1.2"><__service __serviceType="ProductDeletion"><__utcOffset>05:30</__utcOffset><__inputData><ProductId>16092023</ProductId></__inputData></__service></__InSite></Request><LogType>Error</LogType><OriginalMessageContent><PRODUCT><IDOC BEGIN="1"><Z1PRODUCT SEGMENT="1"><MATNR>16092023</MATNR><MAKTX>Deleted Product</MAKTX><BKLAS>5000</BKLAS></Z1PRODUCT></IDOC></PRODUCT></OriginalMessageContent><ErrorCode>13500620</ErrorCode><Error>Product ID \'16092023\' does not exist</Error><ReprocessAdapterType>WebAPI</ReprocessAdapterType><ReprocessAdapterAddress>http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype</ReprocessAdapterAddress><Response><__InSite __version="1.1"><__service __serviceType="ProductDeletion"><__errorCode>13500620</__errorCode><__errorDescription>Product ID \'16092023\' does not exist</__errorDescription></__service></__InSite></Response></ErrorLog>',
    emailSent: 0,
    manuallyUnarchived: 0,
  },
  {
    recordDate: "9/16/2023 09:25:47 AM",
    messageType: "irproductmsgtype",
    messageId: "d5b43145-944d-4b50-b7c4-bcfdb24db1f1",
    criticalElement: "16092023",
    criticalElementName: "Product",
    interfaceType: "Inbound",
    adapterType: "Web API",
    adapterName: "productadapter",
    requestType: "DELETE",
    request:
      '<__InSite __version="1.2"><__service __serviceType="ProductDeletion"><__utcOffset>05:30</__utcOffset><__inputData><ProductId>16092023</ProductId></__inputData></__service></__InSite>',
    logType: "Error",
    originalMessageContent:
      '<PRODUCT><IDOC BEGIN="1"><Z1PRODUCT SEGMENT="1"><MATNR>16092023</MATNR><MAKTX>Deleted Product</MAKTX><BKLAS>5000</BKLAS></Z1PRODUCT></IDOC></PRODUCT>',
    errorCode: "13500620",
    error: "Product ID '16092023' does not exist",
    response:
      '<__InSite __version="1.1"><__service __serviceType="ProductDeletion"><__errorCode>13500620</__errorCode><__errorDescription>Product ID \'16092023\' does not exist</__errorDescription></__service></__InSite>',
    adapterEndPoint:
      "http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype",
    reprocessAdapterType: "WebAPI",
    reprocessAdapterAddress:
      "http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype",
    reprocessStatus: 0,
    reprocessBy: null,
    reprocessDate: null,
    errorXML:
      '<ErrorLog><RecordDate>9/16/2023 09:25:47 AM</RecordDate><MessageType>irproductmsgtype</MessageType><MessageID>d5b43145-944d-4b50-b7c4-bcfdb24db1f1</MessageID><CriticalElement>16092023</CriticalElement><CriticalElementName>Product</CriticalElementName><InterfaceType>Inbound</InterfaceType><AdapterType>Web API</AdapterType><AdapterName>productadapter</AdapterName><AdapterEndPoint>http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype</AdapterEndPoint><RequestType>DELETE</RequestType><Request><__InSite __version="1.2"><__service __serviceType="ProductDeletion"><__utcOffset>05:30</__utcOffset><__inputData><ProductId>16092023</ProductId></__inputData></__service></__InSite></Request><LogType>Error</LogType><OriginalMessageContent><PRODUCT><IDOC BEGIN="1"><Z1PRODUCT SEGMENT="1"><MATNR>16092023</MATNR><MAKTX>Deleted Product</MAKTX><BKLAS>5000</BKLAS></Z1PRODUCT></IDOC></PRODUCT></OriginalMessageContent><ErrorCode>13500620</ErrorCode><Error>Product ID \'16092023\' does not exist</Error><ReprocessAdapterType>WebAPI</ReprocessAdapterType><ReprocessAdapterAddress>http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype</ReprocessAdapterAddress><Response><__InSite __version="1.1"><__service __serviceType="ProductDeletion"><__errorCode>13500620</__errorCode><__errorDescription>Product ID \'16092023\' does not exist</__errorDescription></__service></__InSite></Response></ErrorLog>',
    emailSent: 0,
    manuallyUnarchived: 0,
  },
  {
    recordDate: "9/16/2023 09:25:47 AM",
    messageType: "irproductmsgtype",
    messageId: "d5b43145-944d-4b50-b7c4-bcfdb24db1f1",
    criticalElement: "16092023",
    criticalElementName: "Product",
    interfaceType: "Inbound",
    adapterType: "Web API",
    adapterName: "productadapter",
    requestType: "DELETE",
    request:
      '<__InSite __version="1.2"><__service __serviceType="ProductDeletion"><__utcOffset>05:30</__utcOffset><__inputData><ProductId>16092023</ProductId></__inputData></__service></__InSite>',
    logType: "Error",
    originalMessageContent:
      '<PRODUCT><IDOC BEGIN="1"><Z1PRODUCT SEGMENT="1"><MATNR>16092023</MATNR><MAKTX>Deleted Product</MAKTX><BKLAS>5000</BKLAS></Z1PRODUCT></IDOC></PRODUCT>',
    errorCode: "13500620",
    error: "Product ID '16092023' does not exist",
    response:
      '<__InSite __version="1.1"><__service __serviceType="ProductDeletion"><__errorCode>13500620</__errorCode><__errorDescription>Product ID \'16092023\' does not exist</__errorDescription></__service></__InSite>',
    adapterEndPoint:
      "http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype",
    reprocessAdapterType: "WebAPI",
    reprocessAdapterAddress:
      "http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype",
    reprocessStatus: 0,
    reprocessBy: null,
    reprocessDate: null,
    errorXML:
      '<ErrorLog><RecordDate>9/16/2023 09:25:47 AM</RecordDate><MessageType>irproductmsgtype</MessageType><MessageID>d5b43145-944d-4b50-b7c4-bcfdb24db1f1</MessageID><CriticalElement>16092023</CriticalElement><CriticalElementName>Product</CriticalElementName><InterfaceType>Inbound</InterfaceType><AdapterType>Web API</AdapterType><AdapterName>productadapter</AdapterName><AdapterEndPoint>http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype</AdapterEndPoint><RequestType>DELETE</RequestType><Request><__InSite __version="1.2"><__service __serviceType="ProductDeletion"><__utcOffset>05:30</__utcOffset><__inputData><ProductId>16092023</ProductId></__inputData></__service></__InSite></Request><LogType>Error</LogType><OriginalMessageContent><PRODUCT><IDOC BEGIN="1"><Z1PRODUCT SEGMENT="1"><MATNR>16092023</MATNR><MAKTX>Deleted Product</MAKTX><BKLAS>5000</BKLAS></Z1PRODUCT></IDOC></PRODUCT></OriginalMessageContent><ErrorCode>13500620</ErrorCode><Error>Product ID \'16092023\' does not exist</Error><ReprocessAdapterType>WebAPI</ReprocessAdapterType><ReprocessAdapterAddress>http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype</ReprocessAdapterAddress><Response><__InSite __version="1.1"><__service __serviceType="ProductDeletion"><__errorCode>13500620</__errorCode><__errorDescription>Product ID \'16092023\' does not exist</__errorDescription></__service></__InSite></Response></ErrorLog>',
    emailSent: 0,
    manuallyUnarchived: 0,
  },
  {
    recordDate: "9/16/2023 09:25:47 AM",
    messageType: "irproductmsgtype",
    messageId: "d5b43145-944d-4b50-b7c4-bcfdb24db1f1",
    criticalElement: "16092023",
    criticalElementName: "Product",
    interfaceType: "Inbound",
    adapterType: "Web API",
    adapterName: "productadapter",
    requestType: "DELETE",
    request:
      '<__InSite __version="1.2"><__service __serviceType="ProductDeletion"><__utcOffset>05:30</__utcOffset><__inputData><ProductId>16092023</ProductId></__inputData></__service></__InSite>',
    logType: "Error",
    originalMessageContent:
      '<PRODUCT><IDOC BEGIN="1"><Z1PRODUCT SEGMENT="1"><MATNR>16092023</MATNR><MAKTX>Deleted Product</MAKTX><BKLAS>5000</BKLAS></Z1PRODUCT></IDOC></PRODUCT>',
    errorCode: "13500620",
    error: "Product ID '16092023' does not exist",
    response:
      '<__InSite __version="1.1"><__service __serviceType="ProductDeletion"><__errorCode>13500620</__errorCode><__errorDescription>Product ID \'16092023\' does not exist</__errorDescription></__service></__InSite>',
    adapterEndPoint:
      "http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype",
    reprocessAdapterType: "WebAPI",
    reprocessAdapterAddress:
      "http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype",
    reprocessStatus: 0,
    reprocessBy: null,
    reprocessDate: null,
    errorXML:
      '<ErrorLog><RecordDate>9/16/2023 09:25:47 AM</RecordDate><MessageType>irproductmsgtype</MessageType><MessageID>d5b43145-944d-4b50-b7c4-bcfdb24db1f1</MessageID><CriticalElement>16092023</CriticalElement><CriticalElementName>Product</CriticalElementName><InterfaceType>Inbound</InterfaceType><AdapterType>Web API</AdapterType><AdapterName>productadapter</AdapterName><AdapterEndPoint>http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype</AdapterEndPoint><RequestType>DELETE</RequestType><Request><__InSite __version="1.2"><__service __serviceType="ProductDeletion"><__utcOffset>05:30</__utcOffset><__inputData><ProductId>16092023</ProductId></__inputData></__service></__InSite></Request><LogType>Error</LogType><OriginalMessageContent><PRODUCT><IDOC BEGIN="1"><Z1PRODUCT SEGMENT="1"><MATNR>16092023</MATNR><MAKTX>Deleted Product</MAKTX><BKLAS>5000</BKLAS></Z1PRODUCT></IDOC></PRODUCT></OriginalMessageContent><ErrorCode>13500620</ErrorCode><Error>Product ID \'16092023\' does not exist</Error><ReprocessAdapterType>WebAPI</ReprocessAdapterType><ReprocessAdapterAddress>http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype</ReprocessAdapterAddress><Response><__InSite __version="1.1"><__service __serviceType="ProductDeletion"><__errorCode>13500620</__errorCode><__errorDescription>Product ID \'16092023\' does not exist</__errorDescription></__service></__InSite></Response></ErrorLog>',
    emailSent: 0,
    manuallyUnarchived: 0,
  },
  {
    recordDate: "9/16/2023 09:25:47 AM",
    messageType: "irproductmsgtype",
    messageId: "d5b43145-944d-4b50-b7c4-bcfdb24db1f1",
    criticalElement: "16092023",
    criticalElementName: "Product",
    interfaceType: "Inbound",
    adapterType: "Web API",
    adapterName: "productadapter",
    requestType: "DELETE",
    request:
      '<__InSite __version="1.2"><__service __serviceType="ProductDeletion"><__utcOffset>05:30</__utcOffset><__inputData><ProductId>16092023</ProductId></__inputData></__service></__InSite>',
    logType: "Error",
    originalMessageContent:
      '<PRODUCT><IDOC BEGIN="1"><Z1PRODUCT SEGMENT="1"><MATNR>16092023</MATNR><MAKTX>Deleted Product</MAKTX><BKLAS>5000</BKLAS></Z1PRODUCT></IDOC></PRODUCT>',
    errorCode: "13500620",
    error: "Product ID '16092023' does not exist",
    response:
      '<__InSite __version="1.1"><__service __serviceType="ProductDeletion"><__errorCode>13500620</__errorCode><__errorDescription>Product ID \'16092023\' does not exist</__errorDescription></__service></__InSite>',
    adapterEndPoint:
      "http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype",
    reprocessAdapterType: "WebAPI",
    reprocessAdapterAddress:
      "http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype",
    reprocessStatus: 0,
    reprocessBy: null,
    reprocessDate: null,
    errorXML:
      '<ErrorLog><RecordDate>9/16/2023 09:25:47 AM</RecordDate><MessageType>irproductmsgtype</MessageType><MessageID>d5b43145-944d-4b50-b7c4-bcfdb24db1f1</MessageID><CriticalElement>16092023</CriticalElement><CriticalElementName>Product</CriticalElementName><InterfaceType>Inbound</InterfaceType><AdapterType>Web API</AdapterType><AdapterName>productadapter</AdapterName><AdapterEndPoint>http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype</AdapterEndPoint><RequestType>DELETE</RequestType><Request><__InSite __version="1.2"><__service __serviceType="ProductDeletion"><__utcOffset>05:30</__utcOffset><__inputData><ProductId>16092023</ProductId></__inputData></__service></__InSite></Request><LogType>Error</LogType><OriginalMessageContent><PRODUCT><IDOC BEGIN="1"><Z1PRODUCT SEGMENT="1"><MATNR>16092023</MATNR><MAKTX>Deleted Product</MAKTX><BKLAS>5000</BKLAS></Z1PRODUCT></IDOC></PRODUCT></OriginalMessageContent><ErrorCode>13500620</ErrorCode><Error>Product ID \'16092023\' does not exist</Error><ReprocessAdapterType>WebAPI</ReprocessAdapterType><ReprocessAdapterAddress>http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype</ReprocessAdapterAddress><Response><__InSite __version="1.1"><__service __serviceType="ProductDeletion"><__errorCode>13500620</__errorCode><__errorDescription>Product ID \'16092023\' does not exist</__errorDescription></__service></__InSite></Response></ErrorLog>',
    emailSent: 0,
    manuallyUnarchived: 0,
  },
  {
    recordDate: "9/16/2023 09:25:47 AM",
    messageType: "irproductmsgtype",
    messageId: "d5b43145-944d-4b50-b7c4-bcfdb24db1f1",
    criticalElement: "16092023",
    criticalElementName: "Product",
    interfaceType: "Inbound",
    adapterType: "Web API",
    adapterName: "productadapter",
    requestType: "DELETE",
    request:
      '<__InSite __version="1.2"><__service __serviceType="ProductDeletion"><__utcOffset>05:30</__utcOffset><__inputData><ProductId>16092023</ProductId></__inputData></__service></__InSite>',
    logType: "Error",
    originalMessageContent:
      '<PRODUCT><IDOC BEGIN="1"><Z1PRODUCT SEGMENT="1"><MATNR>16092023</MATNR><MAKTX>Deleted Product</MAKTX><BKLAS>5000</BKLAS></Z1PRODUCT></IDOC></PRODUCT>',
    errorCode: "13500620",
    error: "Product ID '16092023' does not exist",
    response:
      '<__InSite __version="1.1"><__service __serviceType="ProductDeletion"><__errorCode>13500620</__errorCode><__errorDescription>Product ID \'16092023\' does not exist</__errorDescription></__service></__InSite>',
    adapterEndPoint:
      "http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype",
    reprocessAdapterType: "WebAPI",
    reprocessAdapterAddress:
      "http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype",
    reprocessStatus: 0,
    reprocessBy: null,
    reprocessDate: null,
    errorXML:
      '<ErrorLog><RecordDate>9/16/2023 09:25:47 AM</RecordDate><MessageType>irproductmsgtype</MessageType><MessageID>d5b43145-944d-4b50-b7c4-bcfdb24db1f1</MessageID><CriticalElement>16092023</CriticalElement><CriticalElementName>Product</CriticalElementName><InterfaceType>Inbound</InterfaceType><AdapterType>Web API</AdapterType><AdapterName>productadapter</AdapterName><AdapterEndPoint>http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype</AdapterEndPoint><RequestType>DELETE</RequestType><Request><__InSite __version="1.2"><__service __serviceType="ProductDeletion"><__utcOffset>05:30</__utcOffset><__inputData><ProductId>16092023</ProductId></__inputData></__service></__InSite></Request><LogType>Error</LogType><OriginalMessageContent><PRODUCT><IDOC BEGIN="1"><Z1PRODUCT SEGMENT="1"><MATNR>16092023</MATNR><MAKTX>Deleted Product</MAKTX><BKLAS>5000</BKLAS></Z1PRODUCT></IDOC></PRODUCT></OriginalMessageContent><ErrorCode>13500620</ErrorCode><Error>Product ID \'16092023\' does not exist</Error><ReprocessAdapterType>WebAPI</ReprocessAdapterType><ReprocessAdapterAddress>http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype</ReprocessAdapterAddress><Response><__InSite __version="1.1"><__service __serviceType="ProductDeletion"><__errorCode>13500620</__errorCode><__errorDescription>Product ID \'16092023\' does not exist</__errorDescription></__service></__InSite></Response></ErrorLog>',
    emailSent: 0,
    manuallyUnarchived: 0,
  },
  {
    recordDate: "9/16/2023 09:25:47 AM",
    messageType: "irproductmsgtype",
    messageId: "d5b43145-944d-4b50-b7c4-bcfdb24db1f1",
    criticalElement: "16092023",
    criticalElementName: "Product",
    interfaceType: "Inbound",
    adapterType: "Web API",
    adapterName: "productadapter",
    requestType: "DELETE",
    request:
      '<__InSite __version="1.2"><__service __serviceType="ProductDeletion"><__utcOffset>05:30</__utcOffset><__inputData><ProductId>16092023</ProductId></__inputData></__service></__InSite>',
    logType: "Error",
    originalMessageContent:
      '<PRODUCT><IDOC BEGIN="1"><Z1PRODUCT SEGMENT="1"><MATNR>16092023</MATNR><MAKTX>Deleted Product</MAKTX><BKLAS>5000</BKLAS></Z1PRODUCT></IDOC></PRODUCT>',
    errorCode: "13500620",
    error: "Product ID '16092023' does not exist",
    response:
      '<__InSite __version="1.1"><__service __serviceType="ProductDeletion"><__errorCode>13500620</__errorCode><__errorDescription>Product ID \'16092023\' does not exist</__errorDescription></__service></__InSite>',
    adapterEndPoint:
      "http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype",
    reprocessAdapterType: "WebAPI",
    reprocessAdapterAddress:
      "http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype",
    reprocessStatus: 0,
    reprocessBy: null,
    reprocessDate: null,
    errorXML:
      '<ErrorLog><RecordDate>9/16/2023 09:25:47 AM</RecordDate><MessageType>irproductmsgtype</MessageType><MessageID>d5b43145-944d-4b50-b7c4-bcfdb24db1f1</MessageID><CriticalElement>16092023</CriticalElement><CriticalElementName>Product</CriticalElementName><InterfaceType>Inbound</InterfaceType><AdapterType>Web API</AdapterType><AdapterName>productadapter</AdapterName><AdapterEndPoint>http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype</AdapterEndPoint><RequestType>DELETE</RequestType><Request><__InSite __version="1.2"><__service __serviceType="ProductDeletion"><__utcOffset>05:30</__utcOffset><__inputData><ProductId>16092023</ProductId></__inputData></__service></__InSite></Request><LogType>Error</LogType><OriginalMessageContent><PRODUCT><IDOC BEGIN="1"><Z1PRODUCT SEGMENT="1"><MATNR>16092023</MATNR><MAKTX>Deleted Product</MAKTX><BKLAS>5000</BKLAS></Z1PRODUCT></IDOC></PRODUCT></OriginalMessageContent><ErrorCode>13500620</ErrorCode><Error>Product ID \'16092023\' does not exist</Error><ReprocessAdapterType>WebAPI</ReprocessAdapterType><ReprocessAdapterAddress>http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype</ReprocessAdapterAddress><Response><__InSite __version="1.1"><__service __serviceType="ProductDeletion"><__errorCode>13500620</__errorCode><__errorDescription>Product ID \'16092023\' does not exist</__errorDescription></__service></__InSite></Response></ErrorLog>',
    emailSent: 0,
    manuallyUnarchived: 0,
  },
  {
    recordDate: "9/16/2023 09:25:47 AM",
    messageType: "irproductmsgtype",
    messageId: "d5b43145-944d-4b50-b7c4-bcfdb24db1f1",
    criticalElement: "16092023",
    criticalElementName: "Product",
    interfaceType: "Inbound",
    adapterType: "Web API",
    adapterName: "productadapter",
    requestType: "DELETE",
    request:
      '<__InSite __version="1.2"><__service __serviceType="ProductDeletion"><__utcOffset>05:30</__utcOffset><__inputData><ProductId>16092023</ProductId></__inputData></__service></__InSite>',
    logType: "Error",
    originalMessageContent:
      '<PRODUCT><IDOC BEGIN="1"><Z1PRODUCT SEGMENT="1"><MATNR>16092023</MATNR><MAKTX>Deleted Product</MAKTX><BKLAS>5000</BKLAS></Z1PRODUCT></IDOC></PRODUCT>',
    errorCode: "13500620",
    error: "Product ID '16092023' does not exist",
    response:
      '<__InSite __version="1.1"><__service __serviceType="ProductDeletion"><__errorCode>13500620</__errorCode><__errorDescription>Product ID \'16092023\' does not exist</__errorDescription></__service></__InSite>',
    adapterEndPoint:
      "http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype",
    reprocessAdapterType: "WebAPI",
    reprocessAdapterAddress:
      "http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype",
    reprocessStatus: 0,
    reprocessBy: null,
    reprocessDate: null,
    errorXML:
      '<ErrorLog><RecordDate>9/16/2023 09:25:47 AM</RecordDate><MessageType>irproductmsgtype</MessageType><MessageID>d5b43145-944d-4b50-b7c4-bcfdb24db1f1</MessageID><CriticalElement>16092023</CriticalElement><CriticalElementName>Product</CriticalElementName><InterfaceType>Inbound</InterfaceType><AdapterType>Web API</AdapterType><AdapterName>productadapter</AdapterName><AdapterEndPoint>http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype</AdapterEndPoint><RequestType>DELETE</RequestType><Request><__InSite __version="1.2"><__service __serviceType="ProductDeletion"><__utcOffset>05:30</__utcOffset><__inputData><ProductId>16092023</ProductId></__inputData></__service></__InSite></Request><LogType>Error</LogType><OriginalMessageContent><PRODUCT><IDOC BEGIN="1"><Z1PRODUCT SEGMENT="1"><MATNR>16092023</MATNR><MAKTX>Deleted Product</MAKTX><BKLAS>5000</BKLAS></Z1PRODUCT></IDOC></PRODUCT></OriginalMessageContent><ErrorCode>13500620</ErrorCode><Error>Product ID \'16092023\' does not exist</Error><ReprocessAdapterType>WebAPI</ReprocessAdapterType><ReprocessAdapterAddress>http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype</ReprocessAdapterAddress><Response><__InSite __version="1.1"><__service __serviceType="ProductDeletion"><__errorCode>13500620</__errorCode><__errorDescription>Product ID \'16092023\' does not exist</__errorDescription></__service></__InSite></Response></ErrorLog>',
    emailSent: 0,
    manuallyUnarchived: 0,
  },
  {
    recordDate: "9/16/2023 09:25:47 AM",
    messageType: "irproductmsgtype",
    messageId: "d5rwetr45-944d-4b50-b7c4-bcfdb24db1f1",
    criticalElement: "16092023",
    criticalElementName: "Product",
    interfaceType: "Inbound",
    adapterType: "Web API",
    adapterName: "productadapter",
    requestType: "DELETE",
    request:
      '<__InSite __version="1.2"><__service __serviceType="ProductDeletion"><__utcOffset>05:30</__utcOffset><__inputData><ProductId>16092023</ProductId></__inputData></__service></__InSite>',
    logType: "Error",
    originalMessageContent:
      '<PRODUCT><IDOC BEGIN="1"><Z1PRODUCT SEGMENT="1"><MATNR>16092023</MATNR><MAKTX>Deleted Product</MAKTX><BKLAS>5000</BKLAS></Z1PRODUCT></IDOC></PRODUCT>',
    errorCode: "13500620",
    error: "Product ID '16092023' does not exist",
    response:
      '<__InSite __version="1.1"><__service __serviceType="ProductDeletion"><__errorCode>13500620</__errorCode><__errorDescription>Product ID \'16092023\' does not exist</__errorDescription></__service></__InSite>',
    adapterEndPoint:
      "http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype",
    reprocessAdapterType: "WebAPI",
    reprocessAdapterAddress:
      "http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype",
    reprocessStatus: 0,
    reprocessBy: null,
    reprocessDate: null,
    errorXML:
      '<ErrorLog><RecordDate>9/16/2023 09:25:47 AM</RecordDate><MessageType>irproductmsgtype</MessageType><MessageID>d5b43145-944d-4b50-b7c4-bcfdb24db1f1</MessageID><CriticalElement>16092023</CriticalElement><CriticalElementName>Product</CriticalElementName><InterfaceType>Inbound</InterfaceType><AdapterType>Web API</AdapterType><AdapterName>productadapter</AdapterName><AdapterEndPoint>http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype</AdapterEndPoint><RequestType>DELETE</RequestType><Request><__InSite __version="1.2"><__service __serviceType="ProductDeletion"><__utcOffset>05:30</__utcOffset><__inputData><ProductId>16092023</ProductId></__inputData></__service></__InSite></Request><LogType>Error</LogType><OriginalMessageContent><PRODUCT><IDOC BEGIN="1"><Z1PRODUCT SEGMENT="1"><MATNR>16092023</MATNR><MAKTX>Deleted Product</MAKTX><BKLAS>5000</BKLAS></Z1PRODUCT></IDOC></PRODUCT></OriginalMessageContent><ErrorCode>13500620</ErrorCode><Error>Product ID \'16092023\' does not exist</Error><ReprocessAdapterType>WebAPI</ReprocessAdapterType><ReprocessAdapterAddress>http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype</ReprocessAdapterAddress><Response><__InSite __version="1.1"><__service __serviceType="ProductDeletion"><__errorCode>13500620</__errorCode><__errorDescription>Product ID \'16092023\' does not exist</__errorDescription></__service></__InSite></Response></ErrorLog>',
    emailSent: 0,
    manuallyUnarchived: 0,
  },
  {
    recordDate: "9/16/2023 09:25:47 AM",
    messageType: "irproductmsgtype",
    messageId: "dewret3145-944d-4b50-b7c4-bcfdb24db1f1",
    criticalElement: "16092023",
    criticalElementName: "Product",
    interfaceType: "Inbound",
    adapterType: "Web API",
    adapterName: "productadapter",
    requestType: "DELETE",
    request:
      '<__InSite __version="1.2"><__service __serviceType="ProductDeletion"><__utcOffset>05:30</__utcOffset><__inputData><ProductId>16092023</ProductId></__inputData></__service></__InSite>',
    logType: "Error",
    originalMessageContent:
      '<PRODUCT><IDOC BEGIN="1"><Z1PRODUCT SEGMENT="1"><MATNR>16092023</MATNR><MAKTX>Deleted Product</MAKTX><BKLAS>5000</BKLAS></Z1PRODUCT></IDOC></PRODUCT>',
    errorCode: "13500620",
    error: "Product ID '16092023' does not exist",
    response:
      '<__InSite __version="1.1"><__service __serviceType="ProductDeletion"><__errorCode>13500620</__errorCode><__errorDescription>Product ID \'16092023\' does not exist</__errorDescription></__service></__InSite>',
    adapterEndPoint:
      "http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype",
    reprocessAdapterType: "WebAPI",
    reprocessAdapterAddress:
      "http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype",
    reprocessStatus: 0,
    reprocessBy: null,
    reprocessDate: null,
    errorXML:
      '<ErrorLog><RecordDate>9/16/2023 09:25:47 AM</RecordDate><MessageType>irproductmsgtype</MessageType><MessageID>d5b43145-944d-4b50-b7c4-bcfdb24db1f1</MessageID><CriticalElement>16092023</CriticalElement><CriticalElementName>Product</CriticalElementName><InterfaceType>Inbound</InterfaceType><AdapterType>Web API</AdapterType><AdapterName>productadapter</AdapterName><AdapterEndPoint>http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype</AdapterEndPoint><RequestType>DELETE</RequestType><Request><__InSite __version="1.2"><__service __serviceType="ProductDeletion"><__utcOffset>05:30</__utcOffset><__inputData><ProductId>16092023</ProductId></__inputData></__service></__InSite></Request><LogType>Error</LogType><OriginalMessageContent><PRODUCT><IDOC BEGIN="1"><Z1PRODUCT SEGMENT="1"><MATNR>16092023</MATNR><MAKTX>Deleted Product</MAKTX><BKLAS>5000</BKLAS></Z1PRODUCT></IDOC></PRODUCT></OriginalMessageContent><ErrorCode>13500620</ErrorCode><Error>Product ID \'16092023\' does not exist</Error><ReprocessAdapterType>WebAPI</ReprocessAdapterType><ReprocessAdapterAddress>http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype</ReprocessAdapterAddress><Response><__InSite __version="1.1"><__service __serviceType="ProductDeletion"><__errorCode>13500620</__errorCode><__errorDescription>Product ID \'16092023\' does not exist</__errorDescription></__service></__InSite></Response></ErrorLog>',
    emailSent: 0,
    manuallyUnarchived: 0,
  },
  {
    recordDate: "9/16/2023 09:25:47 AM",
    messageType: "irproductmsgtype",
    messageId: "dewteyr145-944d-4b50-b7c4-bcfdb24db1f1",
    criticalElement: "16092023",
    criticalElementName: "Product",
    interfaceType: "Inbound",
    adapterType: "Web API",
    adapterName: "productadapter",
    requestType: "DELETE",
    request:
      '<__InSite __version="1.2"><__service __serviceType="ProductDeletion"><__utcOffset>05:30</__utcOffset><__inputData><ProductId>16092023</ProductId></__inputData></__service></__InSite>',
    logType: "Error",
    originalMessageContent:
      '<PRODUCT><IDOC BEGIN="1"><Z1PRODUCT SEGMENT="1"><MATNR>16092023</MATNR><MAKTX>Deleted Product</MAKTX><BKLAS>5000</BKLAS></Z1PRODUCT></IDOC></PRODUCT>',
    errorCode: "13500620",
    error: "Product ID '16092023' does not exist",
    response:
      '<__InSite __version="1.1"><__service __serviceType="ProductDeletion"><__errorCode>13500620</__errorCode><__errorDescription>Product ID \'16092023\' does not exist</__errorDescription></__service></__InSite>',
    adapterEndPoint:
      "http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype",
    reprocessAdapterType: "WebAPI",
    reprocessAdapterAddress:
      "http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype",
    reprocessStatus: 0,
    reprocessBy: null,
    reprocessDate: null,
    errorXML:
      '<ErrorLog><RecordDate>9/16/2023 09:25:47 AM</RecordDate><MessageType>irproductmsgtype</MessageType><MessageID>d5b43145-944d-4b50-b7c4-bcfdb24db1f1</MessageID><CriticalElement>16092023</CriticalElement><CriticalElementName>Product</CriticalElementName><InterfaceType>Inbound</InterfaceType><AdapterType>Web API</AdapterType><AdapterName>productadapter</AdapterName><AdapterEndPoint>http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype</AdapterEndPoint><RequestType>DELETE</RequestType><Request><__InSite __version="1.2"><__service __serviceType="ProductDeletion"><__utcOffset>05:30</__utcOffset><__inputData><ProductId>16092023</ProductId></__inputData></__service></__InSite></Request><LogType>Error</LogType><OriginalMessageContent><PRODUCT><IDOC BEGIN="1"><Z1PRODUCT SEGMENT="1"><MATNR>16092023</MATNR><MAKTX>Deleted Product</MAKTX><BKLAS>5000</BKLAS></Z1PRODUCT></IDOC></PRODUCT></OriginalMessageContent><ErrorCode>13500620</ErrorCode><Error>Product ID \'16092023\' does not exist</Error><ReprocessAdapterType>WebAPI</ReprocessAdapterType><ReprocessAdapterAddress>http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype</ReprocessAdapterAddress><Response><__InSite __version="1.1"><__service __serviceType="ProductDeletion"><__errorCode>13500620</__errorCode><__errorDescription>Product ID \'16092023\' does not exist</__errorDescription></__service></__InSite></Response></ErrorLog>',
    emailSent: 0,
    manuallyUnarchived: 0,
  },
  {
    recordDate: "9/16/2023 09:25:47 AM",
    messageType: "irproductmsgtype",
    messageId: "dewrtery43145-944d-4b50-b7c4-bcfdb24db1f1",
    criticalElement: "16092023",
    criticalElementName: "Product",
    interfaceType: "Inbound",
    adapterType: "Web API",
    adapterName: "productadapter",
    requestType: "DELETE",
    request:
      '<__InSite __version="1.2"><__service __serviceType="ProductDeletion"><__utcOffset>05:30</__utcOffset><__inputData><ProductId>16092023</ProductId></__inputData></__service></__InSite>',
    logType: "Error",
    originalMessageContent:
      '<PRODUCT><IDOC BEGIN="1"><Z1PRODUCT SEGMENT="1"><MATNR>16092023</MATNR><MAKTX>Deleted Product</MAKTX><BKLAS>5000</BKLAS></Z1PRODUCT></IDOC></PRODUCT>',
    errorCode: "13500620",
    error: "Product ID '16092023' does not exist",
    response:
      '<__InSite __version="1.1"><__service __serviceType="ProductDeletion"><__errorCode>13500620</__errorCode><__errorDescription>Product ID \'16092023\' does not exist</__errorDescription></__service></__InSite>',
    adapterEndPoint:
      "http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype",
    reprocessAdapterType: "WebAPI",
    reprocessAdapterAddress:
      "http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype",
    reprocessStatus: 0,
    reprocessBy: null,
    reprocessDate: null,
    errorXML:
      '<ErrorLog><RecordDate>9/16/2023 09:25:47 AM</RecordDate><MessageType>irproductmsgtype</MessageType><MessageID>d5b43145-944d-4b50-b7c4-bcfdb24db1f1</MessageID><CriticalElement>16092023</CriticalElement><CriticalElementName>Product</CriticalElementName><InterfaceType>Inbound</InterfaceType><AdapterType>Web API</AdapterType><AdapterName>productadapter</AdapterName><AdapterEndPoint>http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype</AdapterEndPoint><RequestType>DELETE</RequestType><Request><__InSite __version="1.2"><__service __serviceType="ProductDeletion"><__utcOffset>05:30</__utcOffset><__inputData><ProductId>16092023</ProductId></__inputData></__service></__InSite></Request><LogType>Error</LogType><OriginalMessageContent><PRODUCT><IDOC BEGIN="1"><Z1PRODUCT SEGMENT="1"><MATNR>16092023</MATNR><MAKTX>Deleted Product</MAKTX><BKLAS>5000</BKLAS></Z1PRODUCT></IDOC></PRODUCT></OriginalMessageContent><ErrorCode>13500620</ErrorCode><Error>Product ID \'16092023\' does not exist</Error><ReprocessAdapterType>WebAPI</ReprocessAdapterType><ReprocessAdapterAddress>http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype</ReprocessAdapterAddress><Response><__InSite __version="1.1"><__service __serviceType="ProductDeletion"><__errorCode>13500620</__errorCode><__errorDescription>Product ID \'16092023\' does not exist</__errorDescription></__service></__InSite></Response></ErrorLog>',
    emailSent: 0,
    manuallyUnarchived: 0,
  },
  {
    recordDate: "9/16/2023 09:25:47 AM",
    messageType: "irproductmsgtype",
    messageId: "qwerty3145-944d-4b50-b7c4-bcfdb24db1f1",
    criticalElement: "16092023",
    criticalElementName: "Product",
    interfaceType: "Inbound",
    adapterType: "Web API",
    adapterName: "productadapter",
    requestType: "DELETE",
    request:
      '<__InSite __version="1.2"><__service __serviceType="ProductDeletion"><__utcOffset>05:30</__utcOffset><__inputData><ProductId>16092023</ProductId></__inputData></__service></__InSite>',
    logType: "Error",
    originalMessageContent:
      '<PRODUCT><IDOC BEGIN="1"><Z1PRODUCT SEGMENT="1"><MATNR>16092023</MATNR><MAKTX>Deleted Product</MAKTX><BKLAS>5000</BKLAS></Z1PRODUCT></IDOC></PRODUCT>',
    errorCode: "13500620",
    error: "Product ID '16092023' does not exist",
    response:
      '<__InSite __version="1.1"><__service __serviceType="ProductDeletion"><__errorCode>13500620</__errorCode><__errorDescription>Product ID \'16092023\' does not exist</__errorDescription></__service></__InSite>',
    adapterEndPoint:
      "http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype",
    reprocessAdapterType: "WebAPI",
    reprocessAdapterAddress:
      "http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype",
    reprocessStatus: 0,
    reprocessBy: null,
    reprocessDate: null,
    errorXML:
      '<ErrorLog><RecordDate>9/16/2023 09:25:47 AM</RecordDate><MessageType>irproductmsgtype</MessageType><MessageID>d5b43145-944d-4b50-b7c4-bcfdb24db1f1</MessageID><CriticalElement>16092023</CriticalElement><CriticalElementName>Product</CriticalElementName><InterfaceType>Inbound</InterfaceType><AdapterType>Web API</AdapterType><AdapterName>productadapter</AdapterName><AdapterEndPoint>http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype</AdapterEndPoint><RequestType>DELETE</RequestType><Request><__InSite __version="1.2"><__service __serviceType="ProductDeletion"><__utcOffset>05:30</__utcOffset><__inputData><ProductId>16092023</ProductId></__inputData></__service></__InSite></Request><LogType>Error</LogType><OriginalMessageContent><PRODUCT><IDOC BEGIN="1"><Z1PRODUCT SEGMENT="1"><MATNR>16092023</MATNR><MAKTX>Deleted Product</MAKTX><BKLAS>5000</BKLAS></Z1PRODUCT></IDOC></PRODUCT></OriginalMessageContent><ErrorCode>13500620</ErrorCode><Error>Product ID \'16092023\' does not exist</Error><ReprocessAdapterType>WebAPI</ReprocessAdapterType><ReprocessAdapterAddress>http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype</ReprocessAdapterAddress><Response><__InSite __version="1.1"><__service __serviceType="ProductDeletion"><__errorCode>13500620</__errorCode><__errorDescription>Product ID \'16092023\' does not exist</__errorDescription></__service></__InSite></Response></ErrorLog>',
    emailSent: 0,
    manuallyUnarchived: 0,
  },
  {
    recordDate: "9/16/2023 09:25:47 AM",
    messageType: "irproductmsgtype",
    messageId: "d5b43145-944d-4b5000000000-b7c4-bcfdb24db1f1",
    criticalElement: "16092023",
    criticalElementName: "Product",
    interfaceType: "Inbound",
    adapterType: "Web API",
    adapterName: "productadapter",
    requestType: "DELETE",
    request:
      '<__InSite __version="1.2"><__service __serviceType="ProductDeletion"><__utcOffset>05:30</__utcOffset><__inputData><ProductId>16092023</ProductId></__inputData></__service></__InSite>',
    logType: "Error",
    originalMessageContent:
      '<PRODUCT><IDOC BEGIN="1"><Z1PRODUCT SEGMENT="1"><MATNR>16092023</MATNR><MAKTX>Deleted Product</MAKTX><BKLAS>5000</BKLAS></Z1PRODUCT></IDOC></PRODUCT>',
    errorCode: "13500620",
    error: "Product ID '16092023' does not exist",
    response:
      '<__InSite __version="1.1"><__service __serviceType="ProductDeletion"><__errorCode>13500620</__errorCode><__errorDescription>Product ID \'16092023\' does not exist</__errorDescription></__service></__InSite>',
    adapterEndPoint:
      "http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype",
    reprocessAdapterType: "WebAPI",
    reprocessAdapterAddress:
      "http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype",
    reprocessStatus: 0,
    reprocessBy: null,
    reprocessDate: null,
    errorXML:
      '<ErrorLog><RecordDate>9/16/2023 09:25:47 AM</RecordDate><MessageType>irproductmsgtype</MessageType><MessageID>d5b43145-944d-4b50-b7c4-bcfdb24db1f1</MessageID><CriticalElement>16092023</CriticalElement><CriticalElementName>Product</CriticalElementName><InterfaceType>Inbound</InterfaceType><AdapterType>Web API</AdapterType><AdapterName>productadapter</AdapterName><AdapterEndPoint>http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype</AdapterEndPoint><RequestType>DELETE</RequestType><Request><__InSite __version="1.2"><__service __serviceType="ProductDeletion"><__utcOffset>05:30</__utcOffset><__inputData><ProductId>16092023</ProductId></__inputData></__service></__InSite></Request><LogType>Error</LogType><OriginalMessageContent><PRODUCT><IDOC BEGIN="1"><Z1PRODUCT SEGMENT="1"><MATNR>16092023</MATNR><MAKTX>Deleted Product</MAKTX><BKLAS>5000</BKLAS></Z1PRODUCT></IDOC></PRODUCT></OriginalMessageContent><ErrorCode>13500620</ErrorCode><Error>Product ID \'16092023\' does not exist</Error><ReprocessAdapterType>WebAPI</ReprocessAdapterType><ReprocessAdapterAddress>http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype</ReprocessAdapterAddress><Response><__InSite __version="1.1"><__service __serviceType="ProductDeletion"><__errorCode>13500620</__errorCode><__errorDescription>Product ID \'16092023\' does not exist</__errorDescription></__service></__InSite></Response></ErrorLog>',
    emailSent: 0,
    manuallyUnarchived: 0,
  },
  {
    recordDate: "9/16/2023 09:25:47 AM",
    messageType: "irproductmsgtype",
    messageId: "d5b43145-944d-4b50-b7c4retry-bcfdb24db1f1",
    criticalElement: "16092023",
    criticalElementName: "Product",
    interfaceType: "Inbound",
    adapterType: "Web API",
    adapterName: "productadapter",
    requestType: "DELETE",
    request:
      '<__InSite __version="1.2"><__service __serviceType="ProductDeletion"><__utcOffset>05:30</__utcOffset><__inputData><ProductId>16092023</ProductId></__inputData></__service></__InSite>',
    logType: "Error",
    originalMessageContent:
      '<PRODUCT><IDOC BEGIN="1"><Z1PRODUCT SEGMENT="1"><MATNR>16092023</MATNR><MAKTX>Deleted Product</MAKTX><BKLAS>5000</BKLAS></Z1PRODUCT></IDOC></PRODUCT>',
    errorCode: "13500620",
    error: "Product ID '16092023' does not exist",
    response:
      '<__InSite __version="1.1"><__service __serviceType="ProductDeletion"><__errorCode>13500620</__errorCode><__errorDescription>Product ID \'16092023\' does not exist</__errorDescription></__service></__InSite>',
    adapterEndPoint:
      "http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype",
    reprocessAdapterType: "WebAPI",
    reprocessAdapterAddress:
      "http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype",
    reprocessStatus: 0,
    reprocessBy: null,
    reprocessDate: null,
    errorXML:
      '<ErrorLog><RecordDate>9/16/2023 09:25:47 AM</RecordDate><MessageType>irproductmsgtype</MessageType><MessageID>d5b43145-944d-4b50-b7c4-bcfdb24db1f1</MessageID><CriticalElement>16092023</CriticalElement><CriticalElementName>Product</CriticalElementName><InterfaceType>Inbound</InterfaceType><AdapterType>Web API</AdapterType><AdapterName>productadapter</AdapterName><AdapterEndPoint>http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype</AdapterEndPoint><RequestType>DELETE</RequestType><Request><__InSite __version="1.2"><__service __serviceType="ProductDeletion"><__utcOffset>05:30</__utcOffset><__inputData><ProductId>16092023</ProductId></__inputData></__service></__InSite></Request><LogType>Error</LogType><OriginalMessageContent><PRODUCT><IDOC BEGIN="1"><Z1PRODUCT SEGMENT="1"><MATNR>16092023</MATNR><MAKTX>Deleted Product</MAKTX><BKLAS>5000</BKLAS></Z1PRODUCT></IDOC></PRODUCT></OriginalMessageContent><ErrorCode>13500620</ErrorCode><Error>Product ID \'16092023\' does not exist</Error><ReprocessAdapterType>WebAPI</ReprocessAdapterType><ReprocessAdapterAddress>http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype</ReprocessAdapterAddress><Response><__InSite __version="1.1"><__service __serviceType="ProductDeletion"><__errorCode>13500620</__errorCode><__errorDescription>Product ID \'16092023\' does not exist</__errorDescription></__service></__InSite></Response></ErrorLog>',
    emailSent: 0,
    manuallyUnarchived: 0,
  },
  {
    recordDate: "9/16/2023 09:25:47 AM",
    messageType: "irproductmsgtype",
    messageId: "145-944d-4b50-b7c4-bcfdb24db1f1",
    criticalElement: "16092023",
    criticalElementName: "Product",
    interfaceType: "Inbound",
    adapterType: "Web API",
    adapterName: "productadapter",
    requestType: "DELETE",
    request:
      '<__InSite __version="1.2"><__service __serviceType="ProductDeletion"><__utcOffset>05:30</__utcOffset><__inputData><ProductId>16092023</ProductId></__inputData></__service></__InSite>',
    logType: "Error",
    originalMessageContent:
      '<PRODUCT><IDOC BEGIN="1"><Z1PRODUCT SEGMENT="1"><MATNR>16092023</MATNR><MAKTX>Deleted Product</MAKTX><BKLAS>5000</BKLAS></Z1PRODUCT></IDOC></PRODUCT>',
    errorCode: "13500620",
    error: "Product ID '16092023' does not exist",
    response:
      '<__InSite __version="1.1"><__service __serviceType="ProductDeletion"><__errorCode>13500620</__errorCode><__errorDescription>Product ID \'16092023\' does not exist</__errorDescription></__service></__InSite>',
    adapterEndPoint:
      "http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype",
    reprocessAdapterType: "WebAPI",
    reprocessAdapterAddress:
      "http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype",
    reprocessStatus: 0,
    reprocessBy: null,
    reprocessDate: null,
    errorXML:
      '<ErrorLog><RecordDate>9/16/2023 09:25:47 AM</RecordDate><MessageType>irproductmsgtype</MessageType><MessageID>d5b43145-944d-4b50-b7c4-bcfdb24db1f1</MessageID><CriticalElement>16092023</CriticalElement><CriticalElementName>Product</CriticalElementName><InterfaceType>Inbound</InterfaceType><AdapterType>Web API</AdapterType><AdapterName>productadapter</AdapterName><AdapterEndPoint>http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype</AdapterEndPoint><RequestType>DELETE</RequestType><Request><__InSite __version="1.2"><__service __serviceType="ProductDeletion"><__utcOffset>05:30</__utcOffset><__inputData><ProductId>16092023</ProductId></__inputData></__service></__InSite></Request><LogType>Error</LogType><OriginalMessageContent><PRODUCT><IDOC BEGIN="1"><Z1PRODUCT SEGMENT="1"><MATNR>16092023</MATNR><MAKTX>Deleted Product</MAKTX><BKLAS>5000</BKLAS></Z1PRODUCT></IDOC></PRODUCT></OriginalMessageContent><ErrorCode>13500620</ErrorCode><Error>Product ID \'16092023\' does not exist</Error><ReprocessAdapterType>WebAPI</ReprocessAdapterType><ReprocessAdapterAddress>http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype</ReprocessAdapterAddress><Response><__InSite __version="1.1"><__service __serviceType="ProductDeletion"><__errorCode>13500620</__errorCode><__errorDescription>Product ID \'16092023\' does not exist</__errorDescription></__service></__InSite></Response></ErrorLog>',
    emailSent: 0,
    manuallyUnarchived: 0,
  },
  {
    recordDate: "9/16/2023 09:25:47 AM",
    messageType: "irproductmsgtype",
    messageId: "5b43wewr145-944d-4b50-b7c4-bcfdb24db1f1",
    criticalElement: "16092023",
    criticalElementName: "Product",
    interfaceType: "Inbound",
    adapterType: "Web API",
    adapterName: "productadapter",
    requestType: "DELETE",
    request:
      '<__InSite __version="1.2"><__service __serviceType="ProductDeletion"><__utcOffset>05:30</__utcOffset><__inputData><ProductId>16092023</ProductId></__inputData></__service></__InSite>',
    logType: "Error",
    originalMessageContent:
      '<PRODUCT><IDOC BEGIN="1"><Z1PRODUCT SEGMENT="1"><MATNR>16092023</MATNR><MAKTX>Deleted Product</MAKTX><BKLAS>5000</BKLAS></Z1PRODUCT></IDOC></PRODUCT>',
    errorCode: "13500620",
    error: "Product ID '16092023' does not exist",
    response:
      '<__InSite __version="1.1"><__service __serviceType="ProductDeletion"><__errorCode>13500620</__errorCode><__errorDescription>Product ID \'16092023\' does not exist</__errorDescription></__service></__InSite>',
    adapterEndPoint:
      "http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype",
    reprocessAdapterType: "WebAPI",
    reprocessAdapterAddress:
      "http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype",
    reprocessStatus: 0,
    reprocessBy: null,
    reprocessDate: null,
    errorXML:
      '<ErrorLog><RecordDate>9/16/2023 09:25:47 AM</RecordDate><MessageType>irproductmsgtype</MessageType><MessageID>d5b43145-944d-4b50-b7c4-bcfdb24db1f1</MessageID><CriticalElement>16092023</CriticalElement><CriticalElementName>Product</CriticalElementName><InterfaceType>Inbound</InterfaceType><AdapterType>Web API</AdapterType><AdapterName>productadapter</AdapterName><AdapterEndPoint>http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype</AdapterEndPoint><RequestType>DELETE</RequestType><Request><__InSite __version="1.2"><__service __serviceType="ProductDeletion"><__utcOffset>05:30</__utcOffset><__inputData><ProductId>16092023</ProductId></__inputData></__service></__InSite></Request><LogType>Error</LogType><OriginalMessageContent><PRODUCT><IDOC BEGIN="1"><Z1PRODUCT SEGMENT="1"><MATNR>16092023</MATNR><MAKTX>Deleted Product</MAKTX><BKLAS>5000</BKLAS></Z1PRODUCT></IDOC></PRODUCT></OriginalMessageContent><ErrorCode>13500620</ErrorCode><Error>Product ID \'16092023\' does not exist</Error><ReprocessAdapterType>WebAPI</ReprocessAdapterType><ReprocessAdapterAddress>http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype</ReprocessAdapterAddress><Response><__InSite __version="1.1"><__service __serviceType="ProductDeletion"><__errorCode>13500620</__errorCode><__errorDescription>Product ID \'16092023\' does not exist</__errorDescription></__service></__InSite></Response></ErrorLog>',
    emailSent: 0,
    manuallyUnarchived: 0,
  },
  {
    recordDate: "9/16/2023 09:25:47 AM",
    messageType: "irproductmsgtype",
    messageId: "b43wqer24145-944d-4b50-b7c4-bcfdb24db1f1",
    criticalElement: "16092023",
    criticalElementName: "Product",
    interfaceType: "Inbound",
    adapterType: "Web API",
    adapterName: "productadapter",
    requestType: "DELETE",
    request:
      '<__InSite __version="1.2"><__service __serviceType="ProductDeletion"><__utcOffset>05:30</__utcOffset><__inputData><ProductId>16092023</ProductId></__inputData></__service></__InSite>',
    logType: "Error",
    originalMessageContent:
      '<PRODUCT><IDOC BEGIN="1"><Z1PRODUCT SEGMENT="1"><MATNR>16092023</MATNR><MAKTX>Deleted Product</MAKTX><BKLAS>5000</BKLAS></Z1PRODUCT></IDOC></PRODUCT>',
    errorCode: "13500620",
    error: "Product ID '16092023' does not exist",
    response:
      '<__InSite __version="1.1"><__service __serviceType="ProductDeletion"><__errorCode>13500620</__errorCode><__errorDescription>Product ID \'16092023\' does not exist</__errorDescription></__service></__InSite>',
    adapterEndPoint:
      "http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype",
    reprocessAdapterType: "WebAPI",
    reprocessAdapterAddress:
      "http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype",
    reprocessStatus: 0,
    reprocessBy: null,
    reprocessDate: null,
    errorXML:
      '<ErrorLog><RecordDate>9/16/2023 09:25:47 AM</RecordDate><MessageType>irproductmsgtype</MessageType><MessageID>d5b43145-944d-4b50-b7c4-bcfdb24db1f1</MessageID><CriticalElement>16092023</CriticalElement><CriticalElementName>Product</CriticalElementName><InterfaceType>Inbound</InterfaceType><AdapterType>Web API</AdapterType><AdapterName>productadapter</AdapterName><AdapterEndPoint>http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype</AdapterEndPoint><RequestType>DELETE</RequestType><Request><__InSite __version="1.2"><__service __serviceType="ProductDeletion"><__utcOffset>05:30</__utcOffset><__inputData><ProductId>16092023</ProductId></__inputData></__service></__InSite></Request><LogType>Error</LogType><OriginalMessageContent><PRODUCT><IDOC BEGIN="1"><Z1PRODUCT SEGMENT="1"><MATNR>16092023</MATNR><MAKTX>Deleted Product</MAKTX><BKLAS>5000</BKLAS></Z1PRODUCT></IDOC></PRODUCT></OriginalMessageContent><ErrorCode>13500620</ErrorCode><Error>Product ID \'16092023\' does not exist</Error><ReprocessAdapterType>WebAPI</ReprocessAdapterType><ReprocessAdapterAddress>http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype</ReprocessAdapterAddress><Response><__InSite __version="1.1"><__service __serviceType="ProductDeletion"><__errorCode>13500620</__errorCode><__errorDescription>Product ID \'16092023\' does not exist</__errorDescription></__service></__InSite></Response></ErrorLog>',
    emailSent: 0,
    manuallyUnarchived: 0,
  },
  {
    recordDate: "9/16/2023 09:25:47 AM",
    messageType: "irproductmsgtype",
    messageId: "d5dsgfhb43145-94dsfg4d-4b50-b7c4-bcfdb24db1f1",
    criticalElement: "16092023",
    criticalElementName: "Product",
    interfaceType: "Inbound",
    adapterType: "Web API",
    adapterName: "productadapter",
    requestType: "DELETE",
    request:
      '<__InSite __version="1.2"><__service __serviceType="ProductDeletion"><__utcOffset>05:30</__utcOffset><__inputData><ProductId>16092023</ProductId></__inputData></__service></__InSite>',
    logType: "Error",
    originalMessageContent:
      '<PRODUCT><IDOC BEGIN="1"><Z1PRODUCT SEGMENT="1"><MATNR>16092023</MATNR><MAKTX>Deleted Product</MAKTX><BKLAS>5000</BKLAS></Z1PRODUCT></IDOC></PRODUCT>',
    errorCode: "13500620",
    error: "Product ID '16092023' does not exist",
    response:
      '<__InSite __version="1.1"><__service __serviceType="ProductDeletion"><__errorCode>13500620</__errorCode><__errorDescription>Product ID \'16092023\' does not exist</__errorDescription></__service></__InSite>',
    adapterEndPoint:
      "http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype",
    reprocessAdapterType: "WebAPI",
    reprocessAdapterAddress:
      "http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype",
    reprocessStatus: 0,
    reprocessBy: null,
    reprocessDate: null,
    errorXML:
      '<ErrorLog><RecordDate>9/16/2023 09:25:47 AM</RecordDate><MessageType>irproductmsgtype</MessageType><MessageID>d5b43145-944d-4b50-b7c4-bcfdb24db1f1</MessageID><CriticalElement>16092023</CriticalElement><CriticalElementName>Product</CriticalElementName><InterfaceType>Inbound</InterfaceType><AdapterType>Web API</AdapterType><AdapterName>productadapter</AdapterName><AdapterEndPoint>http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype</AdapterEndPoint><RequestType>DELETE</RequestType><Request><__InSite __version="1.2"><__service __serviceType="ProductDeletion"><__utcOffset>05:30</__utcOffset><__inputData><ProductId>16092023</ProductId></__inputData></__service></__InSite></Request><LogType>Error</LogType><OriginalMessageContent><PRODUCT><IDOC BEGIN="1"><Z1PRODUCT SEGMENT="1"><MATNR>16092023</MATNR><MAKTX>Deleted Product</MAKTX><BKLAS>5000</BKLAS></Z1PRODUCT></IDOC></PRODUCT></OriginalMessageContent><ErrorCode>13500620</ErrorCode><Error>Product ID \'16092023\' does not exist</Error><ReprocessAdapterType>WebAPI</ReprocessAdapterType><ReprocessAdapterAddress>http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype</ReprocessAdapterAddress><Response><__InSite __version="1.1"><__service __serviceType="ProductDeletion"><__errorCode>13500620</__errorCode><__errorDescription>Product ID \'16092023\' does not exist</__errorDescription></__service></__InSite></Response></ErrorLog>',
    emailSent: 0,
    manuallyUnarchived: 0,
  },
  {
    recordDate: "9/16/2023 09:25:47 AM",
    messageType: "irproductmsgtype",
    messageId: "d5b43145-944d-4bretyuhgfdf50-b7c4-bcfdb24db1f1",
    criticalElement: "16092023",
    criticalElementName: "Product",
    interfaceType: "Inbound",
    adapterType: "Web API",
    adapterName: "productadapter",
    requestType: "DELETE",
    request:
      '<__InSite __version="1.2"><__service __serviceType="ProductDeletion"><__utcOffset>05:30</__utcOffset><__inputData><ProductId>16092023</ProductId></__inputData></__service></__InSite>',
    logType: "Error",
    originalMessageContent:
      '<PRODUCT><IDOC BEGIN="1"><Z1PRODUCT SEGMENT="1"><MATNR>16092023</MATNR><MAKTX>Deleted Product</MAKTX><BKLAS>5000</BKLAS></Z1PRODUCT></IDOC></PRODUCT>',
    errorCode: "13500620",
    error: "Product ID '16092023' does not exist",
    response:
      '<__InSite __version="1.1"><__service __serviceType="ProductDeletion"><__errorCode>13500620</__errorCode><__errorDescription>Product ID \'16092023\' does not exist</__errorDescription></__service></__InSite>',
    adapterEndPoint:
      "http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype",
    reprocessAdapterType: "WebAPI",
    reprocessAdapterAddress:
      "http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype",
    reprocessStatus: 0,
    reprocessBy: null,
    reprocessDate: null,
    errorXML:
      '<ErrorLog><RecordDate>9/16/2023 09:25:47 AM</RecordDate><MessageType>irproductmsgtype</MessageType><MessageID>d5b43145-944d-4b50-b7c4-bcfdb24db1f1</MessageID><CriticalElement>16092023</CriticalElement><CriticalElementName>Product</CriticalElementName><InterfaceType>Inbound</InterfaceType><AdapterType>Web API</AdapterType><AdapterName>productadapter</AdapterName><AdapterEndPoint>http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype</AdapterEndPoint><RequestType>DELETE</RequestType><Request><__InSite __version="1.2"><__service __serviceType="ProductDeletion"><__utcOffset>05:30</__utcOffset><__inputData><ProductId>16092023</ProductId></__inputData></__service></__InSite></Request><LogType>Error</LogType><OriginalMessageContent><PRODUCT><IDOC BEGIN="1"><Z1PRODUCT SEGMENT="1"><MATNR>16092023</MATNR><MAKTX>Deleted Product</MAKTX><BKLAS>5000</BKLAS></Z1PRODUCT></IDOC></PRODUCT></OriginalMessageContent><ErrorCode>13500620</ErrorCode><Error>Product ID \'16092023\' does not exist</Error><ReprocessAdapterType>WebAPI</ReprocessAdapterType><ReprocessAdapterAddress>http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype</ReprocessAdapterAddress><Response><__InSite __version="1.1"><__service __serviceType="ProductDeletion"><__errorCode>13500620</__errorCode><__errorDescription>Product ID \'16092023\' does not exist</__errorDescription></__service></__InSite></Response></ErrorLog>',
    emailSent: 0,
    manuallyUnarchived: 0,
  },
  {
    recordDate: "9/16/2023 09:25:47 AM",
    messageType: "irproductmsgtype",
    messageId: "d5dshgb43145-94sdf4d-4b50-b7c4-bcfdb24db1f1",
    criticalElement: "16092023",
    criticalElementName: "Product",
    interfaceType: "Inbound",
    adapterType: "Web API",
    adapterName: "productadapter",
    requestType: "DELETE",
    request:
      '<__InSite __version="1.2"><__service __serviceType="ProductDeletion"><__utcOffset>05:30</__utcOffset><__inputData><ProductId>16092023</ProductId></__inputData></__service></__InSite>',
    logType: "Error",
    originalMessageContent:
      '<PRODUCT><IDOC BEGIN="1"><Z1PRODUCT SEGMENT="1"><MATNR>16092023</MATNR><MAKTX>Deleted Product</MAKTX><BKLAS>5000</BKLAS></Z1PRODUCT></IDOC></PRODUCT>',
    errorCode: "13500620",
    error: "Product ID '16092023' does not exist",
    response:
      '<__InSite __version="1.1"><__service __serviceType="ProductDeletion"><__errorCode>13500620</__errorCode><__errorDescription>Product ID \'16092023\' does not exist</__errorDescription></__service></__InSite>',
    adapterEndPoint:
      "http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype",
    reprocessAdapterType: "WebAPI",
    reprocessAdapterAddress:
      "http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype",
    reprocessStatus: 0,
    reprocessBy: null,
    reprocessDate: null,
    errorXML:
      '<ErrorLog><RecordDate>9/16/2023 09:25:47 AM</RecordDate><MessageType>irproductmsgtype</MessageType><MessageID>d5b43145-944d-4b50-b7c4-bcfdb24db1f1</MessageID><CriticalElement>16092023</CriticalElement><CriticalElementName>Product</CriticalElementName><InterfaceType>Inbound</InterfaceType><AdapterType>Web API</AdapterType><AdapterName>productadapter</AdapterName><AdapterEndPoint>http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype</AdapterEndPoint><RequestType>DELETE</RequestType><Request><__InSite __version="1.2"><__service __serviceType="ProductDeletion"><__utcOffset>05:30</__utcOffset><__inputData><ProductId>16092023</ProductId></__inputData></__service></__InSite></Request><LogType>Error</LogType><OriginalMessageContent><PRODUCT><IDOC BEGIN="1"><Z1PRODUCT SEGMENT="1"><MATNR>16092023</MATNR><MAKTX>Deleted Product</MAKTX><BKLAS>5000</BKLAS></Z1PRODUCT></IDOC></PRODUCT></OriginalMessageContent><ErrorCode>13500620</ErrorCode><Error>Product ID \'16092023\' does not exist</Error><ReprocessAdapterType>WebAPI</ReprocessAdapterType><ReprocessAdapterAddress>http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype</ReprocessAdapterAddress><Response><__InSite __version="1.1"><__service __serviceType="ProductDeletion"><__errorCode>13500620</__errorCode><__errorDescription>Product ID \'16092023\' does not exist</__errorDescription></__service></__InSite></Response></ErrorLog>',
    emailSent: 0,
    manuallyUnarchived: 0,
  },
  {
    recordDate: "9/16/2023 09:25:47 AM",
    messageType: "irproductmsgtype",
    messageId: "d5b431345645-944d-sfgh4b50-b7c4-bcfdb24db1f1",
    criticalElement: "16092023",
    criticalElementName: "Product",
    interfaceType: "Inbound",
    adapterType: "Web API",
    adapterName: "productadapter",
    requestType: "DELETE",
    request:
      '<__InSite __version="1.2"><__service __serviceType="ProductDeletion"><__utcOffset>05:30</__utcOffset><__inputData><ProductId>16092023</ProductId></__inputData></__service></__InSite>',
    logType: "Error",
    originalMessageContent:
      '<PRODUCT><IDOC BEGIN="1"><Z1PRODUCT SEGMENT="1"><MATNR>16092023</MATNR><MAKTX>Deleted Product</MAKTX><BKLAS>5000</BKLAS></Z1PRODUCT></IDOC></PRODUCT>',
    errorCode: "13500620",
    error: "Product ID '16092023' does not exist",
    response:
      '<__InSite __version="1.1"><__service __serviceType="ProductDeletion"><__errorCode>13500620</__errorCode><__errorDescription>Product ID \'16092023\' does not exist</__errorDescription></__service></__InSite>',
    adapterEndPoint:
      "http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype",
    reprocessAdapterType: "WebAPI",
    reprocessAdapterAddress:
      "http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype",
    reprocessStatus: 0,
    reprocessBy: null,
    reprocessDate: null,
    errorXML:
      '<ErrorLog><RecordDate>9/16/2023 09:25:47 AM</RecordDate><MessageType>irproductmsgtype</MessageType><MessageID>d5b43145-944d-4b50-b7c4-bcfdb24db1f1</MessageID><CriticalElement>16092023</CriticalElement><CriticalElementName>Product</CriticalElementName><InterfaceType>Inbound</InterfaceType><AdapterType>Web API</AdapterType><AdapterName>productadapter</AdapterName><AdapterEndPoint>http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype</AdapterEndPoint><RequestType>DELETE</RequestType><Request><__InSite __version="1.2"><__service __serviceType="ProductDeletion"><__utcOffset>05:30</__utcOffset><__inputData><ProductId>16092023</ProductId></__inputData></__service></__InSite></Request><LogType>Error</LogType><OriginalMessageContent><PRODUCT><IDOC BEGIN="1"><Z1PRODUCT SEGMENT="1"><MATNR>16092023</MATNR><MAKTX>Deleted Product</MAKTX><BKLAS>5000</BKLAS></Z1PRODUCT></IDOC></PRODUCT></OriginalMessageContent><ErrorCode>13500620</ErrorCode><Error>Product ID \'16092023\' does not exist</Error><ReprocessAdapterType>WebAPI</ReprocessAdapterType><ReprocessAdapterAddress>http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype</ReprocessAdapterAddress><Response><__InSite __version="1.1"><__service __serviceType="ProductDeletion"><__errorCode>13500620</__errorCode><__errorDescription>Product ID \'16092023\' does not exist</__errorDescription></__service></__InSite></Response></ErrorLog>',
    emailSent: 0,
    manuallyUnarchived: 0,
  },
  {
    recordDate: "9/16/2023 09:25:47 AM",
    messageType: "irproductmsgtype",
    messageId: "d5b43145-9987d-4b50-b7c4-bcfdb24db1f1",
    criticalElement: "16092023",
    criticalElementName: "Product",
    interfaceType: "Inbound",
    adapterType: "Web API",
    adapterName: "productadapter",
    requestType: "DELETE",
    request:
      '<__InSite __version="1.2"><__service __serviceType="ProductDeletion"><__utcOffset>05:30</__utcOffset><__inputData><ProductId>16092023</ProductId></__inputData></__service></__InSite>',
    logType: "Error",
    originalMessageContent:
      '<PRODUCT><IDOC BEGIN="1"><Z1PRODUCT SEGMENT="1"><MATNR>16092023</MATNR><MAKTX>Deleted Product</MAKTX><BKLAS>5000</BKLAS></Z1PRODUCT></IDOC></PRODUCT>',
    errorCode: "13500620",
    error: "Product ID '16092023' does not exist",
    response:
      '<__InSite __version="1.1"><__service __serviceType="ProductDeletion"><__errorCode>13500620</__errorCode><__errorDescription>Product ID \'16092023\' does not exist</__errorDescription></__service></__InSite>',
    adapterEndPoint:
      "http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype",
    reprocessAdapterType: "WebAPI",
    reprocessAdapterAddress:
      "http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype",
    reprocessStatus: 0,
    reprocessBy: null,
    reprocessDate: null,
    errorXML:
      '<ErrorLog><RecordDate>9/16/2023 09:25:47 AM</RecordDate><MessageType>irproductmsgtype</MessageType><MessageID>d5b43145-944d-4b50-b7c4-bcfdb24db1f1</MessageID><CriticalElement>16092023</CriticalElement><CriticalElementName>Product</CriticalElementName><InterfaceType>Inbound</InterfaceType><AdapterType>Web API</AdapterType><AdapterName>productadapter</AdapterName><AdapterEndPoint>http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype</AdapterEndPoint><RequestType>DELETE</RequestType><Request><__InSite __version="1.2"><__service __serviceType="ProductDeletion"><__utcOffset>05:30</__utcOffset><__inputData><ProductId>16092023</ProductId></__inputData></__service></__InSite></Request><LogType>Error</LogType><OriginalMessageContent><PRODUCT><IDOC BEGIN="1"><Z1PRODUCT SEGMENT="1"><MATNR>16092023</MATNR><MAKTX>Deleted Product</MAKTX><BKLAS>5000</BKLAS></Z1PRODUCT></IDOC></PRODUCT></OriginalMessageContent><ErrorCode>13500620</ErrorCode><Error>Product ID \'16092023\' does not exist</Error><ReprocessAdapterType>WebAPI</ReprocessAdapterType><ReprocessAdapterAddress>http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype</ReprocessAdapterAddress><Response><__InSite __version="1.1"><__service __serviceType="ProductDeletion"><__errorCode>13500620</__errorCode><__errorDescription>Product ID \'16092023\' does not exist</__errorDescription></__service></__InSite></Response></ErrorLog>',
    emailSent: 0,
    manuallyUnarchived: 0,
  },
  {
    recordDate: "9/16/2023 09:25:47 AM",
    messageType: "irproductmsgtype",
    messageId: "d5b43145-944d-4b50-b7c4-bcfdb24098989db1f1",
    criticalElement: "16092023",
    criticalElementName: "Product",
    interfaceType: "Inbound",
    adapterType: "Web API",
    adapterName: "productadapter",
    requestType: "DELETE",
    request:
      '<__InSite __version="1.2"><__service __serviceType="ProductDeletion"><__utcOffset>05:30</__utcOffset><__inputData><ProductId>16092023</ProductId></__inputData></__service></__InSite>',
    logType: "Error",
    originalMessageContent:
      '<PRODUCT><IDOC BEGIN="1"><Z1PRODUCT SEGMENT="1"><MATNR>16092023</MATNR><MAKTX>Deleted Product</MAKTX><BKLAS>5000</BKLAS></Z1PRODUCT></IDOC></PRODUCT>',
    errorCode: "13500620",
    error: "Product ID '16092023' does not exist",
    response:
      '<__InSite __version="1.1"><__service __serviceType="ProductDeletion"><__errorCode>13500620</__errorCode><__errorDescription>Product ID \'16092023\' does not exist</__errorDescription></__service></__InSite>',
    adapterEndPoint:
      "http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype",
    reprocessAdapterType: "WebAPI",
    reprocessAdapterAddress:
      "http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype",
    reprocessStatus: 0,
    reprocessBy: null,
    reprocessDate: null,
    errorXML:
      '<ErrorLog><RecordDate>9/16/2023 09:25:47 AM</RecordDate><MessageType>irproductmsgtype</MessageType><MessageID>d5b43145-944d-4b50-b7c4-bcfdb24db1f1</MessageID><CriticalElement>16092023</CriticalElement><CriticalElementName>Product</CriticalElementName><InterfaceType>Inbound</InterfaceType><AdapterType>Web API</AdapterType><AdapterName>productadapter</AdapterName><AdapterEndPoint>http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype</AdapterEndPoint><RequestType>DELETE</RequestType><Request><__InSite __version="1.2"><__service __serviceType="ProductDeletion"><__utcOffset>05:30</__utcOffset><__inputData><ProductId>16092023</ProductId></__inputData></__service></__InSite></Request><LogType>Error</LogType><OriginalMessageContent><PRODUCT><IDOC BEGIN="1"><Z1PRODUCT SEGMENT="1"><MATNR>16092023</MATNR><MAKTX>Deleted Product</MAKTX><BKLAS>5000</BKLAS></Z1PRODUCT></IDOC></PRODUCT></OriginalMessageContent><ErrorCode>13500620</ErrorCode><Error>Product ID \'16092023\' does not exist</Error><ReprocessAdapterType>WebAPI</ReprocessAdapterType><ReprocessAdapterAddress>http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype</ReprocessAdapterAddress><Response><__InSite __version="1.1"><__service __serviceType="ProductDeletion"><__errorCode>13500620</__errorCode><__errorDescription>Product ID \'16092023\' does not exist</__errorDescription></__service></__InSite></Response></ErrorLog>',
    emailSent: 0,
    manuallyUnarchived: 0,
  },
  {
    recordDate: "9/16/2023 09:25:47 AM",
    messageType: "irproductmsgtype",
    messageId: "d5b43fhg56145-94bghjkk4d-4b50-b7c4-bcfdb24db1f1",
    criticalElement: "16092023",
    criticalElementName: "Product",
    interfaceType: "Inbound",
    adapterType: "Web API",
    adapterName: "productadapter",
    requestType: "DELETE",
    request:
      '<__InSite __version="1.2"><__service __serviceType="ProductDeletion"><__utcOffset>05:30</__utcOffset><__inputData><ProductId>16092023</ProductId></__inputData></__service></__InSite>',
    logType: "Error",
    originalMessageContent:
      '<PRODUCT><IDOC BEGIN="1"><Z1PRODUCT SEGMENT="1"><MATNR>16092023</MATNR><MAKTX>Deleted Product</MAKTX><BKLAS>5000</BKLAS></Z1PRODUCT></IDOC></PRODUCT>',
    errorCode: "13500620",
    error: "Product ID '16092023' does not exist",
    response:
      '<__InSite __version="1.1"><__service __serviceType="ProductDeletion"><__errorCode>13500620</__errorCode><__errorDescription>Product ID \'16092023\' does not exist</__errorDescription></__service></__InSite>',
    adapterEndPoint:
      "http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype",
    reprocessAdapterType: "WebAPI",
    reprocessAdapterAddress:
      "http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype",
    reprocessStatus: 0,
    reprocessBy: null,
    reprocessDate: null,
    errorXML:
      '<ErrorLog><RecordDate>9/16/2023 09:25:47 AM</RecordDate><MessageType>irproductmsgtype</MessageType><MessageID>d5b43145-944d-4b50-b7c4-bcfdb24db1f1</MessageID><CriticalElement>16092023</CriticalElement><CriticalElementName>Product</CriticalElementName><InterfaceType>Inbound</InterfaceType><AdapterType>Web API</AdapterType><AdapterName>productadapter</AdapterName><AdapterEndPoint>http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype</AdapterEndPoint><RequestType>DELETE</RequestType><Request><__InSite __version="1.2"><__service __serviceType="ProductDeletion"><__utcOffset>05:30</__utcOffset><__inputData><ProductId>16092023</ProductId></__inputData></__service></__InSite></Request><LogType>Error</LogType><OriginalMessageContent><PRODUCT><IDOC BEGIN="1"><Z1PRODUCT SEGMENT="1"><MATNR>16092023</MATNR><MAKTX>Deleted Product</MAKTX><BKLAS>5000</BKLAS></Z1PRODUCT></IDOC></PRODUCT></OriginalMessageContent><ErrorCode>13500620</ErrorCode><Error>Product ID \'16092023\' does not exist</Error><ReprocessAdapterType>WebAPI</ReprocessAdapterType><ReprocessAdapterAddress>http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype</ReprocessAdapterAddress><Response><__InSite __version="1.1"><__service __serviceType="ProductDeletion"><__errorCode>13500620</__errorCode><__errorDescription>Product ID \'16092023\' does not exist</__errorDescription></__service></__InSite></Response></ErrorLog>',
    emailSent: 0,
    manuallyUnarchived: 0,
  },
  {
    recordDate: "9/16/2023 09:25:47 AM",
    messageType: "irproductmsgtype",
    messageId: "d5b43145-944rtytrd-4b50-b7c4-bcfdb24db1f1",
    criticalElement: "16092023",
    criticalElementName: "Product",
    interfaceType: "Inbound",
    adapterType: "Web API",
    adapterName: "productadapter",
    requestType: "DELETE",
    request:
      '<__InSite __version="1.2"><__service __serviceType="ProductDeletion"><__utcOffset>05:30</__utcOffset><__inputData><ProductId>16092023</ProductId></__inputData></__service></__InSite>',
    logType: "Error",
    originalMessageContent:
      '<PRODUCT><IDOC BEGIN="1"><Z1PRODUCT SEGMENT="1"><MATNR>16092023</MATNR><MAKTX>Deleted Product</MAKTX><BKLAS>5000</BKLAS></Z1PRODUCT></IDOC></PRODUCT>',
    errorCode: "13500620",
    error: "Product ID '16092023' does not exist",
    response:
      '<__InSite __version="1.1"><__service __serviceType="ProductDeletion"><__errorCode>13500620</__errorCode><__errorDescription>Product ID \'16092023\' does not exist</__errorDescription></__service></__InSite>',
    adapterEndPoint:
      "http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype",
    reprocessAdapterType: "WebAPI",
    reprocessAdapterAddress:
      "http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype",
    reprocessStatus: 0,
    reprocessBy: null,
    reprocessDate: null,
    errorXML:
      '<ErrorLog><RecordDate>9/16/2023 09:25:47 AM</RecordDate><MessageType>irproductmsgtype</MessageType><MessageID>d5b43145-944d-4b50-b7c4-bcfdb24db1f1</MessageID><CriticalElement>16092023</CriticalElement><CriticalElementName>Product</CriticalElementName><InterfaceType>Inbound</InterfaceType><AdapterType>Web API</AdapterType><AdapterName>productadapter</AdapterName><AdapterEndPoint>http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype</AdapterEndPoint><RequestType>DELETE</RequestType><Request><__InSite __version="1.2"><__service __serviceType="ProductDeletion"><__utcOffset>05:30</__utcOffset><__inputData><ProductId>16092023</ProductId></__inputData></__service></__InSite></Request><LogType>Error</LogType><OriginalMessageContent><PRODUCT><IDOC BEGIN="1"><Z1PRODUCT SEGMENT="1"><MATNR>16092023</MATNR><MAKTX>Deleted Product</MAKTX><BKLAS>5000</BKLAS></Z1PRODUCT></IDOC></PRODUCT></OriginalMessageContent><ErrorCode>13500620</ErrorCode><Error>Product ID \'16092023\' does not exist</Error><ReprocessAdapterType>WebAPI</ReprocessAdapterType><ReprocessAdapterAddress>http://192.168.1.88:8000/productapi/messages?type=irproductmsgtype</ReprocessAdapterAddress><Response><__InSite __version="1.1"><__service __serviceType="ProductDeletion"><__errorCode>13500620</__errorCode><__errorDescription>Product ID \'16092023\' does not exist</__errorDescription></__service></__InSite></Response></ErrorLog>',
    emailSent: 0,
    manuallyUnarchived: 0,
  },
];
export default data;
