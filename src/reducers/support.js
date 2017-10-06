/**
 * Created by Nanduk92 on 2/8/2017.
 */
import {
    fetchUserSupports,
    fetchSupportSingle,
    supportCom,
    supportInbox,
    smo,
    smc
} from '../constants/actionTypes';
const initialState = {
    status: 1,
    supports:{},
    support:{},
    loading:true,
    support_single:{},
    support_comment:[],
    reports:[],
    com: {},
    supportInputModel:false,
    submit: false,
    reportLoading: false,
};
export default function support(state = initialState, action) {
    switch (action.type) {
        case fetchUserSupports.REQUEST:
            return {
                ...state,status:1
            };
        case fetchUserSupports.RESPONSE:
            return {...state,
                status:0,
                reports:action.json.reports,
            };
        case fetchSupportSingle.REQUEST:
            return{
                ...state,status:1
            }
        case fetchSupportSingle.RESPONSE:
            return {
                ...state,
                status:0,
                support_single: action.json.support_single,
                support_comment: action.json.support_comment,
            }
        case supportCom.REQUEST:
            return {
                ...state
            }
        case supportCom.RESPONSE:
            return {
                ...state,
                status:0,
                support_comment: [...state.support_comment, {...action.json.com}]
            }
        case supportInbox.REQUEST:
            return {
                ...state,
                reportLoading: true,
            };
        case supportInbox.RESPONSE:
            if(action.json.success) {
                return{
                    ...state,
                    reports: [
                        {...action.json.data},
                        ...state.reports,
                    ],
                    supportInputModel:false,
                    reportLoading: false,
                    submit: true
                }
            }
            else {
                return state;
            }
        case smo.REQUEST:
            return {
                ...state,
                supportInputModel:true,
                submit: false
            }
        case smc.REQUEST:
            return {
                ...state,
                supportInputModel:false
            }
        default:
            return state;
    }
}