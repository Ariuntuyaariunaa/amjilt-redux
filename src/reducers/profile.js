/**
 * Created by Lkhag on 2017-01-16.
 */

import {fetchProfile,fetchSlugUser,uploadImage,uploadAvatar,fetchUserAvatarSave,fetchSingleGroupCoverSave,fetchBusinessCheck,fetchTeacherRequest,
    fetchOrlogo,addName,addSlug,follow,friendAction,userReport,urmc,urmo
} from '../constants/actionTypes';

const initialState = {
    data:{},
    loading:true,
    status: 0,
    image:'',
    avatarChange:'',
    saveImage:'',
    more:false,
    business:{},
    business_loading:false,
    allOrlogo:'',
    loading2:true,
    slug:'',
    newSlug:true,
    slugLoading:false,
    check:true,
    userReportModal: false,
    submit: false,
    reportLoading: false,
};

export default function profile(state = initialState, action) {
    switch (action.type) {
        case fetchProfile.REQUEST:
            return state;
        case fetchProfile.RESPONSE:
            return {
                ...state,
                loading:false,
                data:action.json
            };
        case uploadImage.REQUEST:
            return {...state
            };
        case uploadImage.RESPONSE:
            return {
                ...state,
                image:action.json.result
            };
        case uploadAvatar.REQUEST:
            return {...state
            };
        case uploadAvatar.RESPONSE:
            return {
                ...state,
                avatarChange:action.json.result
            };
        case fetchUserAvatarSave.REQUEST:
            return {...state
            };
        case fetchUserAvatarSave.RESPONSE:
            if(action.json.success){
                if(state.data && state.data.data && state.data.data._id == action.json.id){
                    return {...state,
                        data: {
                        ...state.data,
                            data:{...state.data.data,avatar:action.json.image}
                        },
                        avatarChange:''
                    };
                }else{
                    return {
                        ...state,
                        avatarChange:''
                    };
                }
            }else{
                return state;
            }
        case fetchSingleGroupCoverSave.REQUEST:
            return {...state
            };
        case fetchSingleGroupCoverSave.RESPONSE:
            if(action.json.success){
                if (state.data && state.data.data && state.data.data._id === action.json.id){
                    console.log(action);
                    return {
                        ...state,
                        data: {
                            ...state.data,
                            data: {
                                ...state.data.data,
                                cover:action.json.image
                            }
                        },
                        image:''
                    };
                } else {
                    return {
                        ...state,
                        image:''
                    };
                }
            }
            else{
                return state;
            }
        case fetchBusinessCheck.REQUEST:
            return {
                ...state,business_loading:false
            }
        case fetchBusinessCheck.RESPONSE:
            return {
                ...state,business_loading:true,
                business:action.json.result
            }
        case fetchOrlogo.REQUEST:
            return{
                ...state,
                loading2:true
            };
        case fetchOrlogo.RESPONSE:
            var totalAmount = 0;
            if(action.json.total.length > 0){
                totalAmount = action.json.total[0].totalAmount;
            }
            return{
                ...state,
                loading2:false,
                allOrlogo:totalAmount
            };
        case fetchSlugUser.REQUEST:
            return {
                ...state,
                check:false,
                slugLoading:true,
                newSlug:false
                //loading:true,
                //loaded:false
            };
        case fetchSlugUser.RESPONSE:
            return {
                ...state,
                check:true,
                newSlug:action.json.check,
                slug:action.json.slug,
                slugLoading:false
            };
        case addName.REQUEST:
            return{
                ...state,
            };
        case addName.RESPONSE:
            if(action.json.success){
                return {...state,
                    data:{...state.data,
                        data:{
                            ...state.data.data,full_name:action.json.full_name,
                        }
                    }
                };
            }else {
                return {
                    ...state,status:5
                }
            }
        case addSlug.REQUEST:
            return{
                ...state,
            };
        case addSlug.RESPONSE:
            if(action.json.success){
                return {...state,
                    data:{...state.data,
                        data:{
                            ...state.data.data,
                            slug:action.json.urlslug,
                            slug_created:action.json.slug_created,
                            end_date:action.json.end_date
                        }
                    }
                };
            }else {
                return {
                    ...state,status:5
                }
            }
        case addSlug.RESPONSE1:
            if(action.json.success){
                return {...state,
                    data:{...state.data,
                        data:{
                            ...state.data.data,slug_created:action.json.slug_created,
                        }
                    }
                };
            }else {
                return {
                    ...state,status:5
                }
            }
        case follow.RESPONSE:
            if(action.json.success){
                return {...state,
                    data:{...state.data,
                        follow:action.json.result
                    }
                };
            }else {
                return {
                    ...state,status:5
                }
            }
        case friendAction.REQUEST:
            if(state.data && state.data.data != undefined && action.json.id != undefined) {
                if (action.json.action == 'request') {
                    return {
                        ...state,
                        data: {
                            ...state.data,
                            loading: true
                        }
                    };
                }
                if (action.json.action == 'request_delete') {
                    return {
                        ...state,
                        data: {
                            ...state.data,
                            loading: true
                        }
                    };
                }
                if (action.json.action == 'request_ignore') {
                    return {
                        ...state,
                        data: {
                            ...state.data,
                            loading: true
                        }
                    };
                }
            }else{
                return state;
            }
        case friendAction.RESPONSE:
            if(action.json.success){
                if (state.data && state.data.data != undefined && action.json.id != undefined) {
                    if(state.data.data._id == action.json.id) {
                        if (action.json.action == 'request') {
                            return {
                                ...state,
                                data: {
                                    ...state.data,
                                    loading: false,
                                    relation: action.json.result
                                }
                            };
                        }
                    }
                    if(state.data.data._id == action.json.id) {
                        if (action.json.action == 'pending') {
                            return {
                                ...state,
                                data: {
                                    ...state.data,
                                    loading: false
                                }
                            };
                        }
                    }
                    if(state.data.data._id == action.json.id) {
                        if (action.json.action == 'request_delete') {
                            return {
                                ...state,
                                data: {
                                    ...state.data,
                                    loading: false,
                                    relation: action.json.result
                                }
                            };
                        }
                    }
                    if(state.data.data._id == action.json.id) {
                        if (action.json.action == 'request_ignore') {
                            return {
                                ...state,
                                data: {
                                    ...state.data,
                                    loading: true,
                                    relation: action.json.result
                                }
                            };
                        }
                    }
                    if(state.data.data._id == action.json.id) {
                        if (action.json.action == 'accept') {
                            return {
                                ...state,
                                data: {
                                    ...state.data,
                                    loading: true,
                                    relation: action.json.result
                                }
                            };
                        }
                    }
                } else {
                    return state;
                }
            }else {
                return {
                    ...state,status:5
                }
            }
        case userReport.REQUEST:
            return {
                ...state,
                submit:false,
                reportLoading:true,
            }
        case userReport.RESPONSE:
            if(action.json.success){
                return {
                    ...state,
                    submit:true,
                    reportLoading:false,
                    userReportModal: false,
                }
            }
            return {
                ...state,
            }
        case urmo.REQUEST:
            return {
                ...state,
                userReportModal: true,
                submit: false
            }
        case urmc.REQUEST:
            return {
                ...state,
                userReportModal: false,
            }
        default:
            return state;
    }
}