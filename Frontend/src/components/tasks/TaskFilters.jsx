const TaskFilters = ({
  search,
  setSearch,
  status,
  setStatus,
  priority,
  setPriority,
sortBy,
setSortBy,
}) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow flex flex-col md:flex-row gap-4">
      <input
        type="text"
        placeholder="Search tasks..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="flex-1 border rounded-lg p-3"
      />
     <select
  value={sortBy}
  onChange={(e) =>
    setSortBy(e.target.value)
  }
  className="border rounded-lg p-3"
>
  <option value="">
    Sort By
  </option>

  <option value="dueDate">
    Due Date
  </option>

  <option value="createdAt">
    Latest Created
  </option>
</select>
      <select
        value={status}
        onChange={(e) =>
          setStatus(e.target.value)
        }
        className="border rounded-lg p-3"
      >
        <option value="">
          All Status
        </option>
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

      <select
        value={priority}
        onChange={(e) =>
          setPriority(e.target.value)
        }
        className="border rounded-lg p-3"
      >
        <option value="">
          All Priority
        </option>
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
 
    </div>
  );
};

export default TaskFilters;