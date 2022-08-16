import React from 'react';
import classes from './CartItem.module.css';

const CartItem = (props) => {
    return (
        <React.Fragment>
            <li className={classes['cart-item']}>
                <h2>Sushi</h2>
                <div className={classes.wrapper}>
                    <div className={classes.summary}>
                        <span className={classes.price}>$22.9</span>
                        <span className={classes.amount}>x2</span>
                    </div>
                    <div className={classes.action}>
                        <button>−</button>
                        <button>+</button>
                    </div>
                </div>
            </li>
        </React.Fragment>
    );
}

export default CartItem;