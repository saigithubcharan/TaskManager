import { useEffect, useState } from "react";

const TaskModal = ({
  isOpen,
  task,
  onClose,
  onUpdate,
}) => {
  const [formData, setFormData] =
    useState({
      title: "",
      description: "",
      priority: "Medium",
      status: "To Do",
      dueDate: "",
    });

  useEffect(() => {
    if (task) {
      setFormData({
        title: task.title || "",
        description:
          task.description || "",
        priority:
          task.priority || "Medium",
        status:
          task.status || "To Do",
        dueDate: task.dueDate
          ? task.dueDate.split("T")[0]
          : "",
      });
    }
  }, [task]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]:
        e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onUpdate(formData);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-5">
          Edit Task
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
            className="w-full border rounded-lg p-3"
          />

          <textarea
            name="description"
            value={
              formData.description
            }
            onChange={handleChange}
            placeholder="Description"
            className="w-full border rounded-lg p-3"
          />

          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          >
            <option value="Low">
              Low
            </option>
            <option value="Medium">
              Medium
            </option>
            <option value="High">
              High
            </option>
          </select>

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          >
            <option value="To Do">
              To Do
            </option>
            <option value="In Progress">
              In Progress
            </option>
            <option value="Done">
              Done
            </option>
          </select>

          <input
            type="date"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg border"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-blue-600 text-white"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskModal;