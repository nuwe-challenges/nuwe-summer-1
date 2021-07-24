import { createSelector } from 'reselect'
import { defaultUser } from '../../constants'
import actionTypes from '../actions/actionTypes';
import { RootState } from '.'
import userType from '../../types/userInterface';
import { AnyAction } from "redux";

const initialState = {
  user: defaultUser
};

export const loadUser = (user: userType) => ({
  type: actionTypes.LOAD_USER,
  payload: user
})

const getState = (state: RootState) => state.user
export const getUser = createSelector([getState], (s) => s.user)

export default (state = initialState, action: AnyAction = { type: '' }) => {
  if (action.type === actionTypes.LOAD_USER) {
    return { ...state, user: action.payload };
  }
  else {
    return state
  }
};