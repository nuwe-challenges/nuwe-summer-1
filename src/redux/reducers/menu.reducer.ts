import { createSelector } from "reselect";
import actionTypes from "../actions/actionTypes";
import { RootState } from ".";
import { AnyAction } from "redux";

const initialState = {
  open: false,
};

export const menuOpen = () => ({
  type: actionTypes.MENU_OPEN,
});

const getState = (state: RootState) => state.menu;
export const getMenu = createSelector([getState], (s) => s.open);

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case actionTypes.MENU_OPEN:
      return { ...state, open: !state.open };
    default:
      return state;
  }
};
