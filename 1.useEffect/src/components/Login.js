import React, { useEffect, useState } from "react";
import Button from './UI/Button';
import Input from './UI/Input';
import classes from './Login.module.css';

const Login = (props) => {
    
    const [email, setEmail] = useState('');
    const [psw, setPsw] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [emailIsValid, setEmailIsValid] = useState();
    const [pswIsValid, setPswIsValid] = useState();
    
    const emailHandler = e => {
        setEmail(e.target.value);
    }

    const pswHandler = e => {
        setPsw(e.target.value);
    }

    const pswValidHandler = () => {
        setPswIsValid(psw.trim().length > 6);
    }

    const emailValidHandler = () => {
        setEmailIsValid(email.includes('@'));
    }

    // Use Case 2: check validity of input data in response to keystroke is a Side Effect 
    useEffect(
        () => {
            const Validation = setTimeout(() => {   // setTimeout to avoid trigger action at every keystroke
                setIsValid(
                    email.includes('@') && psw.trim().length > 6
                );}
            , 500 );
            return () => {  // cleanup to avoid memory leak
                clearTimeout(Validation);
            }
        },
        [email, psw]
    );
    
    const submitHandler = (event) => {

        event.preventDefault();
        props.onSubmit();       
    }

    return (
        <React.Fragment>
            <form className={classes.Login} onSubmit={submitHandler} >
                <Input
                    isValid={emailIsValid}
                    label='E-mail'
                    type='email'
                    value={email}
                    onChange={emailHandler}
                    onBlur={emailValidHandler}
                />
                <Input
                    isValid={pswIsValid}
                    label='Password'
                    type='password'
                    value={psw}
                    onChange={pswHandler}
                    onBlur={pswValidHandler}
                />
                <div className={classes.action}>
                    <Button type='submit' disabled={!isValid}>Login</Button>
                </div> 
            </form>
        </React.Fragment>
    );
}

export default Login;