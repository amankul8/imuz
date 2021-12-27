import React from "react";
import classes from "./forgetPass.module.scss";
import formImage from "../../../images/authForm/aythFormForgetPass.png";
import {ImMail2} from "react-icons/all";
import MailInputComponent from "../authInputControllers/MailInputComponent";
import SendComponent from "../authInputControllers/SendComponent";


const ForgetPassUI = ()=>{

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

                <SendComponent clsName={classes.buttonWrapper}/>

            </form>
        </div>
    )
}

export default ForgetPassUI;