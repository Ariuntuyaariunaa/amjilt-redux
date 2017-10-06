/**
 * Created by zorig on 4/13/2017.
 */
import * as networkActions from '../networkActions';
import * as constants from '../constants/actionTypes';
import reduxConf from '../reduxConfig';

export function requestMessageUser(last) {
    let url = `/api/user/messages/all`;
    return networkActions.requestGet(constants.messagesUser,url,{},last,null);
}
export function fetchGetMessages(data) {
    let url = `/api/user/chat/messages/${data.slug}`;
    return networkActions.requestGet(constants.messagesUserMessages,url,{},data,null);
}
export function fetchAllMessageRemove(data) {
    let url = `/api/user/remove/messages/all/${data.channel}`;
    return networkActions.requestGet(constants.allMsgRemove,url,{},data,null);
}
export function fetchUserSearch(data) {
    let url = `/api/user/messages/search`;
    return networkActions.requestPost(constants.searchMsgUser,url,{},{},data,null);
}
export function fetchGetMessagesMore(data) {
    let url = `/api/user/chat/messages/${data.slug}`;
    return networkActions.requestGet(constants.messagesUserMessagesMore,url,{},data,null);
}
export function removeMsg(data) {
    let url = `/api/user/remove/messages/${data.id}`;
    return networkActions.requestGet(constants.msgRemoveOne,url,{},data,null);
}
export function receiveFullMessage(message){
    return {
        type: constants.receiveFullMessage.REQUEST,
        channel:message
    };
}
export function uploadImage(files,id,threadID = 'main') {
    let url = '/api/chatImage/upload/'+id;
    return networkActions.requestUploadPost(constants.uploadImage,url,{},null,files,null,threadID);
}