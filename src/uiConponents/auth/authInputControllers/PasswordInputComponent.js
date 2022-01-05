import React from "react";
import {connect} from "react-redux";
import {
    inputPasswordChange,
    inputPasswordError,
} from "../../../redux/actions/authInputActionCreator";

function PasswordInputComponent(props){

    const inputHandler = (text)=>{
        if(text.length < 4 || text.length > 8){
            props.inputPasswordError(false);
        }else{
            props.inputPasswordError(true);
        }
        props.inputPasswordChange(text);
    }

    return(
        <input
            type="password"
            placeholder="Password"
            value={props.password}
            onChange={(e)=>{inputHandler(e.target.value)}}
        />
    )
}

const mapDispatchToProps = {
    inputPasswordChange,
    inputPasswordError,
}

const mapStateToProps = (state)=>{
    return{
        password: state.authPageState.inputStates.password.password
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(PasswordInputComponent);