import {fetchTimeLine,fetchTimeLineAlt,timeLineComment,fetchTimeLike,timeLineReport,timeLineRemove,
    timeLinePostImage,timeLineImageRemove,timeLinePostSave,inputComploate,timeLineSharePost,timeLineShareRemove,
    timeLineClear,timeLineRstorePost,timeLineMoreComment,editPost,fetchSaveLesson,wrmo,wrmc,} from '../constants/actionTypes';
const initialState = {
    items: [],
    images:[],
    complete:false,
    more:false,
    postLoading:false,
    status: 1,//0 amjilttai unshij duussan 1 - loading 2 - error 3-not found,4 hooson baina,5 Failed to fetch
    reportModal: false,
    reportLoading: false,
    reportSubmit: false,
};

export default function main(state = initialState, action) {
    switch (action.type) {
        case fetchTimeLine.REQUEST:
            return {
                ...state,
                status:1,
                more:false
            };
        case fetchTimeLine.RESPONSE:

            if(action.json.success){
                let more = true;
                let status = 0;
                if(action.json.result.length < 10){
                    more = false
                }
                if(state.items.length<=0 && action.json.result.length<=0){
                    status = 4
                }
                return {
                    ...state,
                    items: [...state.items, ...action.json.result],
                    status: status,
                    more:more,

                };

            }else{
                return {
                    ...state,status:5,more:false
                }

            }
        case fetchTimeLineAlt.REQUEST:
            return state;
        case fetchTimeLineAlt.RESPONSE:
            if (action.json.success){
                let more = true;
                let status = 0;
                if (action.json.result.length < 10){
                    more = false
                }
                if (state.items.length<=0 && action.json.result.length<=0){
                    status = 4
                }
                return {
                    ...state,
                    items:action.json.result,
                    status:status,
                    more:more,
                };
            } else {
                return {
                    ...state,status:5,more:false
                }
            }
        case editPost.REQUEST:
            return {
                ...state,
                status:1
            };
        case editPost.RESPONSE:
            if(action.json.success){
                return {...state,
                    items:state.items.map((post, index) => {
                        if(post._id == action.json.data._id){
                            return {...post,
                                description:action.json.data.description,
                                images:action.json.images
                            }
                        }
                        return post;
                    }),
                    status:0
                };
            }
            return {
                ...state,
                status: 0
            };
        case timeLineComment.REQUEST:
            return state;
        case timeLineComment.RESPONSE:
            if(action.json.success){
                return {...state,
                    items:state.items.map((data, index) => {
                        if(data._id == action.json.id){
                            return {...data,
                                comments:[...data.comments, ...[action.json.result]],
                                commentsCount: data.commentsCount +1
                            }
                        }
                        return data;
                    })
                };
            }else{
                return state;
            }
        case fetchTimeLike.REQUEST:
            return {...state,
                items:state.items.map((data, index) => {
                    if(data._id == action.json.post_id){
                        return {...data,
                            likeLoading:true
                        }
                    }
                    return data;
                })
            };
            return {...state,
                items:state.items
            };
        case fetchTimeLike.RESPONSE:
            if(action.json.error){
                if(action.json.error.message == 'Failed to fetch'){
                    return {...state,
                        items:state.items.map((data, index) => {
                            if(data._id == action.json.data.post_id){
                                return {...data,
                                    likeLoading:false
                                }
                            }
                            return data;
                        })
                    };
                    return {...state,
                        items:state.items
                    };
                }
            }else{
                if(action.json.success){
                    return {...state,
                        items:state.items.map((data, index) => {
                        if(data._id == action.json.id){
                        return {...data,
                            likeCount:action.json.likeCount,
                            likes:action.json.likes,
                            likeLoading:false
                    }
                    }
                    return data;
                })
                };
                    return {...state,
                        items:state.items
                };
                }else{
                    if(action.json.post_id != undefined){
                        return {...state,
                            items:state.items.map((data, index) => {
                            if(data._id == action.json.post_id){
                            return {...data,
                                likeLoading:false
                        }
                        }
                        return data;
                    })
                    };
                        return {...state,
                            items:state.items
                    };
                    }else{
                        return state;
                    }
                }
            }
        case timeLineRemove.REQUEST:
            return state;
        case timeLineRemove.RESPONSE:
            return {...state,items:state.items.filter(function(val){
                return val._id != action.json.result;
            })};
        case timeLinePostImage.REQUEST:
            return {...state,
                images:[...state.images,...[{loading:true,_id:action.json.id}]]
            };
        case timeLinePostImage.RESPONSE:
            if(action.json.success){
                return {...state,
                    images:state.images.map((image, index) => {
                        if(image._id == action.json.id){
                            return {...image,
                                loading:false,
                                image:action.json.image
                            }
                        }
                        return image;
                    })
                };
            }else{
                return {
                    ...state,
                    images:state.images.filter(function(elm){
                        return (elm._id != action.json.id);
                    })
                };
            }
        case timeLineImageRemove.REQUEST:
            let filtered = state.images.filter(function(val){
                if(val._id == action.json.id){
                    return false;
                }else{
                    return true;
                }
            });
            return {
                ...state,
                images:filtered
            };
        case timeLinePostSave.REQUEST:
            return {...state,
                postLoading:true,
                items:[...[action.json], ...state.items]
            };
        case timeLinePostSave.RESPONSE:
            if(action.json.success){
                let filtered = state.items.filter(function(val){
                    if(val.id == action.json._id){
                        return true;
                    }else{
                        return false;
                    }
                });
                if(filtered.length > 0){
                    let ind = state.items.indexOf(filtered[0]);
                    state.items.splice(ind, 1);
                }
                return {...state,
                    postLoading:false,
                    complete:true,
                    images:[],
                    items:[action.json.result, ...state.items]
                };
            }else{
                if(action.json.error){
                    if(action.json.error.message == 'Failed to fetch'){
                        let filtered = state.items.filter(function(val){
                            if(val.id == action.json.data.id){
                                return false;
                            }else{
                                return true;
                            }
                        });
                        return {
                            ...state,
                            postLoading:false,
                            items:filtered,
                            rloadig:true,
                        }
                    }else{
                        return state;
                    }
                }else{
                    return state;
                }
            }
        case 'EDIT_POST_SUCCESS':
            if(action.json.success){
                return {...state,
                    items:state.items.map((post, index) => {
                    if(post._id == action.json.data._id){
                    return {...post,
                        description:action.json.data.description,
                        images:action.json.images
                        }
                    }
                    return post;
                })
            };
            }else{
                return state;
            }
        case inputComploate.REQUEST:
            return {
                ...state,
                complete: false
            }
        case timeLineSharePost.REQUEST:
            return state;
        case timeLineSharePost.RESPONSE:
            if(action.json.success){
                if (action.json.type === "write"){
                    return {
                        ...state,
                        items:[...[action.json.data],...state.items],
                    }
                } else {
                    return {...state,
                        items:state.items.map((data,index) => {
                            if (data._id === action.json.post._id){
                                return {...data,
                                    share:action.json.post.share
                                }
                            }
                            return data;
                        })
                    };
                }
            } else {
                return state;
            }
        case timeLineShareRemove.REQUEST:
            return state;
        case timeLineShareRemove.RESPONSE:
            if(action.json.success){
                let filtered = state.items.filter(function(val){
                    if(val._id == action.json.post._id){
                        return false;
                    }else{
                        return true;
                    }
                });
                return {...state,
                    items:filtered
                };
            }else{
                return state;
            }
        case timeLineClear.REQUEST:
            return {
                ...state,
                items: [],
                images:[],
                complete:false,
                status:1,
                more:false
            }
        case timeLineRstorePost.REQUEST:
            return state;
        case timeLineRstorePost.RESPONSE:
            if(action.json.success){
                let filtered = state.items.filter(function(val){
                    if(val._id == action.json.post_id){
                        return false;
                    }else{
                        return true;
                    }
                });
                return {...state,
                    items:filtered
                };
            }else{
                return state;
            }
        case timeLineMoreComment.REQUEST:
            return state;
        case timeLineMoreComment.RESPONSE:
            if(action.json.success){
                return {...state,
                    items:state.items.map((data, index) => {
                        if(data._id == action.json.id){
                            return {...data,
                                comments:[...action.json.result, ...data.comments]
                            }
                        }
                        return data;
                    })
                };
                return {...state,
                    items:state.items
                };
            }else{
                return state;
            }
        case fetchSaveLesson.REQUEST:
            return state;
        case fetchSaveLesson.RESPONSE:
            return {...state,
                items:state.items.map((data, index) => {
                    if(data._id == action.json.post_id){
                        return {...data,
                            savingTime:true
                        }
                    }
                    return data;
                })
            };
            return {...state,
                items:state.items
            };
        case wrmo.REQUEST :
            return {
                ...state,
                reportModal: true,
                reportSubmit:false
            };
        case wrmc.REQUEST :
            return {
                ...state,
                reportModal: false,
            }
        case timeLineReport.REQUEST:
            return {
                ...state,
                reportLoading: true,
            }
        case timeLineReport.RESPONSE:
            if(action.json.success){
                return {
                    ...state,
                    reportModal:false,
                    reportLoading: false,
                    reportSubmit: true
                }
            }
        default:
            return state;
    }
}