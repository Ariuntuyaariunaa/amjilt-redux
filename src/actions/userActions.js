/**
 * Created by battumur on 11/4/2016.
 */
import fetch from 'fetch-everywhere';
import reduxConf from '../reduxConfig';
import * as networkActions from '../networkActions';
import * as constants from '../constants/actionTypes';
export function userLogin(data) {
    return dispatch => {
        dispatch(requestUserLogin());
        return fetch(`${reduxConf.get('host')}/api/user/login`, {
            method: 'post',
            headers: {
                'Accept': 'application/json', 'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(function (response) {

                if (response.status == 200) {
                    return response.json();
                } else {
                    if(response.status == 401){
                        reduxConf.get('emitter').emit('auth-error');
                    }
                    return {
                        success:false,
                        status:response.status
                    }
                }

            })
            .then(json => {
                if(!json.success){
                    reduxConf.get('emitter').emit('login-error',json);
                    dispatch(requestLoginFail(json));
                }else{
                    reduxConf.get('emitter').emit('login-success',json);
                    dispatch(requestLoginSuccess(json));
                }
            })
            .catch(error => {
                dispatch(requestLoginSuccess({
                    success:false,
                }))
            });
    }

}
function requestUserLogin() {
    return {
        type: 'login-request'
    }
}
function requestLoginSuccess(json) {
    return {
        type: 'login-success',
        json
    }
}
function requestLoginFail(json){
    return {
        type: 'login-error',
        json
    }
}
export function userRegister(data) {
    return dispatch => {
        dispatch(userRegisterSubmit(data));
        return fetch(`${reduxConf.get('host')}/api/user/register/save`,{
            method: 'post',
            credentials: 'same-origin',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify(data)
        })
            .then(function (response) {

                if (response.status == 200) {
                    return response.json();
                } else {
                    if(response.status == 401){
                        reduxConf.get('emitter').emit('auth-error');
                    }
                    return {
                        success:false,
                        status:response.status
                    }
                }

            })
            .then(json => {
                if(!json.success){
                    reduxConf.get('emitter').emit('register-error',json);
                    dispatch(userRegisterFail(json));
                }else{
                    reduxConf.get('emitter').emit('register-success',json);
                    dispatch(userRegisterSuccess(json));
                }
            })
            .catch(error => {
                dispatch(userRegisterSuccess({
                    success:false,
                }))
            });
    }
}
function userRegisterSubmit(json){
    return {
        type: 'register-request',
    }
}
function userRegisterSuccess(json) {
    return {
        type: 'register-success',
        json
    }
}
export function userVerify(id) {
    return dispatch => {
        dispatch(userVerifySubmit(id));
        return fetch(`${reduxConf.get('host')}/api/verify`+id,{
            method: 'get',
            credentials: 'same-origin',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify(data)
        })
            .then(function (response) {

                if (response.status == 200) {
                    return response.json();
                } else {
                    if(response.status == 401){
                        reduxConf.get('emitter').emit('auth-error');
                    }
                    return {
                        success:false,
                        status:response.status
                    }
                }

            })
            .then(json => {
                if(!json.success){
                    reduxConf.get('emitter').emit('register-error',json);
                    dispatch(userVerifyFail(json));
                }else{
                    reduxConf.get('emitter').emit('register-success',json);
                    dispatch(userVerifySuccess(json));
                }
            })
            .catch(error => {
                dispatch(userVerifySuccess({
                    success:false,
                }))
            });
    }
}
function userVerifySubmit(json){
    return {
        type: 'verify-request',
    }
}
function userVerifySuccess(json) {
    return {
        type: 'verify-success',
        json
    }
}
export function resetPassword(data) {
    return dispatch => {
        dispatch(resetPasswordSubmit(data));
        return fetch(`${reduxConf.get('host')}/api/password/reset`,{
            method: 'post',
            credentials: 'same-origin',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify(data)
        })
            .then(function (response) {

                if (response.status == 200) {
                    return response.json();
                } else {
                    if(response.status == 401){
                        reduxConf.get('emitter').emit('auth-error');
                    }
                    return {
                        success:false,
                        status:response.status
                    }
                }

            })
            .then(json => {
                if(!json.success){
                    reduxConf.get('emitter').emit('reset-error',json);
                    dispatch(resetPasswordFail(json));
                }else{
                    reduxConf.get('emitter').emit('reset-success',json);
                    dispatch(resetPasswordSuccess(json));
                }
            })
            .catch(error => {
                dispatch(resetPasswordSuccess({
                    success:false,
                }))
            });
    }
}
function resetPasswordSubmit(json){
    return {
        type: 'reset-request',
    }
}
function resetPasswordSuccess(json) {
    return {
        type: 'reset-success',
        json
    }
}
/*
* export function userLogin(data){
 let url = '/api/user/login';
 let requestParams = null;
 return networkActions.requestPost(constants.userLogin,url,{},requestParams,data);
 }
* */