import React, {useState} from "react";
import classes from "./authorization.module.scss";
import {TiLockClosedOutline, IoMdPerson} from "react-icons/all";
import formImage from "../../../images/authForm/aythFormLogin.png";
import InputTextComponent from "../authInputControllers/InputTextComponent";
import PasswordInputComponent from "../authInputControllers/PasswordInputComponent";
import SendComponent from "../authInputControllers/SendComponent";


const AuthorizationUI = (props)=>{


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

                <SendComponent clsName={classes.buttonWrapper}/>

            </form>
        </div>
    )
}

export default AuthorizationUI;