
const express = require("express");
const router = express.Router();
const {
  registerEducator,
  loginEducator
} = require("../controllers/educatorAuthController");

const verifyTokenForRole = require("../middleware/roleMiddleware");

router.post("/register", registerEducator);
router.post("/login", loginEducator);

// Protected route
router.get("/profile", verifyTokenForRole("educator"), (req, res) => {
  res.status(200).json({
    message: "Educator profile accessed",
    educator: req.educator
  });
});

module.exports = router;
