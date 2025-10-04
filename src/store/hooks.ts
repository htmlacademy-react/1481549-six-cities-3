import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { AppDispatch, AppState } from '@store/types';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
