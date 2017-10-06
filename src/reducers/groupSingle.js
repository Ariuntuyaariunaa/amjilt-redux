/**
 * Created by Nanduk92 on 1/17/2017.
 */

import {
    fetchGroupSingle,
    fetchSlugGroup,
    fetchEditGroup,
    fetchRemoveGroup,
    fetchMemberRequestGroup,
    fetchSingleGroupCoverSave,
    searchMember,
    groupAddUser,
    fetchLeaveGroup,
    cancellationGroup,
    approveGroupAction,
    blockGroupAction,
    pendingGroupAction,
    GROUP_USER_GROUP_CLOSE,
    groupUploadImage,
    groupReport,
    grmo,
    grmc,
    changeTypeGroup
} from '../constants/actionTypes';

const initialState = {
    status: 1, //0 amjilttai unshij duussan 1 - loading 2 - error 3-not found,
    groupReportInputModel:false,
    groupSingle:{},
    more:false,
    newSlug:true,
    slugLoading:false,
    slug:'',
    image:'',
    search_users:[],
    search_user_loading:false,
    check:true,
    submit: false,
    reportLoading: false,
};

export default function groupSingle(state = initialState, action) {
    switch (action.type) {
        case fetchGroupSingle.REQUEST:
            return {...state,
                status: 1,
            };
        case fetchGroupSingle.RESPONSE:
            if(!action.json.success){
                return {
                    ...state,status:5
                }
            }
            return {...state,
                groupSingle:action.json.data,
                status: 0
            };
        case fetchSlugGroup.REQUEST:
            return {
                ...state,
                check:false,
                slugLoading:true,
                newSlug:false
            };
        case fetchSlugGroup.RESPONSE:
            if(action.json.success){
                return {
                    ...state,
                    check:true,
                    newSlug:action.json.check,
                    slug:action.json.slug,
                    slugLoading:false
                };
            }
            return {
                ...state,
                check:true,
                slugLoading:false
            };
        case fetchEditGroup.REQUEST:
            return {
                ...state
            };
        case fetchEditGroup.RESPONSE:
            return {
                ...state,
                groupSingle:action.json.newGroup
            };
        case fetchRemoveGroup.REQUEST:
            return {
                ...state
            };
        case fetchRemoveGroup.RESPONSE:
            return {...state,
                groupSingle:{
                ...state.groupSingle,
                remove:true
                }
            };
        case fetchLeaveGroup.REQUEST:
            return {
                ...state
            };
        case fetchLeaveGroup.RESPONSE:
            return {...state,
                groupSingle:{
                ...state.groupSingle,
                remove:true
                }
            };
        case fetchMemberRequestGroup.REQUEST:
            if(state.groupSingle && state.groupSingle._id == action.json.slug){
                return {
                    ...state,
                    groupSingle: {
                        ...state.groupSingle,
                        loading: true,
                    }
                }
            }else{
                return state;
            }
            return state;
        case fetchMemberRequestGroup.RESPONSE:
            if(state.groupSingle && state.groupSingle._id == action.json.slug){
                return {
                    ...state,
                    groupSingle: {
                        ...state.groupSingle,
                        members: [...state.groupSingle.members,{...action.json.data}],
                    }
                }
            }else{
                return state;
            }
        case groupUploadImage.REQUEST:
            return {
                ...state
            };
        case groupUploadImage.RESPONSE:
            return {
                ...state,
                image:action.json.result
            };
        case fetchSingleGroupCoverSave.REQUEST:
            return {
                ...state,
            };
        case fetchSingleGroupCoverSave.RESPONSE:
            return {
                ...state,
                groupSingle:action.json.result
            };
        case searchMember.REQUEST:
            return {
                ...state,search_user_loading:true,
                empty: false,
            };
        case searchMember.RESPONSE:
            if(action.json.users.length > 0){
                return {...state,
                    search_user_loading:false,
                    search_users:action.json.users
                };
            }else{
                return {
                    ...state,
                    empty: true,
                };
            }
            return state;

        case searchMember.RESPONSE_CLOSE:
            return {...state,
                search_user_loading:false,
                search_users:[]
            };
        case cancellationGroup.REQUEST:
            if(state.groupSingle && state.groupSingle._id == action.json.slug){
                return {
                    ...state,
                    groupSingle: {
                        ...state.groupSingle,
                        cancelReqLoad: true,
                    }
                }
            }else{
                return state;
            }
            return state;
        case cancellationGroup.RESPONSE:
            if(state.groupSingle && state.groupSingle._id == action.json.slug){
                return {
                    ...state,
                    groupSingle: action.json.data
                }
            }else{
                return state;
            }
        case approveGroupAction.REQUEST:
            return {
                ...state,
            };
        case approveGroupAction.RESPONSE:
            if(action.json.success) {
                return {
                    ...state,
                    groupSingle: {
                        ...state.groupSingle,
                        membersCount: action.json.mCount.memberCount,
                        pendingCount: action.json.mCount.pendingCount,
                        blockCount: action.json.mCount.blockCount,
                    }
                };
            }
            else {
                return state;
            }
        case blockGroupAction.REQUEST:
            return {
                ...state,
            };
        case blockGroupAction.RESPONSE:
            if(action.json.success) {
                return {
                    ...state,
                    groupSingle: {
                        ...state.groupSingle,
                        membersCount: action.json.mCount.memberCount,
                        pendingCount: action.json.mCount.pendingCount,
                        blockCount: action.json.mCount.blockCount,
                    }
                };
            }
            else {
                return state;
            }
        case pendingGroupAction.REQUEST:
            return {
                ...state,
            };
        case pendingGroupAction.RESPONSE:
            if(action.json.success) {
                return {
                    ...state,
                    groupSingle: {
                        ...state.groupSingle,
                        membersCount: action.json.mCount.memberCount,
                        pendingCount: action.json.mCount.pendingCount,
                        blockCount: action.json.mCount.blockCount,
                    }
                };
            }
            else {
                return state;
            }
        case groupAddUser.REQUEST:
            return {
                ...state,
            };
        case groupAddUser.RESPONSE:
            if(action.json.success) {
                return {
                    ...state,
                    groupSingle: {
                        ...state.groupSingle,
                        membersCount: action.json.membersCount
                    }
                };
            }
            else {
                return state;
            }
        case GROUP_USER_GROUP_CLOSE:
            return {...state,
                search_user_loading:false,
                search_users:[]
            };
        case groupReport.REQUEST :
            return {
                ...state,
                groupSingle: {
                    ...state.groupSingle,
                    reportLoading: true,
                }
            };
        case groupReport.RESPONSE :
            if(action.json.success) {
                return {
                    ...state,
                    groupSingle: {
                        ...state.groupSingle,
                        submit: true,
                        reportLoading: false,
                    },
                    groupReportInputModel:false
                };
            }
            else {
                return state;
            }
        case grmo.REQUEST:
            return {
                ...state,
                groupReportInputModel:true,
                groupSingle: {
                    ...state.groupSingle,
                    submit: false
                },
            }
        case grmc.REQUEST:
            return {
                ...state,
                groupReportInputModel:false
            }
        case changeTypeGroup.REQUEST:
            return {
                ...state,
            }
        case changeTypeGroup.RESPONSE:
            if(action.json.success){
                return {
                    ...state,
                    groupSingle : {
                        ...state.groupSingle,
                        type: action.json.type
                    }
                }
            }
        default:
            return state;
    }
}