/**
 * Created by Nanduk92 on 5/25/2017.
 */
import reduxConf from '../reduxConfig';
import * as networkActions from '../networkActions';
import * as constants from '../constants/actionTypes';
export function fetchBoard(threadID = 'main') {
    let url = '/api/leaderboard';
    return networkActions.requestGet(constants.fetchBoard,url,{},null,threadID);
}