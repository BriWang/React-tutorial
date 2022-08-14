import { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm(props) {

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const titleChangehandler = (event) => {
        setTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault(); //Form has a built-in submission event, which will reload the page when triggered, thus we add the following code in the submitHandler so it doesn’t render the page automatically.

        const newData = {
            title: title,
            amount: amount,
            date: new Date(date),
        };

        props.onSaveExpense(newData);  //call parent function to pass data

        setTitle(''); //clear field once submit
        setAmount('');
        setDate('');
    };

    return (
        <form className='new-expense' onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input
                        type='text'
                        value={title}  //adding value={title} to setup two-way binding, so that you can clear the field once submit
                        onChange={titleChangehandler}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01'
                        value={amount}
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2022-12-31'
                        value={date}
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={props.onCancelEditing}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;