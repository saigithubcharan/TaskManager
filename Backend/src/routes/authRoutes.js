const express = require("express");
const router = express.Router();

const {
  register,
  login,
  getMe
} = require("../controllers/authController");
const protect = require("../middleware/authMiddleware");
const {
  registerValidation
} = require("../validators/authValidator");

const validateRequest = require(
  "../middleware/validateRequest"
);

router.post(
  "/register",
  registerValidation,
  validateRequest,
  register
);

router.post("/login", login);

router.get("/me",protect, getMe);

module.exports = router;