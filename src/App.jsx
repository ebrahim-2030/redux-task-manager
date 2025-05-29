import React from "react";

import TaskList from "./components/TaskList";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6 text-black/70">
      <h1 className="text-3xl font-bold text-center mb-6 mt-4">
        Redux Task Manager
      </h1>
      <div className="max-w-screen-xl mx-auto flex items-center justify-center">
        <TaskList />
      </div>{" "}
    </div>
  );
};

export default App;
