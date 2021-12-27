import React from "react";
import {connect} from "react-redux";
import {userAccNavBarDeactivate} from "../../redux/actions/userAuthAactionCreator";

function Fon(props){

    const hideAccNavBarHandler = ()=>{
        if(props.userAccNavBar.active){
            props.userAccNavBarDeactivate();
        }
    }

    return(
        <div className={props.styles} onClick={hideAccNavBarHandler}>
            {props.children}
        </div>
    )
}

const mapDispatchToProps = {
    userAccNavBarDeactivate
}

const mapStateToProps = (state)=>{
    return{
        userAccNavBar: state.userAccState.userAccNavBar
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Fon);