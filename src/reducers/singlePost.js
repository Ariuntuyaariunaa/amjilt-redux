/**
 * Created by Ganzorig on 2017-01-25.
 */
import {singlePost,fetchTimeLike,timeLineComment,timeLineRemove,editPost} from '../constants/actionTypes';
const initialState = {
    post:{},
    status:1,
};
export default function main(state = initialState, action) {
    switch (action.type) {
        case singlePost.REQUEST:
            return {
                ...state,
                status:1
            };
        case singlePost.RESPONSE:
            if(action.json.success){
                return{
                    ...state,
                    status:0,
                    post:action.json.data
                };
            }else{
                return state;
            }
        case fetchTimeLike.REQUEST:
            if(state.post && state.post._id == action.json.post_id){
                return {
                    ...state,post:{...state.post,
                        likeLoading:true
                    }
                };
            }else{
                return state
            }
        case fetchTimeLike.RESPONSE:
            if(action.json.success){
                if(state.post && state.post._id == action.json.id){
                    return {
                        ...state,
                        post:{...state.post,
                            likeCount:action.json.likeCount,
                            likes: action.json.likes,
                            likeLoading:false
                        }
                    }
                }else{
                    return state
                }
            }else{
                if(action.json.post_id != undefined){
                    if(state.post && state.post._id == action.json.post_id){
                        return {
                            ...state,
                            post:{...state.post,
                                likeLoading:false
                            }
                        }
                    }else{
                        return state
                    }
                }else{
                    return state;
                }
            }
        case timeLineComment.REQUEST:
            return state;
        case timeLineComment.RESPONSE:
            if(action.json.success){
                if(state.post && state.post._id == action.json.id){
                    return {...state,
                        post:{...state.post,
                            comments:[...state.post.comments, ...[action.json.result]],
                            commentsCount: state.post.commentsCount +1
                        }
                    };
                }else{
                    return state;
                }
            }else{
                return state;
            }
        case timeLineRemove.REQUEST:
            return state;
        case timeLineRemove.RESPONSE:
            if(action.json.success){
                if(state.post && state.post._id == action.json.result){
                    return {
                        ...state,
                        post:{
                            ...state.post,
                            status:'D'
                        }
                    };
                }else{
                    return state;
                }
            }else {
                return state;
            }
        case 'EDIT_POST_SUCCESS':
            if(action.json.success){
                if(state.post && state.post._id == action.json.data._id){
                    return {
                        ...state,
                        post:{...state.post,
                            description:action.json.data.description,
                            images:action.json.images
                        }
                    }
                }else{
                    return state;
                }
            }else{
                return state;
            }
        case editPost.RESPONSE:
            if(action.json.success){
                if(state.post._id === action.json.data._id){
                    return {
                        ...state,
                        post:{
                            ...state.post,
                            description:action.json.data.description,
                            images:action.json.images
                        }
                    };
                }else{
                    return state;
                }
            }else {
                return state;
            }
        default:
            return state;
    }
}