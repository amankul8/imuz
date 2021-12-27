import React from "react"
import {connect} from "react-redux";
import {
    inputTextChange,
    inputTextError
} from "../../../redux/actions/authInputActionCreator";

function  InputTextComponent(props){

    const correctNickname = (nick)=>{
        let n = /^[a-zA-Z]+$/;
        return n.test(String(nick));
    }

    const inputHandler = (text)=>{
        if(text.length > 12){
            props.inputTextError({type: 1});
        }else{
            props.inputTextError({type: 2});
        }
        if(correctNickname(text)){
            props.inputTextError({type: 3});
        }else{
            props.inputTextError({type: 4});
        }
        if(text.length===0){
            props.inputTextError({type: 5});
        }else{
            props.inputTextError({type: 6});
        }
        props.inputTextChange(text);
    }
    return(
        <>
            <input
                type="text"
                placeholder="Nickname"
                onChange={(e)=>{
                inputHandler(e.target.value);
            }}/>
        </>
    )
}

const mapDispatchToProps = {
    inputTextChange,
    inputTextError,
}

export default connect(null, mapDispatchToProps)(InputTextComponent);
