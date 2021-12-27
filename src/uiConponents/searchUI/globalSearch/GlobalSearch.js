import React from "react";
import classes from "./globalSearch.module.scss";
import searchIcon from "../../../images/search_icon.png"

const GlobalSearch = ()=>{

    return(
        <>
            <form className={classes.formWrapper}>
                <input type="text" name='searchInput' placeholder='Artist & track name'/>
                <button type={"submit"}>
                    <img src={searchIcon} alt=""/>
                </button>
            </form>
        </>
    )
}

export default GlobalSearch;