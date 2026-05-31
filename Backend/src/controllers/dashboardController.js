const Task = require("../models/Task");

exports.getDashboardStats = async (req, res) => {
  try {
    const userId = req.user._id;

    const totalTasks = await Task.countDocuments({
      userId
    });

    const todo = await Task.countDocuments({
      userId,
      status: "To Do"
    });

    const inProgress = await Task.countDocuments({
      userId,
      status: "In Progress"
    });

    const done = await Task.countDocuments({
      userId,
      status: "Done"
    });

    const overdue = await Task.countDocuments({
      userId,
      dueDate: { $lt: new Date() },
      status: { $ne: "Done" }
    });

    res.status(200).json({
      success: true,
      data: {
        totalTasks,
        todo,
        inProgress,
        done,
        overdue
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};