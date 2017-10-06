/**
 * Created by Ganzorig on 2017-02-21.
 */
import reduxConf from '../reduxConfig';
import querystring from 'querystring';
import * as networkActions from '../networkActions';
import * as constants from '../constants/actionTypes';
export function fetchMessages(data, threadID = 'main') {
    let url = `/api/chat/messages`;
    return networkActions.requestGet(constants.headerMessages,url,{},null,threadID);
}
export function fetchMessagesGetCount(threadID = 'main'){
    let url = `/api/chat/msgcount`;
    return networkActions.requestGet(constants.fetchMessagesGetCount,url,{},null,threadID);
}