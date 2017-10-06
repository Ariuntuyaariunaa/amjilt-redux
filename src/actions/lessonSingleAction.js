/**
 * Created by Ganzorig on 2017-01-26.
 */
import reduxConf from '../reduxConfig';
import * as networkActions from '../networkActions';
import * as constants from '../constants/actionTypes';
export function fetchLesson(slug, threadID = 'main') {
    let url = `/api/lesson/get/${slug}`;
    return networkActions.requestGet(constants.singleLesson,url,{},null,threadID);
}
export function fetchMemo(data, threadID = 'main') {
    let url = `/api/memo/save`;
    return networkActions.requestPost(constants.mediaMemoSave,url,{},null,data,threadID);
}
export function fetchAudioMemo(data, threadID = 'main') {
    let url = `/api/memo/audio/save`;
    return networkActions.requestPost(constants.mediaMemoSave,url,{},null,data,threadID);
}
export function getAudioMemo(data,threadID = 'main') {
    let url = `/api/audio/get/${data}`;
    return networkActions.requestGet(constants.audioMemo,url,{},null,threadID);
}
export function audioMemoClose(json,threadID = 'main'){
    return {
        type: constants.audioMemoClose.REQUEST,
        threadID,
        json
    }
}
export function getVideoMemo(data,threadID = 'main') {
    let url = `/api/video/get/${data}`;
    return networkActions.requestGet(constants.getVideoMemo,url,{},null,threadID);
}
export function videoMemoClose(json,threadID = 'main') {
    return {
        type: constants.videoMemoClose.REQUEST,
        threadID,
        json
    }
}
export function removeDeleteMemo(data,threadID = 'main'){
    let url = `/api/video/remove/${data}`;
    return networkActions.requestGet(constants.removeDeleteMemo,url,{},null,threadID);
}