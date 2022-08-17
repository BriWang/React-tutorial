import React from 'react';
import classes from './CartItem.module.css';

const CartItem = (props) => {
    
    return (
        <React.Fragment>
            <li className={classes['cart-item']}>
                <h2>{props.title}</h2>
                <div className={classes.wrapper}>
                    <div className={classes.summary}>
                        <span className={classes.price}>${props.price}</span>
                        <span className={classes.amount}>x{props.amount}</span>
                    </div>
                    <div className={classes.action}>
                        <button onClick={props.onRemove} >−</button>
                        <button onClick={props.onAdd} >+</button>
                    </div>
                </div>
            </li>
        </React.Fragment>
    );
}

export default CartItem;