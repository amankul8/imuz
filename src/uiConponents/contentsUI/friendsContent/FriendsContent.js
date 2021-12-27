import React from "react";
import classes from "./friendsContent.module.scss";
import UserSearch from "../../searchUI/userSearch/UserSearch";


const FriendsContent = ()=>{

    return(
        <div className={classes.contentWrapper}>
            <UserSearch/>
        </div>
    )
}

export default FriendsContent;