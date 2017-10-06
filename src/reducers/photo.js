/**
 * Created by Lkhag on 2017-03-09.
 */

import {fetchPhotos,fetchCovers,fetchAvatars,} from '../constants/actionTypes';

const initialState = {
    covers:[],
    avatars:[],
    photos:[],
    status: 1,//0 amjilttai unshij duussan 1 - loading 2 - error 3-not found,4 hooson baina,5 Failed to fetch
    stats1:1,
    stats2:1,
    stats3:1,
}

export default function photo(state = initialState, action) {
    switch (action.type) {
        case "clear-gallery-photos":
            return {
                covers:[],
                avatars:[],
                photos:[],
                status:1,
                stats1:1,
                stats2:1,
                stats3:1,
            };
        case fetchPhotos.REQUEST:
            return state;
        case fetchPhotos.RESPONSE:
            if(action.json.success){
                return {
                    ...state,
                    photos:action.json.photos,
                    stats1:0,
                };
            }else {
                return {
                    ...state,
                    status:5
                }
            }
        case fetchAvatars.REQUEST:
            return state;
        case fetchAvatars.RESPONSE:
            if(action.json.success){
                return {
                    ...state,
                    avatars:action.json.avatar,
                    stats2:0,
                };
            }else {
                return {
                    ...state,
                    status:5
                }
            }
        case fetchCovers.REQUEST:
            return state;
        case fetchCovers.RESPONSE:
            if(action.json.success){
                return {
                    ...state,
                    covers:action.json.cover,
                    stats3:0,
                };
            }else {
                return {
                    ...state,
                    status:5
                }
            }
        default:
            return state;
    }
}