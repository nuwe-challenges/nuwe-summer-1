import { createSelector } from "reselect";
import actionTypes from "../actions/actionTypes";
import { RootState } from ".";
import { AnyAction } from "redux";

const initialState = {
    open: false,
};

export const cromoOpen = () => ({
    type: actionTypes.OPEN_CROMO,
});

const getState = (state: RootState) => state.cromo;
export const getCromo = createSelector([getState], (s) => s.open);

export default (state = initialState, action: AnyAction = { type: "" }) => {
    if (action.type === actionTypes.OPEN_CROMO) {
        return { ...state, open: !state.open };
    } else {
        return state;
    }
};
