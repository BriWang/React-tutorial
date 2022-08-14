import { useState } from "react";
import ExpenseForm from "./ExpenseForm";

function AddExpense(props) {

    const saveExpenseHandler = (data) => {
        const expenseData = {           //add id to the data
            ...data,
            id: Math.random().toString()
        }
        props.onSubmitExpense(expenseData);    //call parent function
        setIsEditing(false);
    };

    /* conditional content - use state change to reder different content */
    const [isEditing, setIsEditing] = useState(false);

    const editHandler = () => {
        setIsEditing(true);
    }

    const cancelEditingHandler = () => {
        setIsEditing(false);
    }

    if (isEditing === false) {
        return (
            <div className='new-expense'>
                <button onClick={editHandler}>Add New Expense</button>
            </div>
        );
    }

    return <ExpenseForm onSaveExpense={saveExpenseHandler} onCancelEditing={cancelEditingHandler} />;
}

export default AddExpense;