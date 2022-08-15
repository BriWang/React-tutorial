import { useState } from "react"
import ErrorMsg from './ErrorMsg';
import classes from './NewUser.module.css';
import Button from './Button';

const NewUser = (props) => {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [err, setErr] = useState();

    const nameHandler = (event) => {
        setName(event.target.value);
    }

    const ageHandler = (event) => {
        setAge(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

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
        setName('');
        setAge('');
    }

    const cancelMsgHandler = () => {
        setErr();
    }

    return (
        <div>
            {err && (<ErrorMsg title={err.title} msg={err.message} onCancel={cancelMsgHandler} />)}
            <form className={classes.form} onSubmit={submitHandler}>
                <label>Username</label>
                <input type='text' onChange={nameHandler} />
                <label>Age(Years)</label>
                <input type='number' step='1' onChange={ageHandler} />    
                <Button type='submit' label='Add User' onClick={cancelMsgHandler} />
            </form>
        </div>
    );
}

export default NewUser;