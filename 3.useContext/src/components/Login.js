import React, { useEffect, useReducer, useState, useContext } from "react";
import Button from './UI/Button';
import Input from './UI/Input';
import AuthContext from '../store/auth-context';
import classes from './Login.module.css';

const emailReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return { value: action.val, isValid: action.val.includes('@') };
    }
    if (action.type === 'USER_BLUR') {  //get the latest state.value
        return { value: state.value, isValid: state.value.includes('@') };
    }
    return { value: '', isValid: false };
}

const pswReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return { value: action.val, isValid: action.val.trim().length > 6 };
    }
    if (action.type === 'USER_BLUR') { 
        return { value: state.value, isValid: state.value.trim().length > 6 };
    }
    return { value: '', isValid: false };
}

const Login = (props) => {

    const ctx = useContext(AuthContext);

    const [isValid, setIsValid] = useState(false);

    const [emailState, disptachEmail] = useReducer(
        emailReducer,
        {  //init state
            value: '',
            isValid: null
        }
    );
    
    const [pswState, disptachPsw] = useReducer(
        pswReducer,
        {
            value: '',
            isValid: null
        }
    );

    const emailChangeHandler = (e) => {
        disptachEmail({ type: 'USER_INPUT', val: e.target.value });
    };
    
    const emailBlurHandler = () => {
        disptachEmail({ type: 'USER_BLUR' });
    }

    const pswChangeHandler = e => {
        disptachPsw({ type: 'USER_INPUT', val: e.target.value });
    }

    const pswBlurHandler = () => {
        disptachPsw({ type: 'USER_BLUR' });
    }
    
    useEffect(
        () => {
            const Validation = setTimeout(() => {   // setTimeout to avoid trigger action at every keystroke
                setIsValid(
                    emailState.isValid && pswState.isValid
                );}
            , 500 );
            return () => {  // cleanup to avoid memory leak
                clearTimeout(Validation);
            }
        },
        [emailState.isValid, pswState.isValid] 
    );

    
    const submitHandler = (event) => {
        event.preventDefault();
        ctx.onLogin();    
    }

    return (
        <React.Fragment>
            <form className={classes.Login} onSubmit={submitHandler} >
                <Input
                    isValid={emailState.isValid}
                    label='E-mail'
                    type='email'
                    value={emailState.value}
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}
                />
                <Input
                    isValid={pswState.isValid}
                    label='Password'
                    type='password'
                    value={pswState.value}
                    onChange={pswChangeHandler}
                    onBlur={pswBlurHandler}
                />
                <div className={classes.action}>
                    <Button type='submit' disabled={!isValid}>Login</Button>
                </div> 
            </form>
        </React.Fragment>
    );
}

export default Login;