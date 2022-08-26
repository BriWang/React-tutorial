# React learning materials

This repository contains my notes and code practices when learning React

## How to use

The notes and code are organized in multiple branches where every branch represents a stage of learning period.

For example, the branch stage-one holds all notes and code practices for the first stage of learning period.

You can switch branches via the branch dropdown above the directory explorer.


## Outline

### [Stage One](https://github.com/BriWang/React-tutorial/tree/1.stage-one)

Learn about state, component, basic hooks - useState(), useEffect().

Understand Life Cycle and Render mechanism

#### Code Practice - Expense Tracker

### [Stage Two](https://github.com/BriWang/React-tutorial/tree/2.stage-two)

Learn about Conditional Content(validation) and styling the components(CSS Module)

#### Code Practice - User List

### [Stage Three](https://github.com/BriWang/React-tutorial/tree/3.stage-three)

Learn about Fragments, Portals, useRef() Hook

#### Code Practice - User List

### [Stage Four](https://github.com/BriWang/React-tutorial/tree/4.stage-four)

More about useEffect, useReducer

### [Stage Five](https://github.com/BriWang/React-tutorial/tree/5.stage-five) 

#### Code Practice - Food Order 

### Stage Six

Optimization Techniques - useMemo, useCallback

** Understand how React works

<img width="768" alt="image" src="https://user-images.githubusercontent.com/38158251/186793799-f99515c7-02f4-4863-8b41-b64894e0b257.png">

*** React.memo()

React.memo is a higher order component. (a higher-order component is a function that takes a component and returns a new component.)

React.memo only checks for prop changes.

React.memo prevents a component from re-rendering if the props (or values within it) have not changed.

```
function MyComponent = (props) => {
  ...
}

export default React.memo(MyComponent);
```

However, the component will re-render again when it accepts a function as its props. Since it's a new function generated with every execution. 

Thus, introducint useCallback()

*** useCallback()

useCallback stores functions, so it can be re-used when the component is executed.

```
function MyComponent = (props) => {
  ...
  const addItemHandler = useCallback(
    () => {
      ...
    }, []    // dependency rule is as same as useEffect()
  );

export default MyComponent;
```

### Stage Seven

Sending HTTP Requests

### Stage Eight

Building Custom React Hooks

### Stage Nine

Working with more complex formm and validation

### Stage Ten

A more complex Food Order app


## Running the attached code

To run my code, navigate into a specific code practice folder via the cd command in your command prompt or terminal first.

Then run ```npm install``` to install all required dependencies (this will create a /node_modules folder).

Last, run ```npm start```

---------------------------------------------------------------------------------------------------------------------------------------------


### Interview Questions

https://www.simplilearn.com/tutorials/reactjs-tutorial/reactjs-interview-questions#reactjs_interview_questions_on_components

https://github.com/BriWang/reactjs-interview-questions
