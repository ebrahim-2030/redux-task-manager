import React from "react";

import TaskList from "./components/TaskList";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-center mb-6">
        Redux Task Manager
      </h1>
      <TaskList />
    </div>
  );
};

export default App;
