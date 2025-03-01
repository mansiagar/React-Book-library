import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createstore,
} from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./reducers/authReducer";

const rootReducer = combineReducers({
  auth: authReducer,
});
export const store = createstore(rootReducer, applyMiddleware(thunk));
