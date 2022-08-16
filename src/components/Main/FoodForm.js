import { useState } from "react";
import classes from './FoodForm.module.css';

const FoodForm = () => {

    const [sum, setSum] = useState(1);

    const submitHandler = (e) => {
        e.preventDefault();
        
        setSum(sum + 1);
    }

    return (
        <form className={classes.form}  onSubmit={submitHandler} >
            <div className={classes.input} >
                <label>amount</label>
                <input
                    type='number'
                    value={sum}
                    readOnly
                />
            </div>
            <div>
                <button type='submit'>+ Add</button>
            </div>
        </form>
    );
}

export default FoodForm;