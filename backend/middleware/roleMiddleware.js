const jwt = require("jsonwebtoken");
const Student = require("../models/studentModel");
const Educator = require("../models/educatorModel");
const Institution = require("../models/institutionModel");
const Admin = require("../models/adminModel");

const JWT_SECRET = process.env.JWT_SECRET;

const roleModels = {
  student: Student,
  educator: Educator,
  institution: Institution,
  admin: Admin
};

const verifyTokenForRole = (role) => {
  return async (req, res, next) => {
    try {
      const authHeader = req.headers.authorization;

      if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "No token provided" });
      }

      const token = authHeader.split(" ")[1];
      const decoded = jwt.verify(token, JWT_SECRET);

      if (decoded.role !== role) {
        return res.status(403).json({ message: "Access denied: Invalid role" });
      }

      const Model = roleModels[role];
      const user = await Model.findById(decoded.id).select("-password");

      if (!user) {
        return res.status(404).json({ message: `${role} not found` });
      }

      req[role] = user;
      next();
    } catch (err) {
      res.status(401).json({ message: "Unauthorized" });
    }
  };
};

module.exports = verifyTokenForRole;
