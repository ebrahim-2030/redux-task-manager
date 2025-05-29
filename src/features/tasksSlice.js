import { nanoid } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  items: [],
  filter: "all",
};

// define tasks slice
const tasksSlice = createSlice({
  // slice name
  name: tasks,

  // initial state
  initialState,

  // tasks reducers for handle state changes
  reducers: {
    // add a new task
    addTask: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
      prepare: ({ text, status }) => {
        return {
          payload: {
            id: nanoid(),
            text,
            status,
          },
        };
      },
    },

    // update an existin task
    updateTask: (state, action) => {
      const { id, text, status } = action.payload;

      const task = state.items.find((t) => t.id === id);

      if (task) {
        (task.text = text), (task.state = status);
      }
    },

    // delete a task by its id
    deleteTask: (state, action) => {
      state.items = state.items.filter((t) => t.id !== action.payload);
    },

    // set the filter for task display
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

// export the actions genereted by slice
export const { addTask, updateTask, deleteTask, setFilter } =
  tasksSlice.actions;

//   export the reducer to be used in the store
export default tasksSlice.reducer;
