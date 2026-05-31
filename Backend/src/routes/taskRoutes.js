const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");
const {
  taskValidation
} = require("../validators/taskValidator");

const validateRequest = require(
  "../middleware/validateRequest"
);
const {
  createTask,
  getTasks,
  updateTask,
  deleteTask
} = require("../controllers/taskController");

router.post(
  "/",
  protect,
  taskValidation,
  validateRequest,
  createTask
);

router.get("/", protect, getTasks);

router.put(
  "/:id",
  protect,
  taskValidation,
  validateRequest,
  updateTask
);

router.delete("/:id", protect, deleteTask);

module.exports = router;