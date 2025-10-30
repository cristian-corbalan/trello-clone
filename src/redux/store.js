import { configureStore } from '@reduxjs/toolkit';
import BoardsReducer from './boardsSlice.js';

export const store = configureStore({
  reducer: {
    boards: BoardsReducer,
  },
});
