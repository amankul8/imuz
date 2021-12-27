import React, {useState} from "react";
import classes from "./trackFilter.module.scss";
import FilterButton from "../../buttonsUI/filterButtons/FilterButton";

const TrackFilter = ()=>{

    const [filterNames, setFilterNames] = useState(
        [{name: 'by track name', active: true},
        {name: 'by artist name', active: false},
        {name: 'by rating', active: false},
        {name: 'by date', active: false}]
    );

    const filterActiveHandler=(id)=>{
        setFilterNames(prevState=>{
            return(
                prevState.map((item, index)=>{
                    if(id===index){
                        return {...item, active: true}
                    }else{
                        return {...item, active: false}
                    }
                })
            )
        })
    }

    return(
        <div className={classes.filterWrapper}>
            {
                filterNames.map((item, index)=>{
                    return(
                        <FilterButton name={item.name} active={item.active} activeHandler={filterActiveHandler} key={index} index={index}/>
                    )
                })
            }
        </div>
    )
}

export default TrackFilter;