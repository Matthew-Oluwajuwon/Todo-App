import { UtilityThunkService } from './thunk/utility-thunk-service';
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import thunkMiddleware from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension";
import { Reducers } from "./reducers";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));
export const store = createStore(Reducers, composedEnhancer);
store.dispatch(UtilityThunkService.GetConfig as any)