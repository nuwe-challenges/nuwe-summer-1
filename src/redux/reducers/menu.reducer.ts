import { createSelector } from "reselect";
import actionTypes from "../actions/actionTypes";
import { RootState } from ".";
import { AnyAction } from "redux";

const initialState = {
  open: false,
};

export const menuOpen = () => ({
  type: actionTypes.OPEN_MENU,
});

const getState = (state: RootState) => state.menu;
export const getMenu = createSelector([getState], (s) => s.open);

export default (state = initialState, action: AnyAction = { type: "" }) => {
  if (action.type === actionTypes.OPEN_MENU) {
    return { ...state, open: !state.open };
  } else {
    return state;
  }
};
