import { createSlice } from '@reduxjs/toolkit';

const TEST_BOARDS = [
  {
    id: 1,
    title: 'Tablero 01',
    background: 'bg-board-blue',
  },
  {
    id: 2,
    title: 'Tablero 02',
    background: 'bg-gradient-board-bubbles',
  },
  {
    id: 3,
    title: 'Tablero 03',
    background: 'bg-gradient-board-volcano',
  },
  {
    id: 4,
    title: 'Tablero 04',
    background: 'bg-gradient-board-booty',
  },
];

const initialState = TEST_BOARDS;

export const boardsSlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {
    addBoard(state, actions) {
      state.push(actions.payload);
    },
  },
});

export const { addBoard } = boardsSlice.actions;

export default boardsSlice.reducer;
