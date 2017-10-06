/**
 * Created by Nanduk92 on 1/27/2017.
 */

import * as networkActions from '../networkActions';
import * as constants from '../constants/actionTypes';
import reduxConf from '../reduxConfig';

export function membersGroupBlock(slug,data) {
    let url = `/api/single/group/`+slug+`/members/block`;
    return networkActions.requestGet(constants.membersGroupBlock,url,{},data);
}
export function membersGroupBlockMore(slug,data) {
    let url = `/api/single/group/`+slug+`/members/block`;
    return networkActions.requestGet(constants.membersGroupBlockMore,url,{},data);
}

export function blockGroupAction(slug,data) {
    let url = `/api/group/member/action/`+slug;
    return networkActions.requestGet(constants.blockGroupAction,url,{},data);
}