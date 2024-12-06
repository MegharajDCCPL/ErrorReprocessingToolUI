const ErrorLogger = (error) => {
  console.error("Error Log: ", error);
  console.error("Stack Trace: ", error.stack);
};

export default ErrorLogger;
