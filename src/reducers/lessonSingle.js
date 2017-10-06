/**
 * Created by Ganzorig on 2017-01-26.
 */
import {singleLesson,fetchTimeLike,timeLineComment,timeLineRemove,timeLineMoreComment,mediaMemoSave,
    audioMemo,audioMemoClose,getVideoMemo,videoMemoClose,removeDeleteMemo} from '../constants/actionTypes';
const initialState = {
    lesson:{},
    status:0,
    fileShow:false,
    file:"",
    audioMemos:[],
    videoMemos:[],
};
export default function main(state = initialState, action) {
    switch (action.type) {
        case singleLesson.REQUEST:
            return {
                ...state,
                status:1
            };
        case singleLesson.RESPONSE:
            if(action.json.success){
                return{
                    ...state,
                    status:0,
                    lesson:action.json.result
                };
            }else{
                return state;
            }
        case fetchTimeLike.REQUEST:
            if(state.lesson && state.lesson._id == action.json.post_id){
                return {
                    ...state,
                    lesson:{...state.lesson,
                        likeLoading:true
                    }
                };
            }else{
                return state
            }
        case fetchTimeLike.RESPONSE:
            if(action.json.success){
                if(state.lesson && state.lesson._id == action.json.id){
                    return {
                        ...state,
                        lesson:{...state.lesson,
                            likeCount:action.json.likeCount,
                            likes: action.json.likes,
                            likeLoading:false
                        }
                    }
                }else{
                    if(action.json.post_id != undefined){
                        if(state.lesson && state.lesson._id == action.json.post_id){
                            return {
                                ...state,
                                lesson:{...state.lesson,
                                    likeLoading:false
                                }
                            }
                        }else{
                            return state
                        }
                    }else{
                        return state
                    }
                }
            }else{
                return state;
            }
        case timeLineComment.REQUEST:
            return state;
        case timeLineComment.RESPONSE:
            if(action.json.success){
                if(state.lesson && state.lesson._id == action.json.id){
                    return {...state,
                        lesson:{...state.lesson,
                            comments:[...state.lesson.comments, ...[action.json.result]],
                            commentsCount: state.lesson.commentsCount +1
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
                if(state.lesson && state.lesson._id == action.json.result){
                    return {
                        ...state,
                        lesson:{
                            ...state.lesson,
                            status:'D'
                        }
                    };
                }else{
                    return state;
                }
            }else {
                return state;
            }
        case timeLineMoreComment.REQUEST:
            return state;
        case timeLineMoreComment.RESPONSE:
            if(action.json.success){
                if(state.lesson && state.lesson._id == action.json.id){
                    return {
                        ...state,
                        lesson:{...state.lesson,
                            comments:[...action.json.result, ...state.lesson.comments]
                        }
                    }
                }else{
                    return state;
                }
            }else{
                return state;
            }
        case mediaMemoSave.REQUEST:
            return state;
        case mediaMemoSave.RESPONSE:
            if(action.json.success){
                if(action.json.new){
                    return {
                        ...state,
                        videoMemos:[...state.videoMemos,...[action.json.memo]]
                    }
                }else{
                    return {
                        ...state,
                        videoMemos:state.videoMemos.map(function(item,index){
                            if(item._id == action.json.memo._id){
                                return action.json.memo
                            }
                            return item;
                        })
                    }
                }
            }
            return state;
        case audioMemo.REQUEST:
            return state;
        case audioMemo.RESPONSE:
            if(action.json.success){
                return {
                    ...state,
                    audioMemos:action.json.memos
                }
            }
            return state;
        case audioMemoClose.REQUEST:
            return {
                ...state,
                audioMemos: state.audioMemos.map((item, index) => {
                    if (item._id == action.json._id) {
                        return {
                            ...item,
                            close: true
                        }
                    }
                    return item;
                })
            };
        case getVideoMemo.REQUEST:
            return state;
        case getVideoMemo.RESPONSE:
            if(action.json.success){
                return {
                    ...state,
                    videoMemos:action.json.memos
                }
            }
            return state;
        case videoMemoClose.REQUEST:
            return {
                ...state,
                videoMemos: state.videoMemos.map((item, index) => {
                    if (item._id == action.json.item_id) {
                        return {
                            ...item,
                            close: true
                        }
                    }
                    return item;
                })
            };
        case removeDeleteMemo.REQUEST:
            return state;
        case removeDeleteMemo.RESPONSE:
            if(action.json.success){
                var filter = state.videoMemos.filter(function(item,index){
                    if(item._id == action.json.item_id) return false;
                    else return true;
                });
                return {
                    ...state,
                    videoMemos:filter
                }
            }
            return state;
        default:
            return state;
    }
}