import {combineReducers} from "redux";
import ajaxCallsInProgress from "./ajaxStatusReducer";
import { routerReducer  } from 'react-router-redux';

const rootReducer = combineReducers({
    ajaxCallsInProgress,
    routing: routerReducer
});

export default rootReducer;