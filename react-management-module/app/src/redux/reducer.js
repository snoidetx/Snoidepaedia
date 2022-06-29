import { combineReducers } from 'redux';

import userReducer from './slices/user';

const reducers = { userReducer };

export const appReducer = combineReducers(reducers);
