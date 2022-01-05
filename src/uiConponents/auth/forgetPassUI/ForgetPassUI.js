import React from "react";
import classes from "./forgetPass.module.scss";
import formImage from "../../../images/authForm/aythFormForgetPass.png";
import {ImMail2} from "react-icons/all";
import MailInputComponent from "../authInputControllers/MailInputComponent";
import SendComponent from "../authInputControllers/SendComponent";
import {toast} from "react-toastify";
import {connect} from "react-redux";

const ForgetPassUI = (props)=>{

    const sendHandler = ()=>{
        if(!props.inputStates.email.correct){
            toast.error("Email не правильный !");
        }else{
            alert("Все ок")
        }
    }

    return(
        <div className={classes.wrapper}>
            <div className={classes.imageWrapper}>
                <img src={formImage} alt=""/>
            </div>
            <form>
                <div className={classes.formTittle}>
                    User forget password
                </div>
                <div className={classes.inputWrapper}>
                    <ImMail2/>
                    <MailInputComponent/>
                </div>

                <SendComponent clsName={classes.buttonWrapper} sendHandler={sendHandler}/>

            </form>
        </div>
    )
}
const mapStateToProps =(state)=>{
    return {
        inputStates: state.authPageState.inputStates
    }
}

export default connect(mapStateToProps, null)(ForgetPassUI);