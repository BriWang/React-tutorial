# React-tutorial
## Stage Five - Building a food order app

In this stage, we use the concepts learned earlier to build a simple food order app. We'll use CSS Module to styling the components.

---------------------------------------------------------------------------------------------------------------------------------------------

## Practice Project - Food Order app

#### Step One

Build Dumy UI according to the design

#### Step Two

Design your data flow and build context if needed.

```
import React, { useState } from 'react';

//create default context object
const OrderContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => { },
    removeItem: (id) => { }
})

export default OrderContext;


// create customised Provider
export const OrderContextProvider = (props) => {
    
    const addItemHandler = (item) => {

    }

    const removeItemHandler = (id) => {

    }

    const OrderCtx = {
        items: [],
        totalAmount: 0,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }

    return (
        <OrderContext.Provider value={OrderCtx} >
            {props.children}
        </OrderContext.Provider>
    );
}
```

#### Step Three

Add useReducer(), since we are dealing with a bit more complex states here(check if exists before adding or check if need to remove item).

```
// create default Reducer state
const defaultReducer = {
	item: [],
	totalAmount: 0,
};

// create Reducer Function
const orderReducer = (state, action) => {
	//get the latest state of reducer, action is dispatched by you later in the code
    ... some function ...
	return defaultReducer; //return a new state
};
```

Then, call useReducer() and define disptachAction inside Provider
```
const [orderState, dispatchAction] = useReducer(orderReducer, defaultReducer);

const addItemHandler = (item) => {
    //normally it's some property inside an obj that identify the action inside your reducer function, so that inside the reducer function, you can run specific code under specific action.
    dispatchAction({ type: 'ADD', item: item });
};

const removeItemHandler = (id) => {
    dispatchAction({ type: 'Remove', id: id });
};

```

#### Step four

Add logics to the functions defined above, starts from simple to complex.