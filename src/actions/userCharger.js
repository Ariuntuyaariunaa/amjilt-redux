/**
 * Created by Nanduk92 on 5/17/2017.
 */
import * as networkActions from '../networkActions';
import * as constants from '../constants/actionTypes';

export function fetchCharger(slug,threadID = 'main') {
    let url = `/api/charger/${slug}`;
    return networkActions.requestGet(constants.fetchCharger,url,{},null,threadID);
}
export function userChargeAdd(data,threadID = 'main') {
    let url = `/api/charger/add/`;
    return networkActions.requestPost(constants.userChargeAdd,url,{},null,data,threadID);
}
export function cmo(threadID=null){
    return {
        type: constants.cmo.REQUEST,
        threadID
    }
}
export function cmc(threadID=null){
    return {
        type: constants.cmc.REQUEST,
        threadID
    }
}