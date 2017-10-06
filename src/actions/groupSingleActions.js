/**
 * Created by Nanduk92 on 1/17/2017.
 */
import reduxConf from '../reduxConfig';
import * as networkActions from '../networkActions';
import * as constants from '../constants/actionTypes';

export function fetchGroupSingle(slug, threadID = 'main') {
    let url = '/api/single/group/'+slug;
    return networkActions.requestGet(constants.fetchGroupSingle,url,{},null,threadID);
}

export function fetchSlugGroup(id,slug, threadID = 'main') {
    let url = '/api/single/group/checkslug/'+slug+'/'+id;
    return networkActions.requestGet(constants.fetchSlugGroup,url,{},null,threadID);
}

export function fetchEditGroup(slug,data,threadID='main') {
    let url = '/api/single/group/edit/'+slug;
    return networkActions.requestPost(constants.fetchEditGroup,url,{},slug,data,threadID);
}

export function changeTypeGroup(slug,data,threadID='main') {
    let url = '/api/single/group/type/'+slug;
    return networkActions.requestPost(constants.changeTypeGroup,url,{},slug,data,threadID);
}

export function fetchRemoveGroup(slug,header=null, requestParams = null,threadID = 'main'){
    let fetchRemoveGroup = constants.fetchRemoveGroup;
    let url = '/api/remove/group/'+slug;
    return dispatch => {
        dispatch(requestRemoveStart(slug,threadID,fetchRemoveGroup));
        if(reduxConf.get('token') !== undefined){
            header = {
                ...header,
                token:reduxConf.get('token')
            }
        }
        header = {
            ...header,
            credentials: 'same-origin'
        };
        let currentUrl = `${reduxConf.get('host')}${url}`;
        if(requestParams){
            currentUrl +='?'+querystring.stringify(requestParams)
        }
        return fetch(currentUrl, {
            headers: header,
            credentials: 'same-origin',
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
            if(json.success)
            {
                window.location.assign("/groups/");
            }
            //dispatch(requestLessonSaveEnd(json,threadID,requestActions));
        })
        .catch(error => {
            reduxConf.get('emitter').emit('system-errors',json);
            // dispatch(requestLessonSaveEnd({
            //     success:false
            // },threadID,requestActions))
        });
    }
}
export function requestRemoveStart(json,threadID,requestParams) {
    return {
        type: requestParams.REQUEST,
        threadID,
        json
    }
}

export function fetchMemberRequestGroup(slug, threadID = 'main') {
    let url = '/api/request/group';
    return networkActions.requestGet(constants.fetchMemberRequestGroup,url,{},slug,threadID);
}

export function cancellationGroup(slug,threadID = 'main') {
    let url = '/api/cancellation/group';
    return networkActions.requestGet(constants.cancellationGroup,url,{},slug,threadID);
}

export function uploadImage(files,slug,threadID = 'main') {
    let url = '/api/coverImage/upload/'+slug;
    return networkActions.requestUploadPost(constants.groupUploadImage,url,{},null,files,threadID);
}

export function fetchGroupSingleCoverSave(data,slug,threadID = 'main') {
    let url = '/api/coverImage/save/'+slug;
    return networkActions.requestPost(constants.fetchSingleGroupCoverSave,url,{},null,data,threadID);
}

export function searchMember(data,threadID = 'main') {
    let url = '/api/group/user/search';
    return networkActions.requestPost(constants.searchMember,url,{},data);
}

export function groupAddUser(data,threadID = 'main') {
    let url = '/api/group/user/add';
    return networkActions.requestPost(constants.groupAddUser,url,{},data);
}

export function closeUserFind() {
    return {
        type:constants.GROUP_USER_GROUP_CLOSE
    }
}

export function fetchLeaveGroup(slug,header=null, requestParams = null,threadID = 'main'){
    let fetchLeaveGroup = constants.fetchLeaveGroup;
    let url = '/api/leave/group/'+slug;
    return dispatch => {
        dispatch(requestLeaveStart(slug,threadID,fetchLeaveGroup));
        if(reduxConf.get('token') !== undefined){
            header = {
                ...header,
                token:reduxConf.get('token')
        }
        }
        header = {
            ...header,
            credentials: 'same-origin'
    };
        let currentUrl = `${reduxConf.get('host')}${url}`;
        if(requestParams){
            currentUrl +='?'+querystring.stringify(requestParams)
        }
        return fetch(currentUrl, {
                headers: header,
                credentials: 'same-origin',
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
                if(json.success)
        {
            window.location.assign("/groups/");
        }
        //dispatch(requestLessonSaveEnd(json,threadID,requestActions));
    })
    .catch(error => {
            reduxConf.get('emitter').emit('system-errors',json);
        // dispatch(requestLessonSaveEnd({
        //     success:false
        // },threadID,requestActions))
    });
    }
}
export function requestLeaveStart(json,threadID,requestParams) {
    return {
        type: requestParams.REQUEST,
        threadID,
        json
    }
}
export function groupReport(data) {
    let url = `/api/single/group/report`;
    return networkActions.requestPost(constants.groupReport,url,{},null,data);
}

export function grmo(threadID=null){
    return {
        type: constants.grmo.REQUEST,
        threadID
    }
}
export function grmc(threadID=null){
    return {
        type: constants.grmc.REQUEST,
        threadID
    }
}