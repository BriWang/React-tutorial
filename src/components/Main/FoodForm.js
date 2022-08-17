import { useRef } from "react";
import classes from './FoodForm.module.css';

const FoodForm = (props) => {

    const amountRef = useRef();  // use ref instead of usestate is because we don't need to re-redenr the UI

    const submitHandler = (e) => { 
        e.preventDefault();
        
        const amount = amountRef.current.value;
        props.onAddItem(amount);
    }
   
    return (
        <form className={classes.form}  onSubmit={submitHandler} >
            <div className={classes.input} >
                <label>Amount</label>
                <input
                    min='0'
                    step='1'
                    type='number'
                    ref={amountRef}
                    defaultValue='1'
                />
            </div>
            <div>
                <button type='submit'>+ Add</button>
            </div>
        </form>
    );
}

export default FoodForm;