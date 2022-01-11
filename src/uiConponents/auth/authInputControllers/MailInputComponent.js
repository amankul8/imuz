import React from "react";
import {connect} from "react-redux";
import {
    inputMailChange,
    inputMailError,
} from "../../../redux/actions/authInputActionCreator";

function MailInputComponent(props){

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const inputHandler = (text)=>{
        if(validateEmail(text)){
            props.inputMailError(true);
        }else{
            props.inputMailError(false);
        }
        props.inputMailChange(text.toLowerCase());
    }

    return(
        <input
            type="email"
            placeholder="Email"
            value={props.email}
            onChange={(e)=>{inputHandler(e.target.value)}}
        />
    )
}

const mapDispatchToProps = {
        inputMailChange,
        inputMailError,
}

const mapStateToProps = (state)=>{
    return{
        email: state.authPageState.inputStates.email.email
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MailInputComponent);

