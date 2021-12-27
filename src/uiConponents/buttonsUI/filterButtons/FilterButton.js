import React from "react";
import classes from "./filterButton.module.scss";

const FilterButton = (props)=>{

    let cls = [classes.filButton];

    if(props.active){
        cls.push(classes.active);
    }

    return(
        <button className={ cls.join(' ') } onClick={()=>{props.activeHandler(props.index)}} >
            {props.name}
        </button>
    )
}

export default FilterButton;