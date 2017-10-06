/**
 * Created by Lkhag on 2017-03-09.
 */

import * as networkActions from '../networkActions';
import * as constants from '../constants/actionTypes';

export function fetchProfile(slug) {
    let url = '/api/user/'+slug;
    return networkActions.requestGet(constants.fetchProfile,url,{});
}
export function fetchSlugUser(id,slug) {
    let url = '/api/user/checkslug/'+slug+'/'+id;
    return networkActions.requestGet(constants.fetchSlugUser,url,{});
}
export function getBank() {
    let url = '/api/user/get/bank';
    return networkActions.requestGet(constants.getBank,url,{},null)
}
export function reqeustChangeBank(json,threadID=null) {
    return {
        type: constants.changeBank.REQUEST,
        threadID,
        json
    }
}
export function reqeustChangeBankNumber(json,threadID=null){
    return {
        type: constants.changeBankNumber.REQUEST,
        threadID,
        json
    }
}
export function reqeustChangeBankName(json,threadID=null){
    return {
        type: constants.changeBankName.REQUEST,
        threadID,
        json
    }
}
export function getSettings() {
    let url = '/api/user/get/settings';
    return networkActions.requestGet(constants.getSettings,url,{},null)
}
export function reqeustChangePhone(json,threadID=null) {
    return {
        type: constants.changePhone.REQUEST,
        threadID,
        json
    }
}
export function reqeustChangeBirthday(json,threadID=null) {
    return {
        type: constants.changeBirthday.REQUEST,
        threadID,
        json
    }
}
export function reqeustChangeGander(json,threadID=null) {
    return {
        type: constants.changeGander.REQUEST,
        threadID,
        json
    }
}
export function addBank(data,slug,threadID = 'main') {
    let url = '/api/user/bank/save/'+slug;
    return networkActions.requestPost(constants.addBank,url,{},null,data,threadID);
}
export function addName(data,slug,threadID = 'main') {
    let url = '/api/user/name/save/'+slug;
    return networkActions.requestPost(constants.addName,url,{},null,data,threadID);
}
export function addBday(data,slug,threadID = 'main') {
    let url = '/api/user/bday/save/'+slug;
    return networkActions.requestPost(constants.addBday,url,{},null,data,threadID);
}
export function addPhone(data,slug,threadID = 'main') {
    let url = '/api/user/phone/save/'+slug;
    return networkActions.requestPost(constants.addPhone,url,{},null,data,threadID);
}
export function addLocation(data,slug,threadID = 'main') {
    let url = '/api/user/location/save/'+slug;
    return networkActions.requestPost(constants.addLocation,url,{},null,data,threadID);
}
export function addSlug(data,slug,threadID = 'main') {
    let url = '/api/user/slug/save/'+slug;
    return networkActions.requestPost(constants.addSlug,url,{},null,data,threadID);
}
export function userPassword(data,id,threadID = 'main') {
    let url = '/api/user/password/save/'+id;
    return networkActions.requestPost(constants.userPassword,url,{},null,data,threadID);
}
