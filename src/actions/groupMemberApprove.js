/**
 * Created by Nanduk92 on 1/27/2017.
 */
import * as networkActions from '../networkActions';
import * as constants from '../constants/actionTypes';
import reduxConf from '../reduxConfig';

export function membersGroupApprove(slug,data) {
    let url = `/api/single/group/`+slug+`/members`;
    return networkActions.requestGet(constants.membersGroupApprove,url,{},data);
}
export function membersMoreGroupApprove(slug,data) {
    let url = `/api/single/group/` + slug + `/members`;
    return networkActions.requestGet(constants.membersMoreGroupApprove,url,{},data);
}
export function approveGroupAction(slug,data) {
    let url = `/api/group/member/action/`+slug;
    return networkActions.requestGet(constants.approveGroupAction,url,{},data);
}