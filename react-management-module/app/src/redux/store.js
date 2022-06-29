import { configureStore } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

import { appReducer } from './reducer';

export const store = configureStore({
  reducer: appReducer,
});

export const userAppSelector = useSelector;
