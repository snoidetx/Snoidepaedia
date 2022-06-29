import { createActions } from 'redux-actions';

import userLoginStatusAction from './userLoginStatusAction';

const actions = createActions({
  MANAGE_USER_LOGIN_STATUS: userLoginStatusAction,
});

export default actions;
