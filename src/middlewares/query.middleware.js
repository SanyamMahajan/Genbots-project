export const isUser = (req, res, next) => {
    if (req.user.role !== "user") {
        return res.status(403).json({ message: "Access denied. Only Users allowed." });
    }
    next();
};

export const isMentor = (req, res, next) => {
    if (req.user.role !== "mentor") {
        return res.status(403).json({ message: "Access denied. Only Mentors allowed." });
    }
    next();
};
