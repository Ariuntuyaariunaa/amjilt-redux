/**
 * Created by Nanduk92 on 1/11/2017.
 */
import reduxConf from '../reduxConfig';
import * as networkActions from '../networkActions';
import * as constants from '../constants/actionTypes';
import querystring from 'querystring';

export function fetchSearch(data, threadID = 'main') {
    let url = '/api/search';
    return networkActions.requestGet(constants.fetchSearch,url,{},data,threadID);
}
export function fetchPageSearch(data, threadID = 'main') {
    let url = '/api/search/view';
    return networkActions.requestGet(constants.fetchPageSearch,url,{},data,threadID);
}
export function fetchPSfullLoadM(data, threadID = 'main') {
    let url = '/api/searchpagefull';
    return networkActions.requestGet(constants.fetchPageSearchfull,url,{},data,threadID);
}
export function fetchSearchRecent(threadID = 'main') {

    let url = '/api/search/recent';
    return networkActions.requestGet(constants.fetchSearchRecent,url,{},null,threadID);
}
export function fetchSearchRecentreq(data, threadID = 'main') {
    let url = '/api/search/recentsearchreq';
    return networkActions.requestGet(constants.fetchSearchRecentreq,url,{},data,threadID);
}
export function fetchPageSearchfull(data, threadID = 'main') {
    let url = '/api/searchpagefull';
    return networkActions.requestGet(constants.fetchPageSearchfull,url,{},data,threadID);
}
export function fetchPageSearchUser(data, threadID = 'main'){
    let url = '/api/searchpagefull';
    return networkActions.requestGet(constants.fetchPageSearchUser,url,{},data,threadID);
}
export function fetchPageSearchGroup(data, threadID = 'main'){
    let url = '/api/searchpagefull';
    return networkActions.requestGet(constants.fetchPageSearchGroup,url,{},data,threadID);
}
export function fetchPageSearchLesson(data, threadID = 'main'){
    let url = '/api/searchpagefull';
    return networkActions.requestGet(constants.fetchPageSearchLesson,url,{},data,threadID);
}
export function fetchPageSearchTest(data, threadID = 'main'){
    let url = '/api/searchpagefull';
    return networkActions.requestGet(constants.fetchPageSearchTest,url,{},data,threadID);
}
export function fetchPageSearchPost(data, threadID = 'main'){
    let url = '/api/searchpagefull';
    return networkActions.requestGet(constants.fetchPageSearchPost,url,{},data,threadID);
}
export function fetchPageSearchClear(threadID = 'main'){
    return {
        type: constants.fetchPageSearchClear.REQUEST,
        threadID
    }
}