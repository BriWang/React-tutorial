const CartItem = () => {
    return (
        <li>
            <div>
                <h3>title</h3>
                <p>price</p>
            </div>
            <div>
                <input />
                <button>-</button>
                <button>+</button>
            </div>
            <div>
                <span>Total amount</span>
                <span>$xx</span>
            </div>
            <div>
                <button>Cancel</button>
                <button>Order</button>
            </div>
        </li>
    );
}

export default CartItem;