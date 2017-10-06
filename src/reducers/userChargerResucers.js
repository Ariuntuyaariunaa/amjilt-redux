/**
 * Created by Nanduk92 on 5/17/2017.
 */

import {
    fetchCharger,
    cmo,
    cmc,
    userChargeAdd,
} from '../constants/actionTypes';

const initialState = {
    status: 1,
    charger:[],
    role: false,
    chargeModel: false,
    submit: false,
    rload: false,
};

export default function userCharger(state = initialState, action) {
    switch (action.type) {
        case fetchCharger.REQUEST:
            return {...state, status: 1};
        case fetchCharger.RESPONSE:
            if(!action.json.success){
                return {
                    ...state,status:5
                }
            }
            return {
                ...state,
                charger: action.json.charger,
                status: 0,
            };
        case cmo.REQUEST:
            return {
                ...state,
                chargeModel:true,
                submit: false
            }
        case cmc.REQUEST:
            return {
                ...state,
                chargeModel:false,
            }
        case userChargeAdd.REQUEST:
            return {
                ...state,
                rload: true,
            }
        case userChargeAdd.RESPONSE:
            if(action.json.success) {
                return {
                    ...state,
                    charger: [
                        {...action.json.charge},
                        ...state.charger,
                    ],
                    chargeModel:false,
                    submit: true,
                    rload: false,
                }
            }
            else {
                return state;
            }
        default:
            return state;
    }
}