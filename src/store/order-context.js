import React, { useReducer } from "react";

//create default context object
const OrderContext = React.createContext({
	items: [],
	totalAmount: 0,
	addItem: (item) => {},
	removeItem: (id) => {},
});

export default OrderContext;




// create default Reducer state
const defaultReducer = {
	items: [],
	totalAmount: 0,
};

// create Reducer Function
const orderReducer = (state, action) => {
	//get the latest state of reducer, action is dispatched by you later in the code
    if (action.type === 'Add') {

        //check if exist
        const existItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        )
        const existItem = state.items[existItemIndex];
        
        let updateItem;
        if (existItem) {
            const tmpItem = { //update amount only
                ...existItem,
                amount: existItem.amount + action.item.amount
            };
            updateItem = [...state.items];  //copy exiting arr to keep the old arr immutable
            updateItem[existItemIndex] = tmpItem; //replace the old existItem
        } else {
            updateItem = state.items.concat(action.item);   //concat() return a new array obj, push() return the same obj
        }

        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        
        return {
            items: updateItem,
            totalAmount: updatedTotalAmount
        }
    }
    if (action.type === 'Remove') {

        //check if exist
        const existItemIndex = state.items.findIndex(
            (item) => item.id === action.id
        )
        const existItem = state.items[existItemIndex];
        
        let updateItem;
        if (existItem.amount === 1) {
            updateItem = state.items.filter((m) => m.id !== action.id);
        } else {
            const tmpItem = {
                ...existItem,
                amount: existItem.amount - 1
            }
            updateItem = [...state.items];
            updateItem[existItemIndex] = tmpItem;
        }

        const updatedTotalAmount = state.totalAmount - existItem.price;

        return {
            items: updateItem,
            totalAmount: updatedTotalAmount
        }
    }
	return defaultReducer; //return a new state
};

// create customised Provider
export const OrderContextProvider = (props) => {

    const [orderState, dispatchAction] = useReducer(orderReducer, defaultReducer);

    const addItemHandler = (item) => {

        //normally it's some property inside an obj that identify the action inside your reducer function, so that inside the reducer function, you can run specific code under specific action.
        dispatchAction({ type: 'Add', item: item });
    
    };

    const removeItemHandler = (id) => {
        dispatchAction({ type: 'Remove', id: id });
    };

	const OrderCtx = {
		items: orderState.items,
		totalAmount: orderState.totalAmount,
		addItem: addItemHandler,
		removeItem: removeItemHandler,
	};
    
	return (
		<OrderContext.Provider value={OrderCtx}>
			{props.children}
		</OrderContext.Provider>
	);
};


