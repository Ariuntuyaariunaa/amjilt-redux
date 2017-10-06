/**
 * Created by Ganzorig on 2017-01-26.
 */
import reduxConf from '../reduxConfig';
import * as networkActions from '../networkActions';
import * as constants from '../constants/actionTypes';
export function fetchTest(id, threadID = 'main') {
    let url = `/api/test/get/${id}`;
    return networkActions.requestGet(constants.fetchTest,url,{},null,threadID);
}