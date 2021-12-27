import React from "react"
import {pauseTrack, setProgressRange} from "../../redux/actions/tracksActionCreator";
import {compose} from "redux";

function withPlayer(TrackPlayer){

    return class Player extends React.Component{
        constructor(props) {
            super(props);
            this.audio = new Audio();
        }
        componentDidMount() {
            this.track = this.props.playerState.currentTrack;
            this.audio.loop = false;
            this.audio.crossOrigin = '';
            this.audio.type = this.track.url.split('.').pop();
            this.audio.src = this.track.url;
            this.audio.volume = (this.track.volume/100);
        }

        play = ()=>{
            try {
                this.props.playTrack();
                this.audio.play();
                this.setProgressRage(true);
            }catch (e){
                console.log(e);
                this.setProgressRage(false);
            }
        }

        setProgressRage = (sign)=>{
            if(sign){
                let loop = setInterval(()=>{
                    let range = (this.audio.currentTime*100)/this.audio.duration;
                    range = range.toFixed(3);
                    if(this.audio.ended!==true && this.audio.currentTime!==this.audio.duration){
                        this.props.setProgressRange(range);
                    }else{
                        clearInterval(loop);
                    }
                }, 300);
            }

        }

        pause = ()=>{
            this.audio.pause();
            this.props.pauseTrack();
        }

        next = ()=>{

        }

        previous = ()=>{

        }

        volumeController = (sound)=>{
            this.props.volumeController(sound);
            if(this.audio.played){
                this.audio.volume = this.track.volume/100;
            }
        }

        mute = ()=>{
            this.props.muteSound();
            if(this.audio.played.length){
                this.audio.muted = this.props.playerState.currentTrack.muted;
            }
        }

        setTrackCurrentTime = (time)=>{
            let t = (time*this.audio.duration)/100;
            this.audio.currentTime = t;
        }

        repeatTrack = ()=>{
            this.props.trackRepeat();
            if(this.audio.played.length){
                this.audio.loop = this.props.playerState.currentTrack.trackRepeat;
            }
        }

        render(){
            return(
                <TrackPlayer
                    play={this.play}
                    pause={this.pause}
                    next={this.next}
                    previous={this.previous}
                    volume={this.volumeController}
                    getSnapshotBeforeUpdat={this.getSnapshotBeforeUpdate}
                    mute={this.mute}
                    setTrackCurrentTime = {this.setTrackCurrentTime}
                    repeatTrack = {this.repeatTrack}
                    {...this.props}
                />
            )
        }
    }
}

export default withPlayer;