/**
 * Created by Nanduk92 on 2/8/2017.
 */
import * as networkActions from '../networkActions';
import * as constants from '../constants/actionTypes';
import reduxConf from '../reduxConfig';

export function fetchUserSupports() {
    let url = `/api/support`;
    return networkActions.requestGet(constants.fetchUserSupports,url,{},null);
}

export function fetchSupportSingle(id) {
    let url = `/api/support/`+id;
    return networkActions.requestGet(constants.fetchSupportSingle,url,{},null);
}

export function supportCom(data) {
    let url = `/api/support/com`;
    return networkActions.requestPost(constants.supportCom,url,{},null,data);
}

export function supportInbox(data) {
    let url = `/api/support/add`;
    return networkActions.requestPost(constants.supportInbox,url,{},null,data);
}

export function smo(threadID=null){
    return {
        type: constants.smo.REQUEST,
        threadID
    }
}
export function smc(threadID=null){
    return {
        type: constants.smc.REQUEST,
        threadID
    }
}
