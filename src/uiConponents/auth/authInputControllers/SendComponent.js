import React from "react";
import {connect} from "react-redux";

function SendComponent(props){

    return(
        <button
            className={props.clsName}
            type="submit"
            onClick={e=>{
                e.preventDefault();
                props.sendHandler()}
            }
        >
            Send
        </button>
    )
}


export default connect(null,null)(SendComponent);

