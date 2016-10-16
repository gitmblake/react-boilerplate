import {combineReducers} from "redux";
import ajaxCallsInProgress from "./ajaxStatusReducer";
import { routerReducer  } from 'react-router-redux';
import authReducer from "./authReducer";

const rootReducer = combineReducers({
    ajaxCallsInProgress,
    auth: authReducer,
    routing: routerReducer
});

export default rootReducer;