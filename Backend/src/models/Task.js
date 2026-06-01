const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },

    description: {
      type: String,
      default: ""
    },

    priority: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "Medium"
    },

    status: {
      type: String,
      enum: ["To Do", "In Progress", "Done"],
      default: "To Do"
    },

    dueDate: {
      type: Date
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    }
  },
  {
    timestamps: true
  }
);

taskSchema.index({
  userId: 1,
});

taskSchema.index({
  userId: 1,
  status: 1,
});

taskSchema.index({
  userId: 1,
  priority: 1,
});

taskSchema.index({
  dueDate: 1,
});

taskSchema.index({
  createdAt: -1,
});

module.exports = mongoose.model("Task", taskSchema);