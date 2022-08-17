import Food from './Food';
import classes from './FoodList.module.css';

const FoodList = (props) => {
    
    return (
        <ul className={classes.ul}>
            {props.meals.map((m) => {
                return (
                    <Food
                        key={m.id}
                        id={m.id}
                        title={m.name}
                        description={m.description}
                        price={m.price}
                    />
                );
            })}
        </ul>
    );
}

export default FoodList;