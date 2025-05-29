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
    <div className="max-w-lg mx-auto p-4">
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
      <div className="mt-4 border rounded">
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
