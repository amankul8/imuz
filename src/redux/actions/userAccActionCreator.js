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

export function userRegistration(pl){
    toast.info("Request has been sent. !WAIT");
    return dispatch => {
        axios.post(`http://localhost:5000/imuz/users/user/auth/registration`, pl)
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
        axios.post("http://localhost:5000/imuz/users/user/auth/authentication", pl)
            .then(res => {
                toast.info("User authorization success!");
                dispatch(userDateSave({
                    id: res.data._id,
                    nickname: res.data.nickname,
                    email: res.data.email,
                    password: res.data.password
                }));
                dispatch(userAccActivate());
                dispatch(inputReset());
            })
            .catch(err => {
                toast.info("Error while authorization !");
            });
    };
}