import track_url  from "./../../musics/song_3.mp3";

const initialState = {
    tracks:[
        {trackName: 'No time to die', artistName: 'Billie Eilish', url: track_url, trackText: '', rating: 5, date: '12.12.2021', playing: false},
        {trackName: 'No time to die', artistName: 'Billie Eilish', url: track_url, trackText: '', rating: 5, date: '12.12.2021', playing: false},
        {trackName: 'No time to die', artistName: 'Billie Eilish', url: track_url, trackText: '', rating: 5, date: '12.12.2021', playing: false},
    ],
}

export const tracksReducer = (state=initialState, action)=>{

    switch (action.type){

        default:
            return state;
    }

}