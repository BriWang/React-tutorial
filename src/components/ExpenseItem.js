import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {

    return (
        <li className='expense-item'>  
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <p className='expense-item__price'>{props.amount}</p>
            </div>
        </li>
    );
}

export default ExpenseItem;