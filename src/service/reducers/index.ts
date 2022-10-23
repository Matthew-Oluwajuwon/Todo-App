import { TodoStateReducer } from './reducers';
import { UtilityStateReducer } from './utility-reducer';
import { combineReducers } from "redux";

export const Reducers = combineReducers({
    utilityConfigState: UtilityStateReducer.GetConfig,
    landingPageState: TodoStateReducer.GetLandingPage
})