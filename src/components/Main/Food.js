import FoodForm from './FoodForm';
import classes from './Food.module.css';

const Food = (props) => {
    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.title}</h3>
                <p className={classes.description}>{props.description}</p>
                <p className={classes.price}>{props.price}</p>
            </div>
            <div>
                <FoodForm />
            </div>
        </li>
    );
}

export default Food;