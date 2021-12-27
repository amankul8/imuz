import React from "react";
import classes from "./UserSearch.module.scss";
import searchIcon from "../../../images/search_icon.png";

const UserSearch = ()=>{

    return(
        <form className={classes.formWrapper}>
            <input type="text" name='searchInput' placeholder='User nickname '/>
        </form>
    )
}

export default UserSearch;