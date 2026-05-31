const { body } = require("express-validator");

exports.taskValidation = [
  body("title")
    .notEmpty()
    .withMessage("Title is required"),

  body("priority")
    .optional()
    .isIn(["Low", "Medium", "High"])
    .withMessage("Invalid priority"),

  body("status")
    .optional()
    .isIn(["To Do", "In Progress", "Done"])
    .withMessage("Invalid status"),

  body("dueDate")
    .optional()
    .isISO8601()
    .withMessage("Invalid date")
];