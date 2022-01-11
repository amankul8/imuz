import React, {useEffect} from "react";
import classes from "./usersContent.module.scss";
import UserSearch from "../../searchUI/userSearch/UserSearch";
import UserUI from "../../userUI/UserUI";
import {Rings} from "react-loader-spinner";
import {connect} from "react-redux";
import {uploadUsers} from "../../../redux/actions/usersActionCreator";


const UsersContent = (props)=>{

    useEffect(()=>{props.uploadUsers();},[]);

    return(
        <div className={classes.contentWrapper}>
            <UserSearch/>
            {
                props.usersState.users.length!==0 ? props.usersState.users.map((user, index)=>{
                    return(
                        <UserUI nickname={user.nickname} image={user.image} key={index}/>
                    )
                }) : <p>No users</p>
            }

            {/*<Rings color="#F16393" height={80} width={80} />*/}
        </div>
    )
}
const mapStateToProps = (state)=>{
    return {usersState : state.usersState}
}

const mapDispatchToProps={
    uploadUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContent);