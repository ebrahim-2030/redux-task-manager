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
    <div className="flex gap-2 mb-4 flex-wrap">
      {filters.map((filter) => (
        <button
          key={filter.key}
          onClick={() => onChange(filter.key)}
          className={`md:flex-1 px-4 py-1 text-sm font-medium rounded ${
            currentFilter === filter.key
              ? "bg-black/70 text-white"
              : "bg-black/5 hover:bg-black/10 text-black/40"
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
