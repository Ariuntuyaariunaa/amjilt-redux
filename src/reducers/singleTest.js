/**
 * Created by Ganzorig on 2017-01-25.
 */
import {fetchTest,timeLineComment,fetchTimeLike,timeLineMoreComment} from '../constants/actionTypes';
const initialState = {
    test:{},
    status:0,
};
export default function main(state = initialState, action) {
    switch (action.type) {
        case fetchTest.REQUEST:
            return {
                ...state,
                status:1
            };
        case fetchTest.RESPONSE:
            if(action.json.success){
                return{
                    ...state,
                    status:0,
                    test:action.json.result
                };
            }else{
                return state;
            }
        case timeLineComment.REQUEST:
            return state;
        case timeLineComment.RESPONSE:
            if(action.json.success){
                if(state.test && state.test._id == action.json.id){
                    return {...state,
                        test:{...state.test,
                            comments:[...state.test.comments, ...[action.json.result]],
                            commentsCount: state.test.commentsCount +1
                        }
                    };
                }else{
                    return state;
                }
            }else{
                return state;
            }
        case fetchTimeLike.REQUEST:
            if(state.test && state.test._id == action.json.post_id){
                return {
                    ...state,
                    test:{...state.test,
                        likeLoading:true
                    }
                };
            }else{
                return state
            }
        case fetchTimeLike.RESPONSE:
            if(action.json.success){
                if(state.test && state.test._id == action.json.id){
                    return {
                        ...state,
                        test:{...state.test,
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
                    if(state.test && state.test._id == action.json.post_id){
                        return {
                            ...state,
                            test:{...state.test,
                                likeLoading:false
                            }
                        }
                    }else{
                        return state;
                    }
                }else{
                    return state;
                }
            }
        case timeLineMoreComment.REQUEST:
            return state;
        case timeLineMoreComment.RESPONSE:
            if(action.json.success){
                if(state.test && state.test._id == action.json.id){
                    return {
                        ...state,
                        test:{...state.test,
                            comments:[...action.json.result, ...state.test.comments]
                        }
                    }
                }else{
                    return state;
                }
            }else{
                return state;
            }
        default:
            return state;
    }
}