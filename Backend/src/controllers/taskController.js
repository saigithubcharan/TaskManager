exports.createTask = async (req, res) => {};

// exports.getTasks = async (req, res) => {};
exports.getTasks = async (req, res) => {
  res.json({
    success: true,
    message: "Tasks route working"
  });
};

exports.updateTask = async (req, res) => {};

exports.deleteTask = async (req, res) => {};