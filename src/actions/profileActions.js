/**
 * Created by Nanduk92 on 1/12/2017.
 */
import * as networkActions from '../networkActions';
import * as constants from '../constants/actionTypes';

export function fetchSearch(d, threadID = 'main') {
    let url = '/api/user/`+slug';
    let data ={
        credentials: 'same-origin'
    };
    return networkActions.requestPost(constants.fetchSearch,url,{},data);
}
export function fetchProfile(slug,threadID = 'main') {
    let url = '/api/user/'+slug;
    return networkActions.requestGet(constants.fetchProfile,url,{},null,threadID);
}
export function fetchSlugUser(id,slug) {
    let url = '/api/user/checkslug/'+slug+'/'+id;
    return networkActions.requestGet(constants.fetchSlugUser,url,{});
}

export function uploadImage(files,id,threadID = 'main') {
    let url = '/api/profileImage/upload/'+id;
    return networkActions.requestUploadPost(constants.uploadImage,url,{},null,files,null,threadID);
}
export function uploadAvatar(files,id,threadID = 'main') {
    let url = '/api/profileImage/upload/'+id;
    return networkActions.requestUploadPost(constants.uploadAvatar,url,{},null,files,null,threadID);
}
export function fetchUserAvatarSave(data,id,threadID = 'main') {
    let url = '/api/userAvatar/save/'+id;
    return networkActions.requestPost(constants.fetchUserAvatarSave,url,{},null,data,threadID);
}
export function fetchSingleGroupCoverSave(data,id,threadID = 'main') {
    let url = '/api/profileImage/save/'+id;
    return networkActions.requestPost(constants.fetchSingleGroupCoverSave,url,{},null,data,threadID);
}
export function fetchBusinessCheck(slug) {
    let url = '/api/business/'+slug;
    return networkActions.requestGet(constants.fetchBusinessCheck,url,{});
}
export function fetchTeacherRequest(data,threadID = 'main') {
    let url = '/api/teacher/request/';
    return networkActions.requestPost(constants.fetchTeacherRequest,url,{},null,data,threadID);
}
export function fetchOrlogo(slug) {
    let url = '/api/user/orlogo/'+slug;
    return networkActions.requestGet(constants.fetchOrlogo,url,{});
}
export function userReport(data,  threadID = 'main') {
    let url = '/api/user/report/';
    return networkActions.requestPost(constants.userReport,url,{},null,data,threadID);
}
export function urmo(threadID=null){
    return {
        type: constants.urmo.REQUEST,
        threadID
    }
}
export function urmc(threadID=null){
    return {
        type: constants.urmc.REQUEST,
        threadID
    }
}