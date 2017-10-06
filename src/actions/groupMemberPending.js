/**
 * Created by Nanduk92 on 1/27/2017.
 */

import * as networkActions from '../networkActions';
import * as constants from '../constants/actionTypes';
import reduxConf from '../reduxConfig';

export function membersGroupPending(slug,data) {
    let url = `/api/single/group/`+slug+`/members/pending`;
    return networkActions.requestGet(constants.membersGroupPending,url,{},data);
}
export function membersGroupMorePending(slug,data) {
    let url = `/api/single/group/`+slug+`/members/pending`;
    return networkActions.requestGet(constants.membersGroupMorePending,url,{},data);
}

export function pendingGroupAction(slug,data) {
    let url = `/api/group/member/action/`+slug;
    return networkActions.requestGet(constants.pendingGroupAction,url,{},data);
}