import React, { useEffect, useReducer, useState } from "react";
import Button from './Button';
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
    
    // Use Case 2: check validity of input data in response to keystroke is a Side Effect 
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
    
    /*  
        don't use the whole emailState object here if it only depends on some part of the object
        you can use obj destructure:

        const { isValid: emailIsValid } = emailState;   // : emailIsValid is to set alias, not set value
        const { isValid: passwordIsValid } = passwordState;

        then, replace emailState.isValid with emailIsValid in the code
    */
    
    const submitHandler = (event) => {
        event.preventDefault();
        props.onSubmit();       
    }

    return (
        <React.Fragment>
            <form className={classes.Login} onSubmit={submitHandler} >
                <div className={`${classes.control} ${
                        emailState.isValid === false ? classes.invalid : ''
                }`} >
                    <label>E-mail:</label>
                    <input type='email' value={emailState.value} onChange={emailChangeHandler} onBlur={emailBlurHandler} />
                </div>
                <div className={`${classes.control} ${
                        pswState.isValid === false ? classes.invalid : ''
                }`}>
                    <label>Password</label>
                    <input type='password' value={pswState.value} onChange={pswChangeHandler} onBlur={pswBlurHandler} />
                </div>
                <div className={classes.action}>
                    <Button type='submit' disabled={!isValid}>Login</Button>
                </div> 
            </form>
        </React.Fragment>
    );
}

export default Login;