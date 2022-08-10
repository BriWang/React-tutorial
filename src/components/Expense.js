import { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpenseFilter from './ExpenseFilter';

function Expense(props) {

    const [filteredYear, setFilteredYear] = useState('');
    
    const filterChangeHandler = (year) => {
        setFilteredYear(year);
    }
    
    const filteredExpenses = props.data.filter((e) => {
        return e.date.getFullYear().toString() === filteredYear;
    });
    
    if (filteredYear === '') {
        return (
            <div>
                <ExpenseFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />
                <ExpenseList filteredData={props.data} />
            </div>
        );
    } else {
        return (
            <div>
                <ExpenseFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />
                <ExpenseList filteredData={filteredExpenses} />
            </div>
        );
    } 
}

export default Expense;