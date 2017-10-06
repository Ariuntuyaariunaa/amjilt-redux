/**
 * Created by Nanduk92 on 1/16/2017.
 */
import * as networkActions from '../networkActions';
import * as constants from '../constants/actionTypes';
import reduxConf from '../reduxConfig';

export function fetchGroup(user, threadID = 'main') {
    if(user == 'me') {
        let url = `/api/${user}/groups`;
        return networkActions.requestGet(constants.fetchGroup, url, {}, user, threadID);
    }
    else {
        let url = `/api/user/${user}/groups`;
        return networkActions.requestGet(constants.fetchGroup, url, {}, user, threadID);
    }
}
export function fetchGroupClear(threadID = 'main'){
    return {
        type: constants.fetchGroupClear.REQUEST,
        threadID
    }
}
export function fetchTotalGroup(data, threadID = 'main') {
    let url = `/api/total/group`;
    return networkActions.requestGet(constants.fetchTotalGroup,url,{},data,threadID);
}

export function postGroup(data,header=null, requestParams = null,threadID = 'main'){
    let postGroup = constants.postGroup;
    let url = `/api/group/save`;
    return dispatch => {
        dispatch(requestGroupSaveStart(data,threadID,postGroup));
        if (reduxConf.get('token') !== undefined){
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
        console.log(currentUrl);
        console.log(header);
        console.log(reduxConf.get('token'));
        return fetch(currentUrl, {
            method: 'post',
            headers: header,
            credentials: 'same-origin',
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
                if(json.success)
                {
                    window.location.assign("/group/"+json.group.slug);
                }
                //dispatch(requestLessonSaveEnd(json,threadID,requestActions));
            })
            .catch(error => {
                console.log(error)
                // dispatch(requestLessonSaveEnd({
                //     success:false
                // },threadID,requestActions))
            });

    }
}
export function requestGroupSaveStart(json,threadID,requestParams) {
    return {
        type: requestParams.REQUEST,
        threadID,
        json
    }
}

export function fetchSuggestGroup(data, threadID = 'main') {
    let url = `/api/suggestGroup`;
    return networkActions.requestGet(constants.fetchSuggestGroup,url,{},data,threadID);
}

export function fetchGroupManaged(data, threadID = 'main') {
    let url = `/api/group/managed`;
    return networkActions.requestGet(constants.fetchGroupManaged,url,{},null,data,threadID);
}

export function fetchGroupJoined(data, threadID = 'main') {
    let url = `/api/group/joined`;
    return networkActions.requestGet(constants.fetchGroupJoined,url,{},data,threadID);
}

export function fetchGroupPending(data, threadID = 'main') {
    let url = `/api/group/pending`;
    return networkActions.requestGet(constants.fetchGroupPending,url,{},data,threadID);
}
export function fetchGroupManagedClear(threadID = 'main') {
    return {
        type: constants.fetchGroupManagedClear.REQUEST,
        threadID
    }
}
export function fetchGroupJoinedClear(threadID = 'main') {
    return {
        type: constants.fetchGroupJoinedClear.REQUEST,
        threadID
    }
}
export function fetchTotalGroupClear(threadID = 'main') {
    return {
        type: constants.fetchTotalGroupClear.REQUEST,
        threadID
    }
}
export function fetchGroupPendingClear(threadID = 'main') {
    return {
        type: constants.fetchGroupPendingClear.REQUEST,
        threadID
    }
}