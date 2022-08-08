import ExpenseForm from "./ExpenseForm";

function AddExpense(props) {
    const saveExpenseHandler = (data) => {
        const expenseData = {           //add id to the data
            ...data,
            id: Math.random().toString()
        }
        props.onSubmitExpense(expenseData);    //call parent function
    };

    return <ExpenseForm onSaveExpense={saveExpenseHandler} />;
}

export default AddExpense;