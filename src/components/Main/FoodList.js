import Food from './Food';

const FoodList = (props) => {
    return (
        <ul>
            {props.meals.map((m) => {
                return (
                    <Food
                        key={m.id}
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