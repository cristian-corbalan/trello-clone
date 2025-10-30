import { createSlice } from '@reduxjs/toolkit';

const TEST_BOARDS = [
  {
    id: 1,
    title: 'Tablero 01',
    background: 'white',
  },
  {
    id: 2,
    title: 'Tablero 02',
    background: 'blue',
  },
  {
    id: 3,
    title: 'Tablero 03',
    background: 'red',
  },
  {
    id: 4,
    title: 'Tablero 04',
    background: 'purple',
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
