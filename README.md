# React-tutorial
## Stage One - State, Component, Render


### Render - Class Component

https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

![image](https://user-images.githubusercontent.com/38158251/182989921-421e38c7-fc65-416e-8d13-987c13f1e05a.png)

ComponentDidMount - normally put API here to fetch data, so that it happens ASAP when this component being rendered.


### Render - Functional Component

Functional component DONOT have life cycles, it’s just like a JavaScript function that will run from top line to the bottom.

When re-render, the entire functional component will be rendering again, while class component only re-render the code inside render().

---------------------------------------------------------------------------------------------------------------------------------------------

### setState() - commonly used in Class components

 `this.setState({ name: 'Andrei' });`                           

setState use Shallow Merge, which means only update the value of the specific key in the object, anything else has been kept in the same way.

#### When to use callback - case 1

setState runs asynchronously, which means after calling setState the this.state variable is not immediately changed. so if you want to perform an action immediately after setting state on a state variable and then return a result, a callback will be useful

 ```
this.setState(                                                 
    () => { },  // updater function                             
    () => { }   // callback function, which runs only after the 
                   updater function has completed               
 );                                                             
```

For example:
```
 this.setState(                                                 
    { name: 'Andrei' },                                                          
    () => {                                                     
        console.log(this.state);                                
    }                                                           
 );
 ```                                                           
#### When to use callback - case 2

A case may arise when you need to make an API call based on a particular state change, if you do that in the render method, it will be called on every render onState change or because some Prop passed down to the Child Component changed.

In this case you would want to use a setState callback to pass the updated state value to the API call

```
....
changeTitle: function (event) {
  this.setState({ title: event.target.value }, () => this.APICallFunction());
},
APICallFunction: function () {
  // Call API with the updated value
}
....
```
---------------------------------------------------------------------------------------------------------------------------------------------
### Basic Hooks 

Let you use state and other React features without writing a class.

### Basic Hooks - useState()

why we need it
React render components once. Then, if variables inside components changed, it won’t re-render again. Thus, we need useState to update the variable and let React know that it needs to re-render this specific component.

 `const [count, setCount] = useState(0);`                            

0 is the default value, only validate in the initial render. When re-render, count will be the latest setCount value.

You can set one or multiple useState in the component.

Remember to use (prevState): React schedule state updates, so they don’t update immediately. prevState guarantee that React will always grab the latest state when there are multiple state updates in the schedule, which is a safer way to insure that it always operate on the latest state.

```
const titleChangeHandler = (event) => {
  setUserInput((prevState) => {
    return {...prevState, setTitle: event.target.value};
  });
 }
```

### Basic Hooks - useEffect() 

By using this Hook, you tell React that your component needs to do something **after render**. React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates.

#### Use Case 1 - to avoid infinite loop

**Side Effects** - anything else that happened outside the normal components evaluation, most of time involving data outside the components. For example, HTTP requests.

![image](https://user-images.githubusercontent.com/38158251/182990049-f5de04c1-0e97-4ce4-817f-6a68b3207070.png)

**Three scenarios**
```
useEffect(() => {
    console.log('TEST!');
  });     // Run at initial render, then run after every render
```
```
useEffect(() => {
    console.log('TEST!');
  }, []);   // Run at initial render
```
```
useEffect(() => {
    console.log('TEST!');
  }, [data]);    // Run at initial render, then run every render if data changes
```

#### Question 1:
Take a look at the following code. After running it, how many console logs would you expect to see, and when would you see them?

```
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
 
const App = () => {
  useEffect(() => {
    console.log('TEST!');
  }, []);
 
  return <div>This is a test component</div>;
};
 
ReactDOM.render(<App />, document.querySelector('#root'));

```
#### Answer:
I would see one log statement of 'TEST!', and it would show up right after the component is rendered.

#### Question 2:
How many time would you expect to see the log statement after a user clicks on the button three times?
```
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
 
const App = () => {
  const [count, setCount] = useState(0);
 
  useEffect(() => {
    console.log('TEST!');
  }, [count]);
 
  const onClick = () => {
    setCount(count + 1);
  };
 
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={onClick}>Click me!</button>
    </div>
  );
};
 
ReactDOM.render(<App />, document.querySelector('#root'));
```
#### Answer:
I would expect to see four log statements.

#### Use Case 2 - count

Placing useEffect inside the component lets us access the count state variable (or any props) right from the effect. We don’t need a special API to read it — it’s already in the function scope.

```
function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
}
```
---------------------------------------------------------------------------------------------------------------------------------------------

<img width="727" alt="image" src="https://user-images.githubusercontent.com/38158251/184531362-00d3cf96-e7aa-46f7-bd2c-a0586dfd1073.png">

---------------------------------------------------------------------------------------------------------------------------------------------

## Practice Project - Expense Tracker

### Key features 
#### Two-way binding
#### Lift State Up
#### Rendering list
#### Conditional Content
#### Dynamic styles

<img width="1000" alt="image" src="https://user-images.githubusercontent.com/38158251/184537244-306c3e39-30fe-4ef9-9840-1532658c99b0.png">

---------------------------------------------------------------------------------------------------------------------------------------------

