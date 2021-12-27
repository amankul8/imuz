import {
    USER_ACC_ACTIVATE,
    USER_ACC_DEACTIVATE,
    USER_ACC_NAVBAR_DEACTIVATE,
    USER_ACC_NAVBAR_ACTIVATE
} from "../types/appTypes";

const initialState = {
    userAcc: {
        active: false
    },
    userAccNavBar:{
        active: false
    }
}

export const userReducer = (state = initialState, action)=>{
    switch (action.type){
        case USER_ACC_ACTIVATE:
            return {...state, userAcc: {active: true}};
        case USER_ACC_DEACTIVATE:
            return {...state, userAcc: {active: false}};
        case USER_ACC_NAVBAR_ACTIVATE:
            return {...state, userAccNavBar: {active: true}};
        case USER_ACC_NAVBAR_DEACTIVATE:
            return {...state, userAccNavBar: {active: false}};
        default :
            return state;
    }
}