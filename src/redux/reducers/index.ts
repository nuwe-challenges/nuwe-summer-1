import { combineReducers } from "redux";
import user from "./user.reducer";
import cromo from "./cromo.reducer";
import menu from "./menu.reducer";

const rootReducer = combineReducers({
  user,
  cromo,
  menu,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
