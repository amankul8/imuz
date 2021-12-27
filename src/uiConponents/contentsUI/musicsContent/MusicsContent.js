import React from "react";
import classes from "./musicsContent.module.scss";
import TrackFilter from "../../filterUI/trackFilter/TrackFilter";


const MusicsContent = ()=>{

    return(
        <div className={classes.contentWrapper}>
            <TrackFilter/>
        </div>
    )
}

export default MusicsContent;