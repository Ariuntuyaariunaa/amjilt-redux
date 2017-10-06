/**
 * Created by Nanduk92 on 2/6/2017.
 */
import * as networkActions from '../networkActions';
import * as constants from '../constants/actionTypes';
import reduxConf from '../reduxConfig';

export function requestFriendList() {
    let url = `/api/user/friends`;
    return networkActions.requestGet(constants.requestFriendList,url,{},{},null);
}
export function fetchMessages(channelId) {
    let url = `/api/chat/messages/${channelId}`;
    return networkActions.requestGet(constants.fetchMessages,url,{},{},null);
}
export function fetchMessagesMore(channelId, last) {
    let url = `/api/chat/messages/${channelId}`;
    return networkActions.requestGet(constants.fetchMessagesMore,url,{},{id:channelId,last:last},null);
}
export function receiveChannel(channel) {
    return {
        type: constants.receiveChannel.REQUEST,
        channel:channel
    };
}
export function receiveMessage(message){
    return {
        type: constants.receiveMessage.REQUEST,
        message
    };
}
export function onNotificationReceived(notification){
    return {
        type:types.ON_NOTIFICATION_RECEIVED
    }
}
export function closeChannel(channelId){
    return {
        type: constants.closeChannel.REQUEST,
        id:channelId
    }
}

