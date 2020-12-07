const getErrorType = (error) => {
  if (error.response) {
    return error.response;
  } if (error.request) {
    return error.request;
  }
  return error;
};

const errorHadler = (error) => {
  const statusCode = error.status || 500;
  let statusMessage = '';

  if (error.response) {
    statusMessage = error.response.data.message;
  }

  if (error.message && !statusMessage) {
    statusMessage = error.message;
  }

  if (error.data && !statusMessage) {
    statusMessage = error.data.message || error.data.error;
  }

  if (!statusMessage) {
    statusMessage = 'Internal server error';
  }
  const errorData = {
    error: true,
    status: statusCode,
    message: statusMessage,
    errorType: getErrorType(error),
  };

  return errorData.message;
};

export default errorHadler;
