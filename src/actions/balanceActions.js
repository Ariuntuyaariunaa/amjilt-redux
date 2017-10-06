/**
 * Created by zorig on 3/6/2017.
 */
import reduxConf from '../reduxConfig';
import * as networkActions from '../networkActions';
import * as constants from '../constants/actionTypes';
export function fetchBalance(slug,threadID = 'main') {
    let url = `/api/balance/${slug}`;
    return networkActions.requestGet(constants.fetchBalance,url,{},null,threadID);
}