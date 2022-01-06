import classes from "./userAccActive.module.scss";
import user_acc_logo from "../../../images/user_acc_logo.png"
import {connect} from "react-redux";
import {
    userAccDeactivate,
    userAccNavBarActivate,
    userAccNavBarDeactivate
} from "../../../redux/actions/userAccActionCreator";

const UserAccActive = (props)=>{
    let cls1 = [classes.block_2];
    let cls2 = [classes.block_1];

    if(props.userAccNavBar.active){
        cls1.push(classes.show);
        cls2.push(classes.block_1_active);
    }else{
        cls1.push(classes.hide);
    }

    const showAccNavBarHandler = (e)=>{
        e.stopPropagation();
        if(props.userAccNavBar.active){
            props.userAccNavBarDeactivate();
        }else{
            props.userAccNavBarActivate();
        }
    }

    return(
        <div className={classes.userAcc}>
            <div className={cls2.join(" ")} onClick={(e)=>{showAccNavBarHandler(e)}} >
                <div className={classes.user_avatar}>
                    <img src={user_acc_logo} alt=""/>
                </div>
                <div>{props.userInfo.nickname}</div>
            </div>
            <div className={cls1.join(' ')} onClick={(e)=>{e.stopPropagation()}}>
                <div>{props.userInfo.email}</div>
                <div>Setting</div>
                <div onClick={()=>{props.userAccDeactivate()}}>Sing out</div>
            </div>
        </div>
    )
}

const mapStateToProps = state=>{
    return{
        userAccNavBar: state.userAccState.userAccNavBar
    }
}

const mapDispatchToProps = {
    userAccNavBarActivate,
    userAccNavBarDeactivate,
    userAccDeactivate
}

export default connect(mapStateToProps, mapDispatchToProps)(UserAccActive);