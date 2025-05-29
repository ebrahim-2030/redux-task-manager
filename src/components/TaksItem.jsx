import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";

// status color mapping
const statusColors = {
  todo: "bg-yellow-500",
  "in-progress": "bg-blue-500",
  completed: "bg-green-500",
};

const TaksItem = ({ task, onEdit, onDelete }) => {
  return (
    <div className="px-2 flex flex-col md:flex-row  gap-2 justify-between border-b border-black/5 py-2.5">
      <div>
        {/* formate status text */}
        <span className="text-sm font-medium md:font-normal md:text-base">{task.text}</span>
      </div>

      {/* edit and delete buttons */}
      <div className="flex gap-2 text-md md:text-xl ">
        <button
          onClick={() => onEdit(task)}
          className="text-gray-500 hover:text-gray-600 "
          aria-label="Edit task"
        >
          <MdEdit />
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="text-red-500 hover:text-red-800"
          aria-label="Delete task"
        >
          <MdDelete />
        </button>
        {/* status badge */}
        <span
          className={`ml-4 w-24 p-0.5 text-center text-white rounded-full text-xs md:text-sm ${
            statusColors[task.status]
          }`}
        >
          {task.status.charAt(0).toUpperCase() +
            task.status.slice(1).replace("-", " ")}
        </span>
      </div>
    </div>
  );
};

export default TaksItem;
