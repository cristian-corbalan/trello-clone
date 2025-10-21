import { configureStore } from "@reduxjs/toolkit";
import BoardsReducer from "./boardsSlice.ts";

export const store = configureStore({
  reducer: {
    boards: BoardsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
