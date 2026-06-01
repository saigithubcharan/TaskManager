import { useEffect, useState,useCallback } from "react";

import Layout from "../components/layout/Layout";

import TaskForm from "../components/tasks/TaskForm";

import TaskTable from "../components/tasks/TaskTable";
import TaskModal from "../components/tasks/TaskModal";
import TaskFilters from "../components/tasks/TaskFilters";

import {
  getTasks,
  createTask,
  deleteTask,
  updateTask
} from "../services/taskService";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [sortBy, setSortBy] =
  useState("");
const [selectedTask, setSelectedTask] =
  useState(null);
  const [search, setSearch] =
  useState("");

const [status, setStatus] =
  useState("");

const [priority, setPriority] =
  useState("");

const [isModalOpen, setIsModalOpen] =
  useState(false);

  useEffect(() => {
    loadTasks();
  }, [search, status, priority,sortBy]);

const loadTasks = async () => {
  try {
    const response =
      await getTasks({
        search,
        status,
        priority,
        sortBy
      });

    setTasks(response.tasks);
  } catch (error) {
    console.log(error);
  }
};
const handleCreateTask = async (data) => {
  try {
    const existingTask = tasks.find(
      (task) =>
        task.title.trim().toLowerCase() ===
          data.title.trim().toLowerCase() &&
        task.description?.trim() ===
          data.description?.trim()
    );

    if (existingTask) {
      throw new Error("Task already exists");
    }

    await createTask({
      ...data,
      status: "To Do",
    });

    await loadTasks();
  } catch (error) {
    throw error;
  }
};
const handleDeleteTask =
  useCallback(async (taskId) => {
    const confirmed =
      window.confirm(
        "Delete this task?"
      );

    if (!confirmed) return;

    try {
      await deleteTask(taskId);

      setTasks((prev) =>
        prev.filter(
          (task) =>
            task._id !== taskId
        )
      );

      toast.success(
        "Task deleted"
      );
    } catch (error) {
      toast.error(
        "Delete failed"
      );
    }
  }, []);
const handleEditTask =
  useCallback((task) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  }, []);
  const handleUpdateTask =
  useCallback(
    async (updatedData) => {
      try {
        const response =
          await updateTask(
            selectedTask._id,
            updatedData
          );

        const updatedTask =
          response.task;

        setTasks((prevTasks) =>
          prevTasks.map((task) =>
            task._id ===
            updatedTask._id
              ? updatedTask
              : task
          )
        );

        setIsModalOpen(false);

        setSelectedTask(null);

        toast.success(
          "Task updated successfully"
        );
      } catch (error) {
        toast.error(
          "Update failed"
        );
      }
    },
    [selectedTask]
  );
  return (
    <Layout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">
            Tasks
          </h1>

          <p className="text-slate-500">
            Manage your tasks
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <TaskForm
            onSubmit={
              handleCreateTask
            }
          />
        </div>

<TaskFilters
  search={search}
  setSearch={setSearch}
  status={status}
  setStatus={setStatus}
  priority={priority}
  setPriority={setPriority}
  sortBy={sortBy}
  setSortBy={setSortBy}
/>
        <TaskTable
         tasks={tasks} 
         onDelete={handleDeleteTask}
         onEdit={handleEditTask}/>
         <TaskModal
  isOpen={isModalOpen}
  task={selectedTask}
  onClose={() => {
    setIsModalOpen(false);
    setSelectedTask(null);
  }}
  onUpdate={handleUpdateTask}
/>
      </div>
    </Layout>
  );
};

export default Tasks;