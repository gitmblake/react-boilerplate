import AuthApi from "../api/mockAuthApi";
import { beginAjaxCall, ajaxCallError } from "./ajaxStatusActions";
import * as types from "./actionTypes";

const loginSuccess = (response) => {
    return {
        type: types.LOGIN_SUCCESS,
        payload: response
    }
}

export const login = (username: string, password: string) => {
    return function(dispatch) {
        dispatch(beginAjaxCall());
        return AuthApi.login(username, password).then(response => {

        }).catch(error => {
            dispatch(ajaxCallError());
            throw(error);
        })
    }
}