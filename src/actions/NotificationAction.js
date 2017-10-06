/**
 * Created by Ganzorig on 2017-02-20.
 */
import reduxConf from '../reduxConfig';
import querystring from 'querystring';
import * as networkActions from '../networkActions';
import * as constants from '../constants/actionTypes';
export function fetchNotificationGetCount(threadID = 'main'){
    let url = `/api/notification/getcount`;
    return networkActions.requestGet(constants.fetchNotificationCount,url,{},null,threadID);
}
export function fetchNotification(threadID = 'main') {
    let url = `/api/notification`;
    return networkActions.requestGet(constants.fetchNotification,url,{},null,threadID);
}
export function fetchFriendReqNotificationGetCount(threadID = 'main'){
    let url = `/api/friendreqnoti/getcount`;
    return networkActions.requestGet(constants.fetchFriendReqNotificationGetCount,url,{},null,threadID);
}
export function fetchFriendRequestNotification(threadID = 'main') {
    let url = `/api/friendreqnoticlear`;
    return networkActions.requestGet(constants.fetchFriendRequestNotification,url,{},null,threadID);
}
export function fetchNotificationAlt(data, threadID = 'main') {
    let url = `/api/notification?last=${data}`;
    return networkActions.requestGet(constants.fetchNotificationAlt,url,{},null,threadID);
}
export function fetchNotificationClear(threadID = 'main'){
    return {
        type: constants.fetchNotificationClear.REQUEST,
        threadID
    }
}
export function onNotificationReceived(threadID = 'main'){
    return {
        type: constants.fetchNotificationNew.REQUEST,
        threadID
    }
}