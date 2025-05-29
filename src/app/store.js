import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../features/tasksSlice";
import { loadState, saveState } from "../utils/localStorage";

// load presisted state from localstorage
const persistedState = loadState();

// create redux store with tasks reducer and preload state
export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
  preloadedState: persistedState,
});

// save state to localstorage on every change
store.subscribe(() => {
  saveState({ tasks: store.getState().tasks });
});
