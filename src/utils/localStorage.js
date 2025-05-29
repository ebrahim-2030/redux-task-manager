// load tasks from localstore
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("tasks");
    return serializedState ? { tasks: JSON.parse(serializedState) } : undefined;
  } catch (err) {
    return undefined;
  }
};

// save tasks to localstorage
export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state.tasks);
    localStorage.setItem("tasks", serializedState);
  } catch (err) {
    return undefined;
  }
};
