const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => {
            console.error("Error in asyncHandler:", err);
            res.status(500).json({ message: "Internal Server Error" });
        });
    };  
}

export{asyncHandler}



/*const asyncHandler = (fn) =>async(req, res, next) => {
    
    try {
        await fn(req, res, next);
    } catch (error) {   
        console.error("Error in asyncHandler:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
  next(); */