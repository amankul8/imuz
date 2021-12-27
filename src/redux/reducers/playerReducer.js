import t_url from "../../musics/song_4.mp3";
import {
    TRACK_PLAY,
    TRACK_PAUSE,
    TRACK_PROGRESS_RANGE,
    NEXT_TRACK,
    SHOW_TRACK_TEXT,
    PREVIOUS_TRACK,
    VOLUME_CONTROL,
    MUTE_SOUND,
    TRACK_REPEAT
} from "../types/appTypes";

const initialState = {
    currentTrack:{
        trackName: "A",
        artistName: "B",
        currentTime: 0,
        url: t_url,
        playing: false,
        volume: 50,
        trackRepeat: false,
        muted: false
    }
}

export const playerReducer = (state=initialState, action)=>{

    switch (action.type){
        case TRACK_PLAY:
            let newState1 = {...state};
            newState1.currentTrack.playing = true;
            return newState1;

        case TRACK_PAUSE:
            let newState2 = {...state};
            newState2.currentTrack.playing = false;
            return newState2;

        case NEXT_TRACK:
            return {}

        case PREVIOUS_TRACK:
            return {}

        case TRACK_PROGRESS_RANGE:
            let newState5 = {...state};
            newState5.currentTrack.currentTime = action.payload;
            return newState5;

        case SHOW_TRACK_TEXT:
            return {}

        case MUTE_SOUND:
            let newState7 = {...state};
            newState7.currentTrack.muted = !newState7.currentTrack.muted
            return newState7;

        case TRACK_REPEAT:
            let newState8 = {...state};
            newState8.currentTrack.trackRepeat = !newState8.currentTrack.trackRepeat;
            return newState8;

        case VOLUME_CONTROL:
            let newState9 = {...state};
            newState9.currentTrack.volume = action.payload;
            return newState9;

        default:
            return state;
    }

}