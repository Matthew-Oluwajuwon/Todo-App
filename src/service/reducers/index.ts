import { TodoStateReducer } from './reducers';
import { combineReducers } from "redux";

export const Reducers = combineReducers({
    landingPageState: TodoStateReducer.GetLandingPage,
})