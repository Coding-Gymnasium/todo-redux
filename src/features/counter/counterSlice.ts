import { createSlice } from "@reduxjs/toolkit";

const initialState: number = 0;

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    decrementCounter: (state) => state - 1,
    incrementCounter: (state) => state + 1,
    resetCounter: () => initialState,
  },
});

export const { decrementCounter, incrementCounter, resetCounter } =
  counterSlice.actions;
export default counterSlice.reducer;
