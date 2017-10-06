/**
 * Created by Lkhag on 2017-03-09.
 */

import * as networkActions from '../networkActions';
import * as constants from '../constants/actionTypes';

export function fetchPhotos(slug) {
    let url = '/api/'+slug+'/photos/';
    return networkActions.requestGet(constants.fetchPhotos,url,{});
}
export function fetchAvatars(slug) {
    let url = '/api/'+slug+'/avatar/';
    return networkActions.requestGet(constants.fetchAvatars,url,{});
}
export function fetchCovers(slug) {
    let url = '/api/'+slug+'/cover/';
    return networkActions.requestGet(constants.fetchCovers,url,{});
}
export function clearPhotos(){
    return {
        type:"clear-gallery-photos"
    }
}
