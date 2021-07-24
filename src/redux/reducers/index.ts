import { combineReducers } from "redux";
import user from "./user.reducer";
import menu from "./menu.reducer";

const rootReducer = combineReducers({
  user,
  menu,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
