

const Task = require("../models/Task");

exports.getDashboardStats = async (req, res) => {
  try {
    const userId = req.user._id;

    const totalTasks = await Task.countDocuments({
      userId,
    });
    const recentTasks = await Task.find({
  userId,
})
  .sort({ createdAt: -1 })
  .limit(5)
  .select(
    "title status priority dueDate"
  );

    const todo = await Task.countDocuments({
      userId,
      status: "To Do",
    });

    const inProgress =
      await Task.countDocuments({
        userId,
        status: "In Progress",
      });

    const done =
      await Task.countDocuments({
        userId,
        status: "Done",
      });

    const overdue =
      await Task.countDocuments({
        userId,
        dueDate: {
          $lt: new Date(),
        },
        status: {
          $ne: "Done",
        },
      });

    const lowPriority =
      await Task.countDocuments({
        userId,
        priority: "Low",
      });

    const mediumPriority =
      await Task.countDocuments({
        userId,
        priority: "Medium",
      });

    const highPriority =
      await Task.countDocuments({
        userId,
        priority: "High",
      });

    res.status(200).json({
      success: true,
      data: {
        totalTasks,
        todo,
        inProgress,
        done,
        overdue,
        lowPriority,
        mediumPriority,
        highPriority,
        recentTasks
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};