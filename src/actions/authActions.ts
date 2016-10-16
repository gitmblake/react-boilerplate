import authApi from "../api/mockAuthApi";
import { beginAjaxCall, ajaxCallError } from "./ajaxStatusActions";
import * as types from "./actionTypes";
import { push } from "react-router-redux";

const loginSuccess = (response) => {
    return {
        type: types.LOGIN_SUCCESS,
        payload: response
    }
}


interface IAuthResponse {
    data: {
        token: string,
        username: string,
        isAuthenticated: boolean
    }
}

export const loginWithToken = (token: string) => {
    return function(dispatch) {
        dispatch(beginAjaxCall());
        return authApi.loginWithToken(token).then((response: IAuthResponse) => {
            dispatch(loginSuccess(response.data));
        }).catch(error => {
            dispatch(ajaxCallError());
            throw(error);
        })
    }
}

export const login = (username: string, password: string, redirect: string = "/") => {
    return function(dispatch) {
        dispatch(beginAjaxCall());
        return authApi.login(username, password).then((response:IAuthResponse) => {
            localStorage.setItem("token", response.data.token);
            dispatch(loginSuccess(response.data));
            dispatch(push(redirect));
        }).catch(error => {
            dispatch(ajaxCallError());
            throw(error);
        })
    }
}