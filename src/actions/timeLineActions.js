/**
 * Created by battumur on 11/4/2016.
 */

import reduxConf from '../reduxConfig';
import querystring from 'querystring';
import * as networkActions from '../networkActions';
import * as constants from '../constants/actionTypes';
export function fetchTimeline(data, threadID = 'main') {
    let url = '/api/timeline/view';
    return networkActions.requestGet(constants.fetchTimeLine,url,{},data,threadID);
}
export function fetchTimelineAlt(data, threadID = 'main') {
    let url = '/api/timeline/view';
    return networkActions.requestGet(constants.fetchTimeLineAlt,url,{},data,threadID);
}
export function postComment(data, threadID = 'main'){
    let url = '/api/timeline/comment';
    return networkActions.requestPost(constants.timeLineComment,url,{},null,data,threadID);
}
export function onLikeSubmit(data, threadID = 'main'){
    let url = '/api/timeline/like';
    return networkActions.requestGet(constants.fetchTimeLike,url,{},data,threadID);
}
export function onReportSubmit(data, threadID = 'main'){
    let url = '/api/timeline/report';
    return networkActions.requestPost(constants.timeLineReport,url,{},null,data,threadID)
}
export function fetchRemovePost(id, threadID = 'main'){
    let url = `/api/timeline/remove/${id}`;
    return networkActions.requestGet(constants.timeLineRemove,url,{},null,threadID)
}
export function uploadImage(files, threadID = 'main'){
    let url = `/api/image/upload`;
    return networkActions.requestUploadPost(constants.timeLinePostImage,url,{},null,files,null,threadID)
}
export function postTimeline(data, threadID = 'main'){
    let url = `/api/timeline/post`;
    return networkActions.requestPost(constants.timeLinePostSave,url,{},null,data,threadID)
}

export function editPost(data, threadID = 'main'){
    let url = `/api/timeline/edit/post`;
    return networkActions.requestPost(constants.editPost,url,{},null,data,threadID)
}

export function fetchTimeLineRemoveImage(json, threadID = 'main') {
    return {
        type: constants.timeLineImageRemove.REQUEST,
        threadID,
        json
    }
}
export function closeComplete(threadID='main'){
    return {
        type: constants.inputComploate.REQUEST,
        threadID
    }
}
export function onShareSubmit(data, threadID = 'main') {
    let url = `/api/timeline/share/`;
    return networkActions.requestPost(constants.timeLineSharePost,url,{},null,data,threadID)
}
export function shareDelete(data, threadID = 'main'){
    let url = `/api/timeline/share/delete`;
    return networkActions.requestGet(constants.timeLineShareRemove,url,{},data,threadID)
}
export function fetchTimeLineClear(threadID='main') {
    return {
        type: constants.timeLineClear.REQUEST,
        threadID
    }
}
export function fetchRstorePost(id, threadID = 'main'){
    let url =`/api/timeline/restore/${id}`;
    return networkActions.requestGet(constants.timeLineRstorePost,url,{},null,threadID)
}
export function moreComments(data, threadID = 'main') {
    let url = `/api/timeline/comment/more?`+querystring.stringify(data);
    return networkActions.requestGet(constants.timeLineMoreComment,url,{},null,threadID)
}

export function fetchSaveLesson(id, threadID = 'main') {
    let url = `/api/timeline/save/`+id;
    return networkActions.requestGet(constants.fetchSaveLesson,url,{},null,threadID)
}
export function wrmo(threadID=null){
    return {
        type: constants.wrmo.REQUEST,
        threadID
    }
}
export function wrmc(threadID=null){
    return {
        type: constants.wrmc.REQUEST,
        threadID
    }
}