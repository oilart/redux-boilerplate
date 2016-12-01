import createReducer from 'helpers/createReducer';
import * as ActionTypes from 'constants/actionTypes';

const initialState = {
  greeted: false,
  user: null
};

export default createReducer({
  [ActionTypes.SAY_HELLO]: state => ({ ...state, greeted: true }),
  [ActionTypes.USER_FETCHED]: (state, user) => ({ ...state, user })
}, initialState);
