const express = require("express");
const router = express.Router();
const {
  registerStudent,
  loginStudent
} = require("../controllers/studentAuthController");

const verifyTokenForRole = require("../middleware/roleMiddleware");

router.post("/register", registerStudent);
router.post("/login", loginStudent);

// Protected route
router.get("/profile", verifyTokenForRole("student"), (req, res) => {
  res.status(200).json({
    message: "Student profile accessed",
    student: req.student
  });
});

module.exports = router;

