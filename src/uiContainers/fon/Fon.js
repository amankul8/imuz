import React from "react";
import {connect} from "react-redux";
import {userAccNavBarDeactivate} from "../../redux/actions/userAccActionCreator";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Fon(props){

    const hideAccNavBarHandler = ()=>{
        if(props.userAccNavBar.active){
            props.userAccNavBarDeactivate();
        }
    }
    return(
        <div className={props.styles} onClick={hideAccNavBarHandler}>
            {props.children}
            <ToastContainer
                position="bottom-right"
                autoClose={8000}
                hideProgressBar={true}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover
            />
        </div>
    )
}

const mapDispatchToProps = {
    userAccNavBarDeactivate
}

const mapStateToProps = (state)=>{
    return{
        userAccNavBar: state.userAccState.userAccNavBar
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Fon);