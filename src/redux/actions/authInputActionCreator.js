import {
    INPUT_TEXT_CHANGE,
    INPUT_MAIL_CHANGE,
    INPUT_PASSWORD_CHANGE,
    INPUT_TEXT_ERROR,
    INPUT_MAIL_ERROR,
    INPUT_PASSWORD_ERROR,
    INPUT_RESETS
} from "../types/appTypes";

export const inputTextChange =(text)=>{
    return({
        type: INPUT_TEXT_CHANGE,
        payload: text
    })
}
export const inputMailChange =(mail)=>{
    return({
        type: INPUT_MAIL_CHANGE,
        payload: mail
    })
}
export const inputPasswordChange =(password)=>{
    return({
        type: INPUT_PASSWORD_CHANGE,
        payload: password
    })
}

export const inputTextError =(payload)=>{
    return({
        type: INPUT_TEXT_ERROR,
        payload: payload
    })
}
export const inputMailError =(payload)=>{
    return({
        type: INPUT_MAIL_ERROR,
        payload: payload
    })
}
export const inputPasswordError =(payload)=>{
    return({
        type: INPUT_PASSWORD_ERROR,
        payload: payload
    })
}
export const inputReset =()=>{
    return({
        type: INPUT_RESETS
    })
}

