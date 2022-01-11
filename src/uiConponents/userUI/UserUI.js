import React from "react";
import  classes from "./userUI.module.scss";
import defaultUserAvatar from "./../../images/user/defaultUserAvatar.png";
import addToFriends from "../../images/user/addToFriends.png"

const UserUI = (props)=>{

    return(
        <div className={classes.uiWrapper}>
            <div className={classes.userAvatar}>
                <img src={props.image?props.image:defaultUserAvatar} alt=""/>
            </div>
            <div className={classes.userName}>
                {props.nickname}
            </div>
            <img src={props.image?props.image:addToFriends} alt="" onClick={props.deleteHandler}/>
            
        </div>
    )
}

export default UserUI;