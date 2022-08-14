import { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpenseFilter from './ExpenseFilter';
import Chart from '../Chart/Chart';

function Expense(props) {

    const [filteredYear, setFilteredYear] = useState('');
    
    const filterChangeHandler = (year) => {
        setFilteredYear(year);
    }
    
    let filteredExpenses = props.data;
    
    if (filteredYear !== '') {
        filteredExpenses = props.data.filter((e) => {
            return e.date.getFullYear().toString() === filteredYear;
        });
    } 
    return (
        <div>
            <ExpenseFilter
                selected={filteredYear}
                onChangeFilter={filterChangeHandler}
            />
            <Chart dataPoint={filteredExpenses} />
            <ExpenseList filteredData={filteredExpenses} />
        </div>
    );

}

export default Expense;