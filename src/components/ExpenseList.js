
import ExpenseItem from "./ExpenseItem";

function ExpenseList(props) {
    if (props.filteredData.length === 0) {
        return <h2>No record found</h2>;
    } else {
        return (
            <div>
                {props.filteredData.map( exp =>
                    <ExpenseItem
                        key={exp.id}
                        title={exp.title}
                        amount={exp.amount}
                        date={exp.date}
                    />
                )}
            </div>
        );
    }  
}

export default ExpenseList;