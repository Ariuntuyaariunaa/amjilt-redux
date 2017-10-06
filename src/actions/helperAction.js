/**
 * Created by Nanduk92 on 5/25/2017.
 */
import reduxConf from '../reduxConfig';
import * as networkActions from '../networkActions';
import * as constants from '../constants/actionTypes';

export function hmo(threadID=null){
    return {
        type: constants.hmo.REQUEST,
        threadID
    }
}
export function hmc(threadID=null){
    return {
        type: constants.hmc.REQUEST,
        threadID
    }
}
export function stepStart(data,threadID = 'main') {
    return {
        type: constants.stepStart.REQUEST,
        threadID
    }
}
export function stepFirst(data,threadID = 'main') {
    let url = '/api/user/step/first/';
    return networkActions.requestPost(constants.stepFirst,url,{},null,data,threadID);
}
export function stepSecond(data,threadID = 'main') {
    let url = '/api/user/step/second/';
    return networkActions.requestPost(constants.stepSecond,url,{},null,data,threadID);
}
export function stepThird(data,threadID = 'main') {
    return {
        type: constants.stepThird.REQUEST,
        threadID
    }
}