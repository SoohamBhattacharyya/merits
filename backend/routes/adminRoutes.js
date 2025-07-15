
const express = require("express");
const router = express.Router();
const {
  registerAdmin,
  loginAdmin
} = require("../controllers/adminAuthController");

const verifyTokenForRole = require("../middleware/roleMiddleware");

router.post("/register", registerAdmin);
router.post("/login", loginAdmin);

// Protected route
router.get("/profile", verifyTokenForRole("admin"), (req, res) => {
  res.status(200).json({
    message: "Admin profile accessed",
    admin: req.admin
  });
});

module.exports = router;
