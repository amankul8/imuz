import React from "react";
import { IoPlay, IoPause, IoPlaySkipForward, IoPlaySkipBack,IoVolumeHigh,IoVolumeMute,IoShuffle,IoRepeatOutline } from 'react-icons/io5';
import classes from "./trackPlayer.module.scss"
import defaultImage from "../../images/defaultTrackImage.jpg"
import withPlayer from "../../hoc/player/withPlayer";
import {connect} from "react-redux";
import {
    playTrack,
    pauseTrack,
    setProgressRange,
    muteSound,
    trackRepeat,
    volumeController,
} from "../../redux/actions/tracksActionCreator";

const TrackPlayer = (props)=>{



    return(
        <div className={classes.trackPlayerWrapper}>
            <div className={classes.block_1}>
                {
                    props.playerState.currentTrack.playing ?
                        <div className={classes.playButtons} onClick={()=>props.pause()}>
                            <IoPause/>
                        </div>
                    :
                        <div className={classes.playButtons} onClick={()=>props.play()}>
                            <IoPlay/>
                        </div>
                }
                <div className={classes.changeButtons}>
                    <span>
                        <IoPlaySkipBack/>
                    </span>
                    <span onClick={()=>{}}>
                        <IoPlaySkipForward/>
                    </span>
                </div>
                <div className={classes.trackImage}>
                    <img src={defaultImage} alt=""/>
                </div>
            </div>

            <div className={classes.block_2}>
                <div className={classes.trackName}>Track name</div>
                <div className={classes.artistName}>Artist name</div>
                <div className={classes.trackRange}>
                    <input
                        type="range"
                        min={0} max={100}
                        value={props.playerState.currentTrack.currentTime}
                        onChange={(e)=>{props.setTrackCurrentTime(e.target.value)}}/>
                </div>
            </div>

            <div className={classes.block_3}>
                <div className={classes.volumeControl}>
                    <div className={classes.repeatControl}>
                        <div onClick={props.repeatTrack}>
                            {props.playerState.currentTrack.trackRepeat ? <IoRepeatOutline/> : <IoShuffle/>}
                        </div>
                    </div>
                    <div className={classes.volume}>
                        <div onClick={props.mute}>
                            {props.playerState.currentTrack.muted ? <IoVolumeMute/> :<IoVolumeHigh/>}
                        </div>
                        <input
                            type="range"
                            min={0}
                            max={100}
                            value={props.playerState.currentTrack.volume}
                            onChange={(e)=> {
                            props.volume(e.target.value);
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return {playerState: state.playerState}
}

const mapDispatchToProps = {
    playTrack, pauseTrack, setProgressRange, muteSound, trackRepeat, volumeController
}

export default connect(mapStateToProps, mapDispatchToProps)(withPlayer(TrackPlayer));