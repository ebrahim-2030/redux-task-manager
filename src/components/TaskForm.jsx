import React, { useEffect, useState } from "react";
const statuses = ["todo", "in-progress", "completed"];

const TaskForm = ({ onSubmit, existingTask, onCancel }) => {
  const [text, setText] = useState("");
  const [status, setStatus] = useState("todo");

  useEffect(() => {
    if (existingTask) {
      setText(existingTask.text);
      setStatus(existingTask.status);
    }
  }, [existingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim()) {
      onSubmit({ text, status, id: existingTask?.id });
      setText("");
      setStatus("todo");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <input
        type="text"
        placeholder="Add a new Task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
        required
      />

      <select
        name="status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        {statuses.map((s) => (
          <option key={s} value={s}>
            {s.charAt().toUpperCase() + s.slice(1).replace("-", " ")}
          </option>
        ))}
      </select>

      <div className="flex gap-2">
        <button
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
          type="submit"
        >
          {existingTask ? "Update" : "Add"}
        </button>
        {existingTask && (
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default TaskForm;
