import React from "react";
import classes from "./playListContent.module.scss";
import TrackFilter from "../../filterUI/trackFilter/TrackFilter";


const PlayListContent = ()=>{

    return(
        <div className={classes.contentWrapper}>
            <TrackFilter/>
        </div>
    )
}

export default PlayListContent;