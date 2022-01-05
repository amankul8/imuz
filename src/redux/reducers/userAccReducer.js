import {
    USER_ACC_ACTIVATE,
    USER_ACC_DEACTIVATE,
    USER_ACC_NAVBAR_DEACTIVATE,
    USER_ACC_NAVBAR_ACTIVATE,
    USER_DATA_SAVE
} from "../types/appTypes";

const initialState = {
    userAcc: {
        active: false,
        user: {
            id: "",
            nickname: "",
            email: "",
            password: "",
        }
    },
    userAccNavBar:{
        active: false
    }
}

export const userAccReducer = (state = initialState, action)=>{
    let temp = '';
    switch (action.type){
        case USER_ACC_ACTIVATE:
            temp = {...state};
            temp.userAcc.active = true
            return {...temp};
        case USER_ACC_DEACTIVATE:
            temp = {...state};
            temp.userAcc.active = false
            return {...temp};
        case USER_ACC_NAVBAR_ACTIVATE:
            return {...state, userAccNavBar: {active: true}};
        case USER_ACC_NAVBAR_DEACTIVATE:
            return {...state, userAccNavBar: {active: false}};
        case USER_DATA_SAVE:
            temp = {...state};
            temp.userAcc.user = {
                id: action.payload.id,
                nickname: action.payload.nickname,
                email: action.payload.email,
                password: action.payload.password,
            }
            return {...temp};
        default :
            return state;
    }
}