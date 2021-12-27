import React from "react";
import classes from "./tracksUI.module.scss";
import { IoPlay,IoPause} from 'react-icons/io5'
import defImage from "../../images/defaultTrackImage.jpg";
import {connect} from "react-redux";
import addPlayListIcon from "./../../images/addPlayListIcon.png";

const TrackUI = (props)=>{

    return(
        <div className={classes.trackWrapper}>
            <div className={classes.block_1} >
                <div onClick={()=>{props.play(props.track.url)}}>
                    <img src={defImage} alt=""/>
                    <div>
                        {
                            props.track.playing ? <IoPause/> : <IoPlay/>
                        }
                    </div>
                </div>
            </div>
            <div className={classes.block_2}>
                <div>
                    <p>{props.track.trackName}</p>
                </div>
                <div>
                    <p>{props.track.artistName}</p>
                </div>
            </div>
            <div className={classes.block_3}>
                <img src={addPlayListIcon} alt=""/>
            </div>
        </div>
    )
}



export default  connect( null, null )(TrackUI);