import React, {useRef, useState} from "react";
import classes from "./auth.module.scss";
import AuthMenuButton from "../../buttonsUI/authMenuButtonUI/AuthMenuButton";
import AuthorizationUI from "../authorizationUI/AuthorizationUI";
import RegistrationUI from "../registrationUI/RegistrationUI";
import ForgetPassUI from "../forgetPassUI/ForgetPassUI";
import {connect} from "react-redux";
import {authPageShow, authPageHide, } from "../../../redux/actions/userAccActionCreator";
import {inputReset} from "../../../redux/actions/authInputActionCreator";


const Auth = (props) => {
    let k = Math.random();
    let cls = [classes.backPage];
    let backPage = useRef(null);
    let [authList, setAuthList] = useState([
        {text: "Log in", component: <AuthorizationUI key={k}/>, active: true},
        {text: "Sign up", component: <RegistrationUI key={k}/>, active: false},
        {text: "Forget pass", component: <ForgetPassUI key={k}/>, active: false}
    ])

    const changePageHandler = (i) => {
        props.inputReset();
        setAuthList(prevState => {
            return (
                prevState.map((item, index) => i === index ? ({...item, active: true}) : ({...item, active: false}))
            )
        });
    }

    if (props.authPageState.page.visible) {
        cls.push(classes.show);
    } else {
        cls.push(classes.hide);
    }

    return (
        <div ref={backPage} className={cls.join(" ")} onClick={() => {
            props.authPageHide()
        }}>

            <div className={classes.authWrapper} onClick={(e) => e.stopPropagation()}>
                <div>
                    {
                        authList.map((item, index) => {
                            return (
                                <AuthMenuButton text={item.text} active={item.active} clickHandler={changePageHandler} key={index} index={index}/>
                            )
                        })
                    }
                </div>
                {
                    authList.map((item, index) => {
                        return (
                            item.active ? item.component : null
                        )
                    })
                }
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        authPageState: state.authPageState
    }
}

const mapDispatchToProps = {
    authPageShow,
    authPageHide,
    inputReset
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);