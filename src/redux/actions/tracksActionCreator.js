import {
    TRACK_PLAY,
    PREVIOUS_TRACK,
    NEXT_TRACK,
    TRACK_PAUSE,
    TRACK_PROGRESS_RANGE,
    SHOW_TRACK_TEXT,
    MUTE_SOUND,
    TRACK_REPEAT,
    VOLUME_CONTROL
} from "../types/appTypes";

export function playTrack(){
    return{
        type: TRACK_PLAY,
    }
}
export function pauseTrack(){
    return{
        type: TRACK_PAUSE,
    }
}
export function nextTrack(){
    return{
        type: NEXT_TRACK,
    }
}
export function previousTrack(){
    return{
        type: PREVIOUS_TRACK,
    }
}
export function setProgressRange(payload){
    return{
        type: TRACK_PROGRESS_RANGE,
        payload: payload
    }
}

export const volumeController=(payload)=>{
    return{
        type: VOLUME_CONTROL,
        payload: payload
    }
}

export function muteSound(){
    return{
        type:  MUTE_SOUND,
    }
}

export function trackRepeat(){
    return{
        type: TRACK_REPEAT
    }
}