// Checks if user is admin
export const isAdmin = (req, res, next) => {
    if (req.user.role !== "admin") {
        return res.status(403).json({ message: "Access denied. Admins only." });
    }
    next();
};

// Admin approves or rejects role requests
export const approveOrRejectRole = (action) => {
    return (req, res, next) => {
        const validActions = ["approve", "reject"];

        if (!validActions.includes(action)) {
            return res.status(400).json({ message: "Invalid action. Must be 'approve' or 'reject'." });
        }

        // Attach the action to the request object
        req.roleAction = action;
        next();
    };
};
