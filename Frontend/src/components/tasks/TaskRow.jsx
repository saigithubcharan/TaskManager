import React from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";

const TaskRow = ({
  task,
  onEdit,
  onDelete,
}) => {
  console.log(
    "Rendering Row:",
    task.title
  );

  return (
    <tr className="border-b hover:bg-slate-50">
      <td className="p-4">
        <div>
          <p className="font-medium">
            {task.title}
          </p>

          <p className="text-sm text-slate-500">
            {task.description}
          </p>
        </div>
      </td>

      <td className="p-4">
        <span
          className={`px-3 py-1 rounded-full text-sm ${
            task.priority === "High"
              ? "bg-red-100 text-red-600"
              : task.priority === "Medium"
              ? "bg-yellow-100 text-yellow-600"
              : "bg-green-100 text-green-600"
          }`}
        >
          {task.priority}
        </span>
      </td>

      <td className="p-4">
        <span
          className={`px-3 py-1 rounded-full text-sm ${
            task.status === "Done"
              ? "bg-green-100 text-green-600"
              : task.status ===
                "In Progress"
              ? "bg-blue-100 text-blue-600"
              : "bg-slate-100 text-slate-600"
          }`}
        >
          {task.status}
        </span>
      </td>

      <td className="p-4">
        {task.dueDate
          ? new Date(
              task.dueDate
            ).toLocaleDateString()
          : "-"}
      </td>

      <td className="p-4">
        <div className="flex justify-center gap-3">
          <button
            onClick={() => onEdit(task)}
            className="p-2 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200"
          >
            <FiEdit />
          </button>

          <button
            onClick={() =>
              onDelete(task._id)
            }
            className="p-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-200"
          >
            <FiTrash2 />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default React.memo(TaskRow);