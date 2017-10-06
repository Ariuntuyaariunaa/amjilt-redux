/**
 * Created by Ganzorig on 2017-01-25.
 */
import reduxConf from '../reduxConfig';
import * as networkActions from '../networkActions';
import * as constants from '../constants/actionTypes';
export function fetchPost(id, threadID = 'main') {
    let url = `/api/single/post/${id}`;
    return networkActions.requestGet(constants.singlePost,url,{},null,threadID);
}