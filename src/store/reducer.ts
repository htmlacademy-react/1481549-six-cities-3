import { createReducer } from '@reduxjs/toolkit';

import { cards } from '@data/mocks/cards';
import { changeCity } from './actions';

// делать store через методы createReducer/createAction?
// или лучше как в документации через createSlice?

const initialState = {
  city: 'Paris',
  cards: cards,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(changeCity, (state, action) => {
    state.city = action.payload;
  });
});

export { reducer };
