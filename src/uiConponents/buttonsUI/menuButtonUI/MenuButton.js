import React from "react";
import classes from "./menuButton.module.scss";

const MenuButton = (props)=>{
    let cls = [classes.buttonWrapper];

    if(props.active){
        cls.push(classes.active);
    }

    return(
        <div className={cls.join(' ')}>
            <img src={props.image} alt=""/>
            <span>
                {props.text}
            </span>
        </div>
    )
}

export default MenuButton;