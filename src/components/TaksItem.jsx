import React from "react";


// status color mapping
const statusColors = {
  todo: "bg-yellow-500",
  "in-progress": "bg-blue-500",
  completed: "bg-green-500",
};

const TaksItem = ({ task, onEdit, onDelete }) => {
  return (
    <div className="px-2 flex justify-between items-center border-b py-2">
      <div>
        {/* status badge */}
        <span
          className={`inline-block text-white px-2 py-1 rounded text-sm font-semibold mr-2 ${
            statusColors[task.status]
          }`}
        >
          {task.status.charAt(0).toUpperCase() +
            task.status.slice(1).replace("-", " ")}
        </span>
        {/* formate status text */}
        <span>{task.text}</span>
      </div>

      {/* edit and delete buttons */}
      <div className="flex gap-2">
        <button
          onClick={() => onEdit(task)}
          className="text-indigo-600 hover:text-indigo-800"
          aria-label="Edit task"
        >
          ✏️
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="text-red-600 hover:text-red-800"
          aria-label="Delete task"
        >
          🗑️
        </button>
      </div>
    </div>
  );
};

export default TaksItem;
