import {AUTH_PAGE_SHOW,AUTH_PAGE_HIDE} from "../types/appTypes";
import {
    INPUT_TEXT_CHANGE,
    INPUT_MAIL_CHANGE,
    INPUT_PASSWORD_CHANGE,
    INPUT_TEXT_ERROR,
    INPUT_MAIL_ERROR,
    INPUT_PASSWORD_ERROR,
    INPUT_RESETS
} from "../types/appTypes";

const initialState = {
    page: {
        visible: false
    },
    inputStates:{
        nickName: {
            text: "",
            correct: {
                empty: true,
                crowded: false,
                textError: false
            }
        },
        email: {
            email: "",
            correct: false
        },
        password: {
            password: "",
            correct: false
        }
    }
}

export const authReducer = (state = initialState, action)=>{
    switch (action.type){
        case AUTH_PAGE_SHOW:
            return {...state, page: {visible: true}};

        case AUTH_PAGE_HIDE:
            return {...state, page: {visible: false}};

        case INPUT_TEXT_CHANGE:
            let newState1 = {...state};
            newState1.inputStates.nickName.text = action.payload;
            return newState1;

        case INPUT_TEXT_ERROR:
            let newState2 = {...state};
            switch (action.payload.type){
                case 1:
                    newState2.inputStates.nickName.correct.crowded = true;
                    break
                case 2:
                    newState2.inputStates.nickName.correct.crowded = false;
                    break
                case 3:
                    newState2.inputStates.nickName.correct.textError = false;
                    break
                case 4:
                    newState2.inputStates.nickName.correct.textError = true;
                    break
                case 5:
                    newState2.inputStates.nickName.correct.empty = true;
                    break
                case 6:
                    newState2.inputStates.nickName.correct.empty = false;
                    break
                default:
                    break;
            }
            return newState2;

        case INPUT_PASSWORD_CHANGE:
            let newState3 = {...state};
            newState3.inputStates.password.password = action.payload;
            return newState3;

        case INPUT_PASSWORD_ERROR:
            let newState4 = {...state};
            newState4.inputStates.password.correct = action.payload;
            return newState4;

        case INPUT_MAIL_CHANGE:
            let newState5 = {...state};
            newState5.inputStates.email.email = action.payload;
            return newState5;

        case INPUT_MAIL_ERROR:
            let newState6 = {...state};
            newState6.inputStates.email.correct = action.payload;
            return newState6;

        case INPUT_RESETS:
            let newState7 = {...state};
            newState7.inputStates = {
                nickName: {
                    text: "",
                    correct: {
                        empty: true,
                        crowded: false,
                        textError: false
                    }
                },
                email: {
                    email: "",
                    correct: false
                },
                password: {
                    password: "",
                    correct: false
                }
            };
            return newState7;
        default :
            return state;
    }
}