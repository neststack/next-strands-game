import { configureStore } from "@reduxjs/toolkit";
import { gridReducer } from "./features/grid/grid-slice";

export const store = configureStore({
  reducer: {
    grid: gridReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
