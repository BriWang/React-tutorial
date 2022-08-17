import React, { useState, useContext } from 'react';
import Header from './components/Header/Header';
import FoodList from './components/Main/FoodList';
import Cart from './components/Header/Cart';
import OrderContext from './store/order-context';

function App() {
	const DUMMY_MEALS = [
		{
			id: 'm1',
			name: 'Sushi',
			description: 'Finest fish and veggies',
			price: 22.99,
		},
		{
			id: 'm2',
			name: 'Schnitzel',
			description: 'A german specialty!',
			price: 16.5,
		},
		{
			id: 'm3',
			name: 'Barbecue Burger',
			description: 'American, raw, meaty',
			price: 12.99,
		},
		{
			id: 'm4',
			name: 'Green Bowl',
			description: 'Healthy...and green...',
			price: 18.99,
		},
	];

	const [isCartShow, setIsCartShow] = useState(false);

	const cartClickHandler =() => {
		setIsCartShow(true);
	}

	const cartCancelHandler =() => {
		setIsCartShow(false);
	}

	const ctx = useContext(OrderContext);

	return (
		<React.Fragment>
			{isCartShow && <Cart onCancel={cartCancelHandler} items={ctx.item} />}
			<Header onClick={cartClickHandler} />
			<main>
				<section className='welcome-text'>
					<h2>Delicious Food, Delivered To You</h2>
					<p>
						Choose your favorite meal from our broad selection of available meals
						and enjoy a delicious lunch or dinner at home.
					</p>
					<p>
						All our meals are cooked with high-quality ingredients, just-in-time and
						of course by experienced chefs!
					</p>
				</section>
				<FoodList meals={DUMMY_MEALS} onAddItem={ctx.getItem} />
			</main>
		</React.Fragment>
	);
}

export default App;
