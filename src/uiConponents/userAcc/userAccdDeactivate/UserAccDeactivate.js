import React from "react";
import classes from "./userAccDeactivate.module.scss";
import user_acc_logo from "../../../images/user_acc_logo.png"
import Auth from "../../auth/authUI/Auth";
import {connect} from "react-redux"
import {authPageShow} from "../../../redux/actions/userAccActionCreator";

const UserAccDeactivate = (props)=>{

    return(
        <>
            <div className={classes.userAcc} onClick={()=>{props.authPageShow()}}>
                <img src={user_acc_logo} alt=""/>
            </div>
            <Auth/>
        </>
    )
}

const mapDispatchToProps = {
    authPageShow
}

export default connect(null, mapDispatchToProps)(UserAccDeactivate);