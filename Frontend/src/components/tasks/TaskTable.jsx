import React from "react";
import TaskRow from "./TaskRow";

const TaskTable = ({
  tasks,
  onEdit,
  onDelete,
}) => {
  if (!tasks.length) {
    return (
      <div className="bg-white rounded-xl shadow p-8 text-center">
        No Tasks Found
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-slate-100 border-b">
              <th className="p-4 text-left">
                Title
              </th>
              <th className="p-4 text-left">
                Priority
              </th>
              <th className="p-4 text-left">
                Status
              </th>
              <th className="p-4 text-left">
                Due Date
              </th>
              <th className="p-4 text-center">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {tasks.map((task) => (
              <TaskRow
                key={task._id}
                task={task}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default React.memo(TaskTable);