/**
 * Created by Lkhag on 2017-03-09.
 */

import {
    getEducations,addEbc,addHigh,addWork,fetchDeleteEbc,fetchDeleteHigh,fetchDeleteWork
} from '../constants/actionTypes';

const initialState = {
    loading1:false,
    defaultebc:[],
    defaulthigh:[],
    ebc:[],
    high:[],
    work:[],
    saveEbc:[],
    saveHigh:[],
    saveWork:[],
    status: 1,//0 amjilttai unshij duussan 1 - loading 2 - error 3-not found,4 hooson baina,5 Failed to fetch
};

export default function about(state = initialState, action) {
    switch (action.type) {
        case getEducations.REQUEST:
            return{
                ...state,
                loading1:true
            };
        case getEducations.RESPONSE:
            if(action.json.success){
                var defaultebc = [];
                action.json.ebc.map((data, index) => {
                    defaultebc.push(data.name);
                });
                var defaulthigh = [];
                action.json.high.map((data, index) => {
                    defaulthigh.push(data.name);
                });
                return{
                    ...state,
                    loading1:false,
                    defaultebc:defaultebc,
                    defaulthigh:defaulthigh,
                    saveEbc:action.json.saveEbv,
                    saveHigh:action.json.saveHigh,
                    saveWork:action.json.saveWork
                };
            }else {
                return {
                    ...state,status:5
                }
            }
        case addEbc.REQUEST:
            return{
                ...state,
            };
        case addEbc.RESPONSE:
            if(action.json.success){
                return{
                    ...state,
                    saveEbc:[...state.saveEbc, ...[action.json.ebc]]
                };
            }else {
                return state;
            }
        case addEbc.RESPONSE1:
            if(action.json.success){
                return{
                    ...state,
                    saveEbc:state.saveEbc.map((data, index) => {
                        if(data._id == action.json.ebc._id){
                            return {...data,
                                address: action.json.ebc.address,
                                endDate: action.json.ebc.endDate,
                                name:action.json.ebc.name,
                                startDate:action.json.ebc.startDate,
                                type:action.json.ebc.type,
                            }
                        }
                        return data;
                    })
                };
            }else {
                return state;
            }
        case addHigh.REQUEST:
            return{
                ...state,
            };
        case addHigh.RESPONSE:
            if(action.json.success){
                return{
                    ...state,
                    saveHigh:[...state.saveHigh, ...[action.json.high]]
                };
            }else {
                return state;
            }
        case addHigh.RESPONSE1:
            return{
                ...state,
                saveHigh:state.saveHigh.map((data, index) => {
                    if(data._id == action.json.high._id){
                        return {...data,
                            address: action.json.high.address,
                            endDate: action.json.high.endDate,
                            name:action.json.high.name,
                            startDate:action.json.high.startDate,
                            type:action.json.high.type,
                            mergjeil:action.json.high.mergjeil,
                        }
                    }
                    return data;
                })
            };
        case addWork.REQUEST:
            return{
                ...state,
            };
        case addWork.RESPONSE:
            if(action.json.success){
                return{
                    ...state,
                    saveWork:[...state.saveWork, ...[action.json.work]]
                };
            }else {
                return state;
            }
        case addWork.RESPONSE1:
            return{
                ...state,
                saveWork:state.saveWork.map((data, index) => {
                    if(data._id == action.json.work._id){
                        return {...data,
                            address: action.json.work.address,
                            endDate: action.json.work.endDate,
                            company:action.json.work.company,
                            startDate:action.json.work.startDate,
                            type:action.json.work.type,
                            job:action.json.work.job,
                        }
                    }
                    return data;
                })
            };
        case fetchDeleteEbc.REQUEST:
            return{
                ...state,
            };
        case fetchDeleteEbc.RESPONSE:
            var filtered = state.saveEbc.filter(function(val){
                if(val._id != action.json.id){
                    return true;
                }
            });
            return{
                ...state,
                saveEbc:filtered
            };
        case fetchDeleteHigh.REQUEST:
            return{
                ...state,
            };
        case fetchDeleteHigh.RESPONSE:
            var filtered = state.saveHigh.filter(function(val){
                if(val._id != action.json.id){
                    return true;
                }
            });
            return{
                ...state,
                saveHigh:filtered
            };
        case fetchDeleteWork.REQUEST:
            return{
                ...state,
            };
        case fetchDeleteWork.RESPONSE:
            var filtered = state.saveWork.filter(function(val){
                if(val._id != action.json.id){
                    return true;
                }
            });
            return{
                ...state,
                saveWork:filtered
            };
        default:
            return state;
    }
}