/**
 * Created by Lkhag on 2017-03-06.
 */

import * as networkActions from '../networkActions';
import * as constants from '../constants/actionTypes';

export function mutalFriends(slug) {
    let url = '/api/user/friends/'+slug;
    return networkActions.requestGet(constants.mutalFriends,url,{});
}
export function fetchFriendList(slug,last, threadID = 'main') {
    let url = '/api/user/'+slug+'/friends?last='+last;
    return networkActions.requestGet(constants.fetchFriendList,url,{},null,threadID);
}
export function fetchFriendListMore(slug,last, threadID = 'main') {
    let url = '/api/user/'+slug+'/friends?last='+last;
    return networkActions.requestGet(constants.fetchFriendListMore,url,{},null,threadID);
}
export function friendAction(data, threadID = 'main') {
    let url = '/api/user/action/friendRequest';
    return networkActions.requestGet(constants.friendAction,url,{},data,threadID);
}
export function fetchFriendRequest(id,last) {
    let url = '/api/user/friend/requests/'+id+'?last='+last;
    return networkActions.requestGet(constants.fetchFriendRequest,url,{});
}
export function fetchRequestsClear(threadID='main') {
    return {
        type: constants.requestsClear.REQUEST,
        threadID
    }
}
export function checkFriendship(id,threadID='main') {
    let url = '/api/user/friendship/'+id;
    return networkActions.requestGet(constants.checkFriendship,url,{},null,threadID);
}
export function follow(slug,action,threadID = 'main') {
    let url = '/api/user/'+slug+'/follow?action='+(!action);
    return networkActions.requestGet(constants.follow,url,{},null,threadID);
}