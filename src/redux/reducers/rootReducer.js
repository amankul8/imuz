import {combineReducers} from "redux"
import {authReducer} from "./authReducer";
import {userAccReducer} from "./userAccReducer";
import {tracksReducer} from "./tracksReducer";
import {playerReducer} from "./playerReducer";
import {userReducer} from "./userReducer";

export const rootReducer = combineReducers({
    authPageState: authReducer,
    userAccState: userAccReducer,
    tracksState: tracksReducer,
    playerState: playerReducer,
    usersState: userReducer,
})
