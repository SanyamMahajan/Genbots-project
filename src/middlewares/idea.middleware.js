export const isUser = (req, res, next) => {
    if (req.user.role !== "user") {
        return res.status(403).json({ message: "Access denied. Users only." });
    }
    next();
};

export const isInvestor = (req, res, next) => {
    if (req.user.role !== "investor") {
        return res.status(403).json({ message: "Access denied. Investors only." });
    }
    next();
};
