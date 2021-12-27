import React from "react";
import classes from "./usersContent.module.scss";
import UserSearch from "../../searchUI/userSearch/UserSearch";


const UsersContent = ()=>{

    return(
        <div className={classes.contentWrapper}>
            <UserSearch/>
        </div>
    )
}

export default UsersContent;