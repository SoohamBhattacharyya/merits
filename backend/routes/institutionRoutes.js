const express = require("express");
const router = express.Router();
const {
  registerInstitution,
  loginInstitution
} = require("../controllers/institutionAuthController");

const verifyTokenForRole = require("../middleware/roleMiddleware");

router.post("/register", registerInstitution);
router.post("/login", loginInstitution);

// Protected route
router.get("/profile", verifyTokenForRole("institution"), (req, res) => {
  res.status(200).json({
    message: "Institution profile accessed",
    institution: req.institution
  });
});

module.exports = router;

