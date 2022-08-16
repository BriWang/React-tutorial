import { useState } from "react";

const FoodForm = () => {

    const [sum, setSum] = useState(1);

    const submitHandler = (e) => {
        e.preventDefault();
        
        setSum(sum + 1);
    }

    return (
        <form onSubmit={submitHandler} >
            <div>
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