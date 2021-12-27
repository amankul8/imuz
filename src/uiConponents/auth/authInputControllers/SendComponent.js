import React from "react";
import {connect} from "react-redux";

function SendComponent(props){

    const sendHandler = (e)=>{
        e.preventDefault();

    }

    return(
        <button
            className={props.clsName}
            type="submit"
            onClick={e=>{sendHandler(e)}}
        >
            Send
        </button>
    )
}


export default connect(null,null)(SendComponent);

