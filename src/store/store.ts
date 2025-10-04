import { configureStore } from '@reduxjs/toolkit';
import reducer from './cardsSlice';

export const store = configureStore({ reducer });

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
