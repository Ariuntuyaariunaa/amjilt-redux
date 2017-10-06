/**
 * Created by Ganzorig on 2017-02-02.
 */
import reduxConf from '../reduxConfig';
import * as networkActions from '../networkActions';
import * as constants from '../constants/actionTypes';
export function fetchSuggestGroup(threadID = 'main') {
    let url = '/api/suggestGroup';
    return networkActions.requestGet(constants.suggestGroups,url,{},null,threadID);
}