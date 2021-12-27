import React from "react";
import classes from "./registration.module.scss"
import formImage from "../../../images/authForm/authFormRegister.png";
import {IoMdPerson, ImMail2, TiLockClosedOutline} from "react-icons/all";
import MailInputComponent from "../authInputControllers/MailInputComponent";
import InputTextComponent from "../authInputControllers/InputTextComponent";
import PasswordInputComponent from "../authInputControllers/PasswordInputComponent";
import SendComponent from "../authInputControllers/SendComponent";

const RegistrationUI = ()=>{

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

                <SendComponent clsName={classes.buttonWrapper}/>

            </form>
        </div>
    )
}

export default RegistrationUI;