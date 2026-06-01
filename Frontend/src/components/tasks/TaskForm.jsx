import { useForm } from "react-hook-form";
import { useState } from "react";
import toast from "react-hot-toast";

const TaskForm = ({ onSubmit }) => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      priority: "Medium",
    },
  });

  const handleFormSubmit = async (data) => {
    try {
      setLoading(true);

      await onSubmit(data);

      reset();

      toast.success("Task created successfully");
    } catch (error) {
      toast.error("Task already exists");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="grid gap-4"
    >
      <input
  placeholder="Task Title"
  className="border p-3 rounded-lg"
  {...register("title", {
    required: "Title is required",
    minLength: {
      value: 3,
      message:
        "Title must be at least 3 characters",
    },
  })}
/>
{errors.title && (
  <p className="text-red-500 text-sm">
    {errors.title.message}
  </p>
)}

      <textarea
  placeholder="Description"
  className="border p-3 rounded-lg w-full"
  {...register("description", {
    maxLength: {
      value: 500,
      message:
        "Description cannot exceed 500 characters",
    },
  })}
/>

{errors.description && (
  <p className="text-red-500 text-sm mt-1">
    {errors.description.message}
  </p>
)}

      <select
        className="border p-3 rounded-lg"
        {...register("priority")}
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>

      <input
        type="date"
        className="border p-3 rounded-lg"
        {...register("dueDate")}
      />

      <button
        type="submit"
        disabled={loading}
        className={`py-3 rounded-lg text-white font-medium transition ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {loading ? "Saving..." : "Save Task"}
      </button>
    </form>
  );
};

export default TaskForm;