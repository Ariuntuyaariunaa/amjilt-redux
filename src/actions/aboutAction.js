/**
 * Created by Lkhag on 2017-03-09.
 */

import * as networkActions from '../networkActions';
import * as constants from '../constants/actionTypes';

export function getEducations(slug,threadID = 'main') {
    let url = '/api/user/all/educations/'+slug;
    return networkActions.requestGet(constants.getEducations,url,{},null,threadID);
}
export function addEbc(data,slug,threadID = 'main') {
    let url = '/api/user/ebc/save/'+slug;
    return networkActions.requestPost(constants.addEbc,url,{},null,data,threadID);
}
export function addHigh(data,slug,threadID = 'main') {
    let url = '/api/user/high/save/'+slug;
    return networkActions.requestPost(constants.addHigh,url,{},null,data,threadID);
}
export function addWork(data,slug,threadID = 'main') {
    let url = '/api/user/work/save/'+slug;
    return networkActions.requestPost(constants.addWork,url,{},null,data,threadID);
}
export function fetchDeleteEbc(slug,id,threadID = 'main') {
    let url = `/api/ebc/delete/${slug}/${id}`;
    return networkActions.requestGet(constants.fetchDeleteEbc,url,{},null,threadID);
}
export function fetchDeleteHigh(slug,id,threadID = 'main') {
    let url = `/api/high/delete/${slug}/${id}`;
    return networkActions.requestGet(constants.fetchDeleteHigh,url,{},null,threadID);
}
export function fetchDeleteWork(slug,id,threadID = 'main') {
    let url = `/api/work/delete/${slug}/${id}`;
    return networkActions.requestGet(constants.fetchDeleteWork,url,{},null,threadID);
}

