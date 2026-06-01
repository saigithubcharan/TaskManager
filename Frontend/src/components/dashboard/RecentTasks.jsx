const RecentTasks = ({
  tasks = [],
}) => {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-semibold mb-4">
        Recent Tasks
      </h2>

      <div className="space-y-3">
        {tasks.map((task) => (
          <div
            key={task._id}
            className="flex justify-between items-center border-b pb-3"
          >
            <div>
              <p className="font-medium">
                {task.title}
              </p>

              <p className="text-sm text-slate-500">
                {task.status}
              </p>
            </div>

            <span className="text-sm px-3 py-1 rounded-full bg-blue-100 text-blue-600">
              {task.priority}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentTasks;