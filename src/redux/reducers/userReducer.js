import {
    ADD_TO_FRIENDS,
    DELETE_FROM_FRIENDS,
    REBOOT_FRIENDS,
    REBOOT_USERS,
    UPLOAD_FRIENDS,
    UPLOAD_USERS
} from "../types/userTypes";

let initialState = {
    users:[],
    friends: []
}

export const userReducer = (state = initialState, action)=>{
    let temp = {...state};
    switch (action.type){
        case UPLOAD_USERS:
            let newState = {...state};
            return {...state, users: action.payload}
        case REBOOT_USERS:
            temp.users = action.payload;
            return {...temp}

        case UPLOAD_FRIENDS:
            temp.friends = action.payload;
            return {...temp}
        case REBOOT_FRIENDS:
            temp.friends = action.payload;
            return {...temp}

        case ADD_TO_FRIENDS:
            temp.friends = action.payload;
            return {...temp}
        case DELETE_FROM_FRIENDS:
            temp.friends = action.payload;
            return {...temp}

        default:
            return state;
    }
}