/**
 * Created by Lkhag on 2017-03-09.
 */

import * as networkActions from '../networkActions';
import * as constants from '../constants/actionTypes';

export function fetchFriendRequest(id,last,threadID='main') {
    let url = '/api/user/friend/requests/'+id+'?last='+last;
    return networkActions.requestGet(constants.fetchFriendRequest,url,{},null,threadID);
}
export function fetchRequestsClear(threadID='main') {
    return {
        type: constants.requestsClear.REQUEST,
        threadID
    }
}