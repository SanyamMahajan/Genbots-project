class ApiError extends Error {
    constructor(
      message = "Something went wrong",
      statusCode = 500,
      errors = [],
      stack = ""
    ) {
      super(message);
      this.statusCode = statusCode;
      this.data = null;
      this.success = false;
      this.errors = errors;
      this.isOperational = true;
  
      if (stack) {
        this.stack = stack;
      } else {
        Error.captureStackTrace(this, this.constructor);
      }
    }
  }
  
  export { ApiError };
  