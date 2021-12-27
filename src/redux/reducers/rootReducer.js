import {combineReducers} from "redux"
import {authReducer} from "./authReducer";
import {userReducer} from "./userReducer";
import {tracksReducer} from "./tracksReducer";
import {playerReducer} from "./playerReducer";

export const rootReducer = combineReducers({
    authPageState: authReducer,
    userAccState: userReducer,
    tracksState: tracksReducer,
    playerState: playerReducer,
})
