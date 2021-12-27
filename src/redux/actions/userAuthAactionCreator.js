import {
    AUTH_PAGE_SHOW,
    AUTH_PAGE_HIDE,
    USER_ACC_ACTIVATE,
    USER_ACC_DEACTIVATE,
    USER_ACC_NAVBAR_ACTIVATE,
    USER_ACC_NAVBAR_DEACTIVATE
} from "../types/appTypes";

export  function authPageShow(){
    return { type: AUTH_PAGE_SHOW }
}

export  function authPageHide(){
    return { type: AUTH_PAGE_HIDE }
}

export function userAccActivate(){
    return{
        type: USER_ACC_ACTIVATE
    }
}

export function userAccDeactivate(){
    return{
        type: USER_ACC_DEACTIVATE
    }
}

export function userAccNavBarActivate(){
    return{
        type: USER_ACC_NAVBAR_ACTIVATE
    }
}
export function userAccNavBarDeactivate(){
    return{
        type: USER_ACC_NAVBAR_DEACTIVATE
    }
}