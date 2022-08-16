import React from 'react';
import ReactDOM from 'react-dom';
import CartItem from './CartItem';

const Cart = () => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <CartItem />,
                document.getElementById('modal-root')
            )}
        </React.Fragment>
    );
}

export default Cart;