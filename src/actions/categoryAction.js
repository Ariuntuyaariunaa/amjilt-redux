/**
 * Created by Ganzorig on 2017-01-18.
 */
import reduxConf from '../reduxConfig';
import * as networkActions from '../networkActions';
import * as constants from '../constants/actionTypes';
export function fetchCategory(threadID = 'main') {
    let url = '/api/get/category/user';
    return networkActions.requestGet(constants.fetchCategory,url,{},null,threadID);
}