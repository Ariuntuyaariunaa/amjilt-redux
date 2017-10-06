/**
 * Created by Ganzorig on 2017-01-19.
 */
import reduxConf from '../reduxConfig';
import * as networkActions from '../networkActions';
import * as constants from '../constants/actionTypes';

export function purchaseRequest(data,threadID = null){
    let header = null;
    let requestActions = constants.purchaseConst;
    let url = `/api/lesson/purchase/${data.lesson}`;
    let requestParams = null;
    return dispatch => {
        dispatch(requestPaymentStart(data,threadID,requestActions));
        if(reduxConf.get('token') !== undefined){
            header = {
                ...header,
                token:reduxConf.get('token')
            }
        }
        header = {
            ...header,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };
        let currentUrl = `${reduxConf.get('host')}${url}`;
        if(requestParams){
            currentUrl +='?'+querystring.stringify(requestParams)
        }
        return fetch(currentUrl, {
            method: 'post',
            credentials: 'same-origin',
            headers: header,
            body: JSON.stringify(data)
        })
            .then(function (response) {
                if (response.status == 200) {
                    return response.json();
                } else {
                    if(response.status == 401){
                        if(em = reduxConf.get('emitter'))
                            em.emit('auth-error');
                    }
                    return {
                        success:false,
                        status:response.status
                    }
                }
            })
            .then(json => {
                if(!json.success){
                    reduxConf.get('emitter').emit('system-errors',json);
                }else{
                    console.log(json);
                    reduxConf.get('emitter').emit('payment_success',json);
                    dispatch(requestPaymentEnd(json,threadID,requestActions));
                }
            })
            .catch(error => {
                dispatch(requestPaymentEnd({
                    success:false
                },threadID,requestActions))

            });

    }
}
function requestPaymentStart(json,threadID,requestParams) {
    return {
        type: requestParams.REQUEST,
        threadID,
        json
    }
}
function requestPaymentEnd(json,threadID,requestParams) {
    return {
        type: requestParams.RESPONSE,
        threadID,
        json
    }
}