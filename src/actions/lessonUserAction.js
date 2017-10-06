/**
 * Created by Ganzorig on 2017-02-08.
 */
import reduxConf from '../reduxConfig';
import * as networkActions from '../networkActions';
import * as constants from '../constants/actionTypes';
export function fetchTimelineUser(data,threadID = 'main') {
    let url = '/api/timeline/view/user';
    return networkActions.requestGet(constants.fetchLessonUsers,url,{},data,threadID);
}