
import ExpenseItem from "./ExpenseItem";

function ExpenseList(props) {

    if (props.filteredData.length === 0) {
        return <h2>No expense found.</h2>;
    }

    return (
        <ul> 
            {props.filteredData.map(exp =>
                <ExpenseItem
                    key={exp.id}
                    title={exp.title}
                    amount={exp.amount}
                    date={exp.date}
                />
            )}
        </ul>
    );

}

export default ExpenseList;

/*
another way to write conditional content

return (
    <div> 
        {props.filteredData.length === 0 && <h2>No expense found.</h2>}   
        {props.filteredData.length > 0 &&
            props.filteredData.map(exp =>
                <ExpenseItem
                    key={exp.id}
                    title={exp.title}
                    amount={exp.amount}
                    date={exp.date}
                />
            )
        }
    </div>
);

 */