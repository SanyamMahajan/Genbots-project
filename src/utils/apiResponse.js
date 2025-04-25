class ApiResponse{
    constructor(statusCode, message="Success", data=null, errors=[], success=true) {
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
        this.errors = errors;
        this.success = success;
    }   
}