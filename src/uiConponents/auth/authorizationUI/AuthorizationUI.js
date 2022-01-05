import React from "react";
import classes from "./authorization.module.scss";
import {TiLockClosedOutline, IoMdPerson} from "react-icons/all";
import formImage from "../../../images/authForm/aythFormLogin.png";
import InputTextComponent from "../authInputControllers/InputTextComponent";
import PasswordInputComponent from "../authInputControllers/PasswordInputComponent";
import SendComponent from "../authInputControllers/SendComponent";
import {connect} from "react-redux";
import {toast} from "react-toastify";
import axios from "axios";

const AuthorizationUI = (props)=>{

    const sendHandler = async ()=>{
        alert("Hi0");
        if(props.inputStates.nickName.correct.crowded){
            toast.error("Nickname слишком длинный !");
        }else if(props.inputStates.nickName.correct.empty){
            toast.error("Поля для ввода имени пустой !");
        }else if(props.inputStates.nickName.correct.textError){
            toast.error("В никнейме есть ошибка !");
        }else if(!props.inputStates.password.correct){
            toast.error("Пороль не правильный !");
        }else {

        }

    }

    return(
        <div className={classes.wrapper}>
            <div className={classes.imageWrapper}>
                <img src={formImage} alt=""/>
            </div>
            <form>
                <div className={classes.formTittle}>
                    User login
                </div>
                <div className={classes.inputWrapper} >
                    <IoMdPerson />
                    <InputTextComponent/>
                </div>
                <div className={classes.inputWrapper}>
                    <TiLockClosedOutline/>
                    <PasswordInputComponent/>
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

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizationUI);