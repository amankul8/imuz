import React from 'react'
import GlobalSearch from "../searchUI/globalSearch/GlobalSearch";
import logo from "../../images/imuz_logo.png";
import classes from './HeaderUI.module.scss';
import UserAccDeactivate from "../userAcc/userAccdDeactivate/UserAccDeactivate";
import UserAccActive from "../userAcc/userAccActive/UserAccActive";
import {connect} from "react-redux"

const HeaderUI = (props)=>{

    return(
        <div className={classes.headerWrapper}>
            <img className={classes.logo} src={logo} alt=""/>
            <GlobalSearch/>
            {
                props.userAcc ? <UserAccActive userInfo={props.userInfo}/> : <UserAccDeactivate/>
            }
        </div>
    )
}

const mapStateToProps = state=>{
    return{
        userAcc: state.userAccState.userAcc.active,
        userInfo: state.userAccState.userAcc.user
    }
}



export default connect(mapStateToProps, null)(HeaderUI);