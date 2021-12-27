import React from "react";
import classes from "./authMenuBotton.module.scss";

const AuthMenuButton = (props)=>{
    let cls = [classes.but];

    if(props.active){
        cls.push(classes.active);
    }
    return(
        <button className={cls.join(' ')} onClick={()=>{props.clickHandler(props.index)}}>
            {props.text}
        </button>
    )
}

export default AuthMenuButton;