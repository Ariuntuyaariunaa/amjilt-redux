/**
 * Created by Lkhag on 2017-03-09.
 */

import {getBank,getSettings,
    addBank,addPhone,addBday,changeBank,changeBankNumber,
    addName,
    userPassword,changePhone,changeBirthday,changeGander,
    addLocation} from '../constants/actionTypes';

const initialState = {
    user:{},
    status:1,
}

export default function settings(state = initialState, action) {
    switch (action.type) {
        case getBank.REQUEST:
            return {
                ...state
            };
        case getBank.RESPONSE:
            if(action.json.success){
                var bank_number = '';
                if(action.json.bank_number != undefined || action.json.bank_number != ''){
                    bank_number = action.json.result.bank_number;
                }
                var bank = '';
                if(action.json.result.bank_name != undefined || action.json.result.bank_name != 0){
                    bank = action.json.result.bank_name;
                }
                return{
                    ...state,
                    bank:bank,
                    bank_number:bank_number
                };
            }else {
                return {
                    ...state,
                    status:5
                }
            }
        case changeBank.REQUEST:
            return{
                ...state,
                bank:action.json,
            };
        case changeBankNumber.REQUEST:
            return{
                ...state,
                bank_number:action.json,
            };
        case addBank.REQUEST:
            return {
                ...state
            };
        case addBank.RESPONSE:
            if(action.json.success){
                return {...state,
                    user:{
                        ...state.user,
                        bank_name:action.json.bank_name,
                        bank_number:action.json.bank_number,
                        bank_account_name:action.json.bank_account_name,
                    }
                };
            }else {
                return {
                    ...state,
                    status:5
                }
            }
        case getSettings.REQUEST:
            return {
                ...state
            };
        case getSettings.RESPONSE:
            if(action.json.success){
                return{
                    ...state,
                    user:action.json.result,
                    status:0
                };
            }else {
                return {
                    ...state,
                    status:5
                }
            }
        case changePhone.REQUEST:
            return{
                ...state,
                phone:action.json,
            };
        /*case changeBirthday.REQUEST:
            return{
                ...state,
                birthday:action.json,
            };
        case changeGander.REQUEST:
            return{
                ...state,
                gander:action.json,
            };*/
        /*case addBday.REQUEST:
            return{
                ...state,
            };*/
        case addBday.RESPONSE:
            if (action.json.success){
                return {...state,
                    user:{
                        ...state.user,
                        birthday:action.json.birthday,
                        gander:action.json.gander,
                    }
                };
            } else {
                return {
                    ...state,
                    status:5
                }
            }
        case addBday.RESPONSE1:
            if(action.json.success){
                return {...state,
                    gander:action.json.gander,
                };
            }else {
                return {
                    ...state,
                    status:5
                }
            }
        case addPhone.REQUEST:
            return{
                ...state,
            };
        case addPhone.RESPONSE:
            if(action.json.success){
                return {...state,
                    user:{
                        ...state.user,
                        phone:action.json.phone
                    }
                };
            }else {
                return {
                    ...state,
                    status:5
                }
            }
        case addLocation.REQUEST:
            return{
                ...state,
            };
        case addLocation.RESPONSE:
            if(action.json.success){
                return {...state,
                    user:{
                        ...state.user,
                        location:action.json.location
                    }
                };
            }else {
                return {
                    ...state,
                    status:5
                }
            }
        case userPassword.REQUEST:
            return {
                ...state
            };
        case userPassword.RESPONSE:
            if(action.json.success){
                return {...state,
                }
            }
        case addName.RESPONSE:
            if(action.json.success)
            return {
                ...state,
                user:{
                    ...state.user,
                    name:action.json.name,
                    last_name:action.json.last_name,
                    full_name:action.json.full_name
                }
            };
            return state;
        default:
            return state;
    }
}