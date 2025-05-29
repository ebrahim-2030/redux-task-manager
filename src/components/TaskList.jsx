import React, { useState } from "react";

import TaksItem from "./TaksItem";
import TaskForm from "./TaskForm";
import FilterButtons from "./FilterButtons";
import { useDispatch, useSelector } from "react-redux";
import {
  addTask,
  deleteTask,
  updateTask,
  setFilter,
} from "../features/tasksSlice";

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.items);
  const filter = useSelector((state) => state.tasks.filter);
  const [editingTask, setEditingTask] = useState(null);

  //   filter tasks by current filter
  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    return task.status === filter;
  });

  //   handle adding new task
  const handleAddTask = ({ text, status }) => {
    dispatch(addTask({ text, status }));
  };

  //   handle update task
  const handleUpdateTask = ({ id, text, status }) => {
    dispatch(updateTask({ id, text, status }));
    setEditingTask(null);
  };

  //   handle delete task
  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
    if (editingTask?.id === id) setEditingTask(null);
  };
  return (
    <div className="max-w-lg mx-auto px-8 pt-12 pb-8 bg-white rounded shadow-sm  ">
      {/* filter controls */}
      <FilterButtons
        currentFilter={filter}
        onChange={(filter) => dispatch(setFilter(filter))}
      />

      {/* add or edit form */}
      {editingTask ? (
        <TaskForm
          existingTask={editingTask}
          onSubmit={handleUpdateTask}
          onCancel={() => setEditingTask(null)}
        />
      ) : (
        <TaskForm onSubmit={handleAddTask} />
      )}

      {/* tasks list */}
      <h2 className="mt-8 text-md font-medium text-black/70 border-t pt-5 border-black/5"  >Your Tasks </h2>
      <div className="mt-4 border border-black/5 rounded">
        {filteredTasks.length === 0 && (
          <p className="p-4 text-center text-gray-500">No tasks found.</p>
        )}
        {filteredTasks.map((task) => (
          <TaksItem
            key={task.id}
            task={task}
            onEdit={setEditingTask}
            onDelete={handleDeleteTask}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
