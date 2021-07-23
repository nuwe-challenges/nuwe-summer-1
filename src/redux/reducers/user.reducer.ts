import { createSelector } from 'reselect'
import { defaultUser } from '../../constants'
import actionTypes from '../actions/actionTypes';
import { RootState } from '.'
import { AnyAction } from "redux";

interface userType {
    name: string;
    mail: string;
    phone: string;
    position: string;
    location: string;
    description: string;
    github: string;
    linkedin: string;
    jobLocation: string;
    jobDesc: string;
    jobSalary: {
        min: number;
        max: number;
    };
    jobTravel: boolean;
    jobRemote: boolean;
    jobWhen: string;
    stack: string[]
}

const initialState = {
    user: defaultUser
};

export const loadUser = (user: userType) => ({
    type: actionTypes.LOAD_USER,
    payload: user
})

const getState = (state: RootState) => state.user
export const getUser = createSelector([ getState ], (s) => s.user)

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case actionTypes.LOAD_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};