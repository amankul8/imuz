import React from 'react'
import GlobalSearch from "../searchUI/globalSearch/GlobalSearch";
import logo from "../../images/imuz_logo.png";
import classes from './HeaderUI.module.scss';
import UserAccDeactivate from "../userAcc/userAccdDeactivate/UserAccDeactivate";
import UserAccActive from "../userAcc/userAccActive/UserAccActive";
import {connect} from "react-redux"
import {userAccActivate, userAccDeactivate} from "../../redux/actions/userAccActionCreator";

const HeaderUI = (props)=>{

    return(
        <div className={classes.headerWrapper}>
            <img className={classes.logo} src={logo} alt=""/>
            <GlobalSearch/>
            {
                props.userAcc.active ? <UserAccActive/> : <UserAccDeactivate/>
            }
        </div>
    )
}

const mapStateToProps = state=>{
    return{
        userAcc: state.userAccState.userAcc
    }
}

const mapDispatchToProps = {
    userAccActivate,
    userAccDeactivate
}


export default connect(mapStateToProps, mapDispatchToProps)(HeaderUI);