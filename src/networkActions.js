/**
 * Created by battumur on 11/4/2016.
 */
import fetch from 'fetch-everywhere';
import reduxConf from './reduxConfig';
import querystring from 'querystring';
export function requestGet(requestActions,url,header, requestParams = null,threadID = 'main') {
    return dispatch => {
        dispatch(requestStart(requestParams,threadID,requestActions));
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
            method: 'get',
            headers: header,
            credentials: 'same-origin'
        })
            .then(function (response) {
                if (response.status == 200) {
                    return response.json();
                }else if(response.status == 404){
                    if(reduxConf.get('emitter'))
                        reduxConf.get('emitter').emit('not-found');
                } else {
                    if(response.status == 401){
                        if(reduxConf.get('emitter'))
                            reduxConf.get('emitter').emit('auth-error');
                    }
                    return {
                        success:false,
                        sucmod:false,
                        status:response.status
                    }
                }
            })
            .then(json => {
                if(!json.success){
                    reduxConf.get('emitter').emit('system-errors',json);
                }
                if(json.sucmod) {
                    reduxConf.get('emitter').emit('system-success',{msg:json.msg});
                }
                if(json.slug_change){
                    reduxConf.get('emitter').emit('system-redirect',{slug:json.data.slug,change_url:json.change_url});
                }
                if(json.user_slug_change){
                    reduxConf.get('emitter').emit('system-redirect',{slug:json.data.slug,change_url:json.change_url});
                }
                dispatch(requestEnd(json,threadID,requestActions))
            })
            .catch(error => {
                console.log(error);
                reduxConf.get('emitter').emit('system-errors',{msg:'Интернет холболтоо шалгана уу'});
                dispatch(requestEnd({success:false,error:error,data:requestParams},threadID,requestActions))
            });

    }

}
function requestStart(json,threadID,requestParams) {
    return {
        type: requestParams.REQUEST,
        threadID,
        json
    }
}
function requestEnd(json,threadID,requestParams) {
    return {
        type: requestParams.RESPONSE,
        threadID,
        json
    }
}

export function requestPost(requestActions,url,header, requestParams = null,data,threadID = 'main') {
    return dispatch => {
        dispatch(requestPostStart(data,threadID,requestActions));
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
                }else if(response.status == 404){
                    if(reduxConf.get('emitter'))
                        reduxConf.get('emitter').emit('not-found');
                } else {
                    if(response.status == 401){
                        if(em = reduxConf.get('emitter'))
                            em.emit('auth-error');
                    }
                    return {
                        success:false,
                        status:response.status,
                        sucmod:false,
                    }
                }
            })
            .then(json => {
                if(!json.success){
                    reduxConf.get('emitter').emit('system-errors',json);
                }
                if(json.sucmod) {
                    reduxConf.get('emitter').emit('system-success',{msg:json.msg});
                }
                if(json.success && json.model =='close'){
                    reduxConf.get('emitter').emit('profile-cover-close');
                }
                if(json.success && json.avatarModel =='close'){
                    reduxConf.get('emitter').emit('profile-avatar-close');
                }
                if(json.success && json.groupModel == 'close'){
                    reduxConf.get('emitter').emit('group-cover-close');
                }
                dispatch(requestPostEnd(json,threadID,requestActions));
            })
            .catch(error => {
                reduxConf.get('emitter').emit('system-errors',{msg:'Интернет холболтоо шалгана уу'});
                if(error){
                    if(error.message == 'Failed to fetch'){
                        reduxConf.get('emitter').emit('system-errors',{msg:'Интернет холболтоо шалгана уу'});
                    }
                }
                dispatch(requestPostEnd({
                    success:false,error:error,data:data
                },threadID,requestActions))

            });

    }

}
function requestPostStart(json,threadID,requestParams) {
    return {
        type: requestParams.REQUEST,
        threadID,
        json
    }
}
function requestPostEnd(json,threadID,requestParams) {
    return {
        type: requestParams.RESPONSE,
        threadID,
        json
    }
}

export function requestUploadPost(requestActions,url,header, requestParams = null,files,type=null,threadID = 'main') {
    var data = new FormData();
    var id = Date.now();
    data.append('image', files[0]);
    data.append('id',id);
    return dispatch => {
        dispatch(requestUploadStart({id:id, file:files[0]},threadID,requestActions,type));
        if(reduxConf.get('token') !== undefined){
            header = {
                ...header,
                token:reduxConf.get('token')
            }
        }
        header = {
            ...header,
            'Accept': 'application/json'
        };
        let currentUrl = `${reduxConf.get('host')}${url}`;
        if(requestParams){
            currentUrl +='?'+querystring.stringify(requestParams)
        }
        return fetch(currentUrl, {
            method: 'post',
            credentials: 'same-origin',
            headers: header,
            body: data
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
                }
                dispatch(requestUploadEnd(json,threadID,requestActions,type));
            })
            .catch(error => {
                dispatch(requestUploadEnd({
                    success:false
                },threadID,requestActions,type))

            });

    }
}
function requestUploadStart(json,threadID,requestParams,type){
    return {
        type: requestParams.REQUEST,
        threadID,
        mediaType: type,
        json
    }
}
function requestUploadEnd(json,threadID,requestParams,type){
    return {
        type: requestParams.RESPONSE,
        threadID,
        mediaType: type,
        json
    }
}