import React from 'react';
import ReactDOM from 'react-dom';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import OrderContext from '../../store/order-context';
import { useContext } from 'react';


const BackdropModal = (props) => {
    return <div className={classes.backdrop} onClick={props.onCancel} />;
}

const CartModal = (props) => {

    const ctx = useContext(OrderContext);
    const hasItem = ctx.items.length > 0;
    
    const addButtonHandler = (item) => {
        ctx.addItem({ ...item, amount: 1 });    //only add amount
    }

    const removeButtonHandler = (id) => {
        ctx.removeItem(id);
    }

    return (
        <div className={classes.modal}>
            <ul>
                {ctx.items.map((item) => {
                    return (
                        <CartItem
                            key={item.id}
                            title={item.title}
                            price={item.price}
                            amount={item.amount}
                            onAdd={addButtonHandler.bind(null, item)}   //use bind to preconfigure function, to ensure they do receive the props
                            onRemove={removeButtonHandler.bind(null, item.id)}
                        />
                    );
                })}
            </ul>
            <div className={classes.total} >
                <span>Total amount</span>
                <span>${ctx.totalAmount.toFixed(2)}</span>
            </div>
            <div className={classes.actions} >
                <button className={classes['button--alt']} onClick={props.onCancel} >Close</button>
                {hasItem && <button>Order</button>}
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
                <CartModal
                    onCancel={props.onCancel}
                />,
                document.getElementById('modal-root')
            )}
        </React.Fragment>
    );
}

export default Cart;