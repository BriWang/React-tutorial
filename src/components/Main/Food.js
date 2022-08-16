import FoodForm from './FoodForm';
import classes from './Food.module.css';

const Food = (props) => {
    return (
        <li>
            <div>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <p>{props.price}</p>
            </div>
            <div>
                <FoodForm />
            </div>
        </li>
    );
}

export default Food;