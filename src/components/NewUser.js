import React, { useState, useRef } from "react"
import ErrorMsg from './ErrorMsg';
import classes from './NewUser.module.css';
import Button from './Button';

const NewUser = (props) => {

    const nameRef = useRef();
    const ageRef = useRef();

    const [err, setErr] = useState();

    const submitHandler = (event) => {
        event.preventDefault();

        const name = nameRef.current.value;
        const age = ageRef.current.value;
        
        if (name.trim().length === 0 || age.trim().length === 0) {
            setErr({
                title: 'Invalid Input',
                message: 'Please enter a valid data here (non-empty)'
            });
            return;
        }

        if (+age < 1) {
            setErr({
                title: 'Invalid Input',
                message: 'Please enter a valid age here (>0)'
            });
            return;
        }

        const newUser = {
            id: Math.random(),
            name: name,
            age: age
        }

        props.onAddUser(newUser);
        event.target.reset(); //reset entire form field, only works for uncontrolled components. If controlled component, have to set useState to initialState
    }

    const cancelMsgHandler = () => {
        setErr();
    }

    return (
        <React.Fragment>
            {err && (
                <ErrorMsg
                    title={err.title}
                    msg={err.message}
                    onCancel={cancelMsgHandler}
                />
            )}
            <form className={classes.form} onSubmit={submitHandler}>
                <label>Username</label>
                <input type='text' ref={nameRef} />
                <label>Age(Years)</label>
                <input type='number' step='1' ref={ageRef} />    
                <Button type='submit' label='Add User' onClick={cancelMsgHandler} />
            </form>
        </React.Fragment>
    );
}

export default NewUser;