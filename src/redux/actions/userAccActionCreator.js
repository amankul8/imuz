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
import appAxios from "../../axios";

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

export function userDateSave(pl){
    return{
        type: USER_DATA_SAVE,
        payload: pl
    }
}


//--------------------------------------------------------------------------------


export function userRegistration(pl){
    toast.info("Request has been sent. !WAIT");
    return dispatch => {
        appAxios.post(`/users/user/auth/registration`, pl)
            .then(res => {
                if(res.status===201){
                    dispatch(inputReset());
                    toast.info("User created success !");
                    toast.info("Go through authorization !");
                }else{
                    toast.info(res.data.message);
                }
            })
            .catch(err => {
                toast.info(err.message);
            });
    };
}

export function userAuthorization(pl){
    toast.info("Request has been sent. !WAIT");
    return dispatch => {
        appAxios.post("/users/user/auth/authentication", pl)
            .then(res => {
                if(res.status===200){
                    dispatch(userDateSave({
                        id: res.data._id,
                        nickname: res.data.nickname,
                        email: res.data.email,
                        password: res.data.password
                    }));
                    dispatch(userAccActivate());
                    dispatch(inputReset());
                    toast.info("User authorization success!");
                }
            })
            .catch(err => {
                toast.info("Error while authorization !");
            });
    };
}

export function userForgetPassword(email){
    toast.info("Request has been sent. !WAIT");
    return dispatch => {
        appAxios.post("/users/user/auth/forget_password", {email: email})
            .then(res => {
                if(res.status===200){
                    dispatch(inputReset());
                    toast.info("Password has been changed and sent your Email!");
                }
            })
            .catch(err => {
                toast.info("Error while changing !");
            });
    };
}