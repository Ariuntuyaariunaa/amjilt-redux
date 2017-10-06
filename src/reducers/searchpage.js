/**
 * Created by Nanduk92 on 1/12/2017.
 */

import {
    fetchPageSearch,
    fetchPageSearchfull,
    friendAction,
    fetchPageSearchUser,
    fetchPageSearchClear,
    fetchPageSearchGroup,
    fetchPageSearchLesson,
    fetchPageSearchTest,
    fetchPageSearchPost,
    fetchMemberRequestGroup,
    cancellationGroup,
    fetchTimeLike,
    timeLineRemove,
    editPost
} from '../constants/actionTypes';

const initialState = {
    users:[],
    groups:[],
    lessons:[],
    tests:[],
    posts:[],
    friendsLoading:true,
    more:false,
    mutalfriends:[],
    loading1:false,
    friends:[],

    status:1
};

export default function search(state = initialState, action) {
    switch (action.type){
        case editPost.REQUEST:
            return state;
        case editPost.RESPONSE:
            console.log(action.json);
            if (action.json.data.type === "post"){
                return {...state,
                    posts:state.posts.map((data) => {
                        if (data._id === action.json.data._id){
                            return {...data,
                                description:action.json.data.description,
                                images:action.json.images,
                            }
                        }
                        return data;
                    })
                };
            } else if (action.json.data.type === "lesson"){
                return {...state,
                    lessons:state.lessons.map((data) => {
                        if (data._id === action.json.data._id){
                            return {...data,
                                description:action.json.data.description,
                                images:action.json.data.images,
                            }
                        }
                        return data;
                    })
                };
            } else if (action.json.data.type === "test"){
                return {...state,
                    tests:state.tests.map((data) => {
                        if (data._id === action.json.data._id){
                            return {...data,
                                description:action.json.data.description,
                                images:action.json.data.images,
                            }
                        }
                        return data;
                    })
                };
            } else {
                return state;
            }
        case timeLineRemove.RESPONSE:
            if (action.json.type === "post"){
                return {...state,
                    posts:state.posts.filter(function(val){
                            console.log(val);
                            return val._id !== action.json.result;
                        }
                    )
                };
            } else if (action.json.type === "lesson"){
                return {...state,
                    lessons:state.lessons.filter(function(val){
                            return val._id !== action.json.result;
                        }
                    )
                };
            } else if (action.json.type === "test"){
                return {...state,
                    tests:state.tests.filter(function(val){
                            return val._id !== action.json.result;
                        }
                    )
                };
            } else {
                return state;
            }
        case fetchTimeLike.REQUEST:
            return state;
        case fetchTimeLike.RESPONSE:
            if (action.json.error){
                if (action.json.error.message === "Failed to fetch"){
                    if (action.json.type === "post"){
                        return {...state,
                            posts:state.posts.map((data,index) => {
                                if(data._id === action.json.data.post_id){
                                    return {...data,
                                        likeLoading:false
                                    }
                                }
                                return data;
                            })
                        };
                    } else if (action.json.type === "lesson"){
                        return {...state,
                            lessons:state.lessons.map((data,index) => {
                                if(data._id === action.json.data.post_id){
                                    return {...data,
                                        likeLoading:false
                                    }
                                }
                                return data;
                            })
                        };
                    } else if (action.json.type === "test"){
                        return {...state,
                            tests:state.tests.map((data,index) => {
                                if(data._id === action.json.data.post_id){
                                    return {...data,
                                        likeLoading:false
                                    }
                                }
                                return data;
                            })
                        };
                    }
                }
            } else {
                if (action.json.success){
                    if (action.json.type === "post"){
                        return {...state,
                            posts:state.posts.map((data,index) => {
                                if(data._id === action.json.id){
                                    return {...data,
                                        likeCount:action.json.likeCount,
                                        likes:action.json.likes,
                                        likeLoading:false
                                    }
                                }
                                return data;
                            })
                        };
                    } else if (action.json.type === "lesson"){
                        return {...state,
                            lessons:state.lessons.map((data,index) => {
                                if(data._id === action.json.id){
                                    return {...data,
                                        likeCount:action.json.likeCount,
                                        likes:action.json.likes,
                                        likeLoading:false
                                    }
                                }
                                return data;
                            })
                        };
                    } else if (action.json.type === "test"){
                        return {...state,
                            tests:state.tests.map((data,index) => {
                                if(data._id === action.json.id){
                                    return {...data,
                                        likeCount:action.json.likeCount,
                                        likes:action.json.likes,
                                        likeLoading:false
                                    }
                                }
                                return data;
                            })
                        };
                    }
                } else {
                    if (action.json.post_id !== undefined){
                        return {...state,
                            items:state.items.map((data,index) => {
                                if(data._id === action.json.post_id){
                                    return {...data,
                                        likeLoading:false
                                    }
                                }
                                return data;
                            })
                        };
                    } else {
                        return state;
                    }
                }
            }
            break;
        case fetchPageSearchUser.REQUEST:
            return state;
        case fetchPageSearchUser.RESPONSE:
            return {
                users:[...state.users,...action.json.users],
                status:0
            };
        case fetchPageSearchGroup.REQUEST:
            return state;
        case fetchPageSearchGroup.RESPONSE:
            return {
                groups:[...state.groups,...action.json.groups],
                status:0
            };
        case fetchPageSearchLesson.REQUEST:
            return state;
        case fetchPageSearchLesson.RESPONSE:
            return {
                lessons:[...state.lessons,...action.json.lessons],
                tests:[],
                posts:[],
                status:0
            };
        case fetchPageSearchTest.REQUEST:
            return state;
        case fetchPageSearchTest.RESPONSE:
            return {
                users:[],
                lessons:[],
                posts:[],
                tests:[...state.tests,...action.json.tests],
                status:0
            };
        case fetchPageSearchPost.REQUEST:
            return state;
        case fetchPageSearchPost.RESPONSE:
            return {
                users:[],
                tests:[],
                lessons:[],
                posts:[...state.posts,...action.json.posts],
                status:0
            };
        case fetchPageSearchClear.REQUEST:
            return {
                users:[],
                groups:[],
                lessons:[],
                tests:[],
                posts:[],
                status:1,
            };
        case fetchPageSearch.REQUEST:
            return state;
        case fetchPageSearch.RESPONSE:
            return {
                ...state,
                users: action.json.users,
                groups: action.json.groups,
                lessons: action.json.lessons,
                tests: action.json.tests,
                posts: action.json.posts
            };
        case fetchMemberRequestGroup.REQUEST:

            return {...state,
            groups:state.groups.map((data, index) => {
                if(data._id == action.json.slug){
                    return {...data,
                        loading:true
                    }
                }
                return data;
            })
        };
        case fetchMemberRequestGroup.RESPONSE:
            if(action.json.success){

                return {...state,
                    groups:state.groups.map((group, index) => {

                        if(group._id == action.json.slug){
                            return {...group,
                                members:[...group.members, ...[action.json.data]],
                            }
                        }
                        return group

                    }),
                    status:0
                };
            }else{

                return state;
            }
        case cancellationGroup.REQUEST:
                return {...state,
                    groups:state.groups.map((data, index) => {
                        if(data._id == action.json.slug){
                            return {...data,
                            }
                        }
                        return data;
                    })
                };
        case cancellationGroup.RESPONSE:
            if(action.json.success){
                return {...state,
                    groups:state.groups.map((group, index) => {

                        if(group._id == action.json.slug){
                            return {
                                ...group,
                                ...action.json.data
                            }
                        }
                        return group

                    }),
                    status:0
                };
            }else{

                return state;
            }


        case fetchPageSearchfull.REQUEST:
            return {
                ...state,
            };
        case fetchPageSearchfull.RESPONSE:
            if(action.json.success){
                var more = true;
                var status = 1;
                let last;
                if (action.json.users.length !=''){
                    last = action.json.users.length;
                }else if (action.json.lessons.length!=''){
                    last = action.json.lessons.length
                }else if (action.json.groups.length!=''){
                    last = action.json.groups.length
                }else if (action.json.tests.length!=''){
                    last = action.json.tests.length
                }else if (action.json.posts.length!=''){
                    last = action.json.posts.length
                }
                if(last < 15){
                    more = false;
                }
                if( last <=0){
                    status = 4
                }
                if(action.json.users!=''){
                    return {
                        ...state,
                        status: status,
                        users:[...state.users,...action.json.users],
                        more:more,
                    };
                }else if(action.json.lessons!=''){

                    return {
                        ...state,
                        status: status,
                        lessons:[...state.lessons,...action.json.lessons],
                        more:more,
                    };
                }else if(action.json.groups!=''){
                    return {
                    ...state,
                    status: status,
                    groups:[...state.groups,...action.json.groups],
                    more:more,
                    };
                }else if(action.json.tests!=''){
                    return {
                        ...state,
                        status: status,
                        tests:[...state.tests,...action.json.tests],
                        more:more,
                    };
                }else if(action.json.posts!=''){
                    return {
                        ...state,
                        status: status,
                        posts:[...state.posts,...action.json.posts],
                        more:more,
                    };
                }
            }
            else {
                return {
                    ...state,
                }
            }
            return {
                ...state,
                users: action.json.users,
                groups: action.json.groups,
                lessons: action.json.lessons,
                tests: action.json.tests,
                posts: action.json.posts
            };
        case friendAction.REQUEST:
            if(state.users && state.users != undefined && state.users.length > 0 && action.json.id != undefined){
                return {
                    ...state,
                    users:state.users.map((data, index) => {
                        if (data._id == action.json.id) {
                            return {
                                ...data,
                                loading: false,
                                relation:'pending'
                            }
                        }
                        return data;
                    })
                }
            }else{
                return state;
            }
        case friendAction.RESPONSE:
            if(state.users && state.users != undefined && state.users.length > 0 && action.json.id != undefined){
                if (action.json.action == 'request') {
                    return {
                        ...state,
                        users:state.users.map((data, index) => {
                                if (data._id == action.json.id) {
                                    return {
                                        ...data,
                                        loading: false,
                                        relation:'pending'
                                    }
                                }
                                return data;
                            })
                    }
                }
                if (action.json.action == 'request_delete') {
                    return {
                        ...state,
                        users:state.users.map((data, index) => {
                                if (data._id == action.json.id) {
                                    return {
                                        ...data,
                                        loading: false,
                                        relation:'none'
                                    }
                                }
                                return data;
                            })

                    }
                }
                if (action.json.action == 'request_ignore') {
                    return {
                        ...state,
                        users:state.users.map((data, index) => {
                                if (data._id == action.json.id) {
                                    return {
                                        ...data,
                                        loading: false,
                                        relation:'none'
                                    }
                                }
                                return data;
                            })
                    }
                }
                else {
                    return state;
                }
            }else{
                return state;
            }
        default:
            return state;

    }

}
