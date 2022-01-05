import {
    AUTH_PAGE_SHOW,
    AUTH_PAGE_HIDE,
    USER_ACC_ACTIVATE,
    USER_ACC_DEACTIVATE,
    USER_ACC_NAVBAR_ACTIVATE,
    USER_ACC_NAVBAR_DEACTIVATE,
    USER_DATA_SAVE
} from "../types/appTypes";
import axios from "axios";
import {toast} from "react-toastify";
import {inputReset} from "./authInputActionCreator";

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
        type: USER_ACC_DEACTIVATE,
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

export function userDateSave(pl){
    return{
        type: USER_DATA_SAVE
    }
}

export function userRegistration(pl){
    toast.info("Request has been sent. !WAIT");
    return dispatch => {
        axios.post(`http://localhost:5000/imuz/users/user/auth/registration`, {
                nickname: pl.nickname,
                email: pl.email,
                password: pl.password
            })
            .then(res => {
                toast.info("User created success !");
                toast.info("Go through authorization !");
                dispatch(inputReset());
            })
            .catch(err => {
                toast.info("Error while creating !");
            });
    };

}