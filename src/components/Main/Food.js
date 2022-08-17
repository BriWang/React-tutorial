import FoodForm from './FoodForm';
import classes from './Food.module.css';
import OrderContext from '../../store/order-context';
import { useContext } from 'react';

const Food = (props) => {
    
    const ctx = useContext(OrderContext);

    const getItemHandler = (data) => {
        const item = {
            id: props.id,
            title: props.title,
            price: props.price,
            amount: +data
        }
        //console.log(item);
        ctx.addItem(item);  //generate data and pass to ctx to store
    } 

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.title}</h3>
                <p className={classes.description}>{props.description}</p>
                <p className={classes.price}>{props.price}</p>
            </div>
            <div>
                <FoodForm onAddItem={getItemHandler} />
            </div>
        </li>
    );
}

export default Food;