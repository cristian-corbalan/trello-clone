import { createSlice } from '@reduxjs/toolkit';
import { BOARD_GRADIENTS } from '../util/constants.js';

const TEST_BOARDS = [
  {
    id: crypto.randomUUID(),
    title: 'Tablero 01',
    background: BOARD_GRADIENTS[0],
  },
  {
    id: crypto.randomUUID(),
    title: 'Tablero 02',
    background: BOARD_GRADIENTS[2],
  },
  {
    id: crypto.randomUUID(),
    title: 'Tablero 03',
    background: BOARD_GRADIENTS[4],
  },
  {
    id: crypto.randomUUID(),
    title: 'Tablero 04',
    background: BOARD_GRADIENTS[6],
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
