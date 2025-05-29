import React from "react";
import TaskForm from "./components/TaskForm";
import FilterButtons from "./components/FilterButtons";

const App = () => {
  return (
    <div>
      <FilterButtons />
      <TaskForm />
    </div>
  );
};

export default App;
