import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { cards } from '@data/mocks/cards';

const initialState = {
  city: 'Paris',
  cards: cards,
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    changeCity(state, action: PayloadAction<string>) {
      state.city = action.payload;
    },
  },
});

export const { changeCity } = cardsSlice.actions;

export default cardsSlice.reducer;
