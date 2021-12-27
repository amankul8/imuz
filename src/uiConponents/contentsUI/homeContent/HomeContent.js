import React from "react";
import classes from "./homeContent.module.scss";
import TrackUI from "../../tracksUI/TrackUI";
import {connect} from "react-redux";

const HomeContent = ()=>{

    return(
        <div className={classes.contentWrapper}>
            {
                // tracks.map((item, index)=>{
                //     return(
                //         <TrackUI track={item} key={index}/>
                //     )
                // })
            }
        </div>
    )
}

export default connect(null,null)(HomeContent);