import React from 'react';
import ReactDOM from 'react-dom';
import CartItem from './CartItem';
import classes from './Cart.module.css';

const BackdropModal = (props) => {
    return <div className={classes.backdrop} onClick={props.onCancel} />;
}

const CartModal = (props) => {
    return (
        <div className={classes.modal}>
            <ul>
                <CartItem />
                <CartItem />
            </ul>
            <div className={classes.total} >
                <span>Total amount</span>
                <span>$xx</span>
            </div>
            <div className={classes.actions} >
                <button className={classes['button--alt']} onClick={props.onCancel} >Close</button>
                <button>Order</button>
            </div>
        </div>
    )
}

const Cart = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <BackdropModal onCancel={props.onCancel} />,
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <CartModal onCancel={props.onCancel} />,
                document.getElementById('modal-root')
            )}
        </React.Fragment>
    );
}

export default Cart;