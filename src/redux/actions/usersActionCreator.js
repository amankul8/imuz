import {
    ADD_TO_FRIENDS,
    DELETE_FROM_FRIENDS,
    REBOOT_FRIENDS,
    REBOOT_USERS,
    UPLOAD_FRIENDS,
    UPLOAD_USERS
} from "../types/userTypes";
import appAxios from "../../axios";
import {toast} from "react-toastify";

export function uploadUsers(){
    return async dispatch=>{
        let result = await appAxios({
            url: "/users",
            method: "get",
        });

        if(result.status === 200){
               dispatch({
                   type: UPLOAD_USERS,
                   payload: result.data
               })
        }
    }
}
export function rebootUsers(users){
    return{
        type: REBOOT_USERS,
        payload: users
    }
}

export function uploadFriends(user_id){
    return{
        type: UPLOAD_FRIENDS,
        payload: user_id
    }
}
export function rebootFriends(friends){
    return{
        type: REBOOT_FRIENDS,
        payload: friends
    }
}

export function addToFriends(id){
    return{
        type: ADD_TO_FRIENDS,
        payload: id
    }
}
export function deleteFromFriends(id){
    return{
        type: DELETE_FROM_FRIENDS,
        payload: id
    }
}