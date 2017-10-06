/**
 * Created by battumur on 11/4/2016.
 */
import {
    purchaseConst,
    addName,
    addSlug,
    fetchSingleGroupCoverSave,
    fetchUserAvatarSave,
    fetchTeacherRequest,
    friendAction,
    updateUserData
} from '../constants/actionTypes';
const initialState = {
    user:null,
    loading:false,
    paymentLoading:false,
    register: true,
};
export default function main(state = initialState, action) {
    switch (action.type) {
        case updateUserData.RESPONSE:
            if (action.json.success){
                return {
                    user:action.json.result,
                }
            } else {
                return state;
            }
        case 'login-success':
            return {
                ...state,
                user:action.json.user,
                loading:false
            };
        case 'login-request':
            return{
                ...state,
                loading:true
            };
        case addName.RESPONSE:
            return {...state,
                user:{
                    ...state.user,
                    full_name:action.json.full_name,
                    name_created:action.json.name_created
                }
            };
        case addSlug.RESPONSE:
            return {...state,
                user:{
                    ...state.user,slug:action.json.slug,
                }
            };
        case purchaseConst.REQUEST:
            return {...state,paymentLoading:true};
        case purchaseConst.RESPONSE:
            if(action.json.success){
                return {...state,paymentLoading:false};
            }
        case fetchSingleGroupCoverSave.RESPONSE:
            if(action.json.success){
                return {
                    ...state,
                    user:{
                        ...state.user,cover:action.json.image
                    }
                };
            }else{
                return state;
            }
        case fetchUserAvatarSave.RESPONSE:
            console.log(action);
            if (action.json.success){
                return {
                    ...state,
                    user:{
                        ...state.user,avatar:action.json.image
                    }
                };
            }
        case fetchTeacherRequest.REQUEST:
            return {...state
            };

        case fetchTeacherRequest.RESPONSE:
            if(action.json.success){
                return {
                    ...state,
                    user: {
                        ...state.user,
                        roles: action.json.roles
                    }
                };
            }
        case friendAction.REQUEST:
            return {
                ...state
            }
        case friendAction.RESPONSE:
            if(action.json.success){
                return {
                    ...state,
                    user: {
                        ...state.user,
                        friends : [
                            ...state.user.friends,
                            action.json.id
                        ]
                    }
                }
            }
            return state;
        default:
            return state;
    }
}