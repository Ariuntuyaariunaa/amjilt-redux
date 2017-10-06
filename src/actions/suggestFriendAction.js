/**
 * Created by Ganzorig on 2017-02-02.
 */
import reduxConf from '../reduxConfig';
import * as networkActions from '../networkActions';
import * as constants from '../constants/actionTypes';
export function friends(threadID = 'main') {
    let url = '/api/user/morefriends';
    return networkActions.requestGet(constants.suggestFriend,url,{},null,threadID);
}