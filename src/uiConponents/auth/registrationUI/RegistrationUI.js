import React from "react";
import classes from "./registration.module.scss"
import formImage from "../../../images/authForm/authFormRegister.png";
import {IoMdPerson, ImMail2, TiLockClosedOutline} from "react-icons/all";
import MailInputComponent from "../authInputControllers/MailInputComponent";
import InputTextComponent from "../authInputControllers/InputTextComponent";
import PasswordInputComponent from "../authInputControllers/PasswordInputComponent";
import SendComponent from "../authInputControllers/SendComponent";
import {toast} from "react-toastify";
import {connect} from "react-redux";
import {userRegistration} from "../../../redux/actions/userAccActionCreator";

const RegistrationUI = (props)=>{

    const sendHandler= async ()=>{
        if(props.inputStates.nickName.correct.crowded){
            toast.error("Nickname слишком длинный !");
        }else if(props.inputStates.nickName.correct.empty){
            toast.error("Поля для ввода имени пустой !");
        }else if(props.inputStates.nickName.correct.textError){
            toast.error("В никнейме есть ошибка (используйте только лат. буквы)!");
        }else if(!props.inputStates.password.correct){
            toast.error("Пороль не правильный [от 4 до 8]!");
        }else if(!props.inputStates.email.correct){
            toast.error("Email не правильный !");
        }else{
            props.userRegistration({
                nickname: props.inputStates.nickName.text,
                email: props.inputStates.email.email,
                password: props.inputStates.password.password
            })
        }
    }

    return(
        <div className={classes.wrapper}>
            <div className={classes.imageWrapper}>
                <img src={formImage} alt=""/>
            </div>
            <form>
                <div className={classes.formTittle}>
                    User Registration
                </div>
                <div className={classes.inputWrapper}>
                    <ImMail2/>
                    <MailInputComponent/>
                </div>
                <div className={classes.inputWrapper}>
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
    userRegistration
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationUI);