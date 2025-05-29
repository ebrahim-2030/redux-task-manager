import React from "react";

// filter options   
const filters = [
  { key: "all", label: "All" },
  { key: "todo", label: "To Do" },
  { key: "in-progress", label: "In Progress" },
  { key: "completed", label: "Completed" },
];

const FilterButtons = ({ currentFilter, onChange }) => {
  return (
    <div className="flex gap-2 mb-4">
      {filters.map((filter) => (
        <button
          key={filter.key}
          onClick={() => onChange(filter.key)}
          className={`px-4 py-2 rounded ${
            currentFilter === filter.key
              ? "bg-indigo-600 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
