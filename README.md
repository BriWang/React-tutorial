# React-tutorial
## Stage four - useEffect, useReducer

### Dive deep in useEffect() - Side Effect

Data fetching, setting up a subscription, and manually changing the DOM in React components are common examples of side effects.

(when you need to do some actions in response to other actions)

<img width="1092" alt="image" src="https://user-images.githubusercontent.com/38158251/184779736-d8b36179-15d1-4035-be80-30a9dab2fd97.png">


---------------------------------------------------------------------------------------------------------------------------------------------
### Rules of Adding dependencies

You should add "everything" you use in the effect function as a dependency - i.e. all state variables and functions you use in there.

**Except**
- DON'T add state updating functions, such as `setIsValid()`
- DON'T add "built-in" APIs or functions, such as `fetch()`, `localStorage`
- DON'T add variables or functions you might've defined OUTSIDE of your components


#### Example
```
import { useEffect, useState } from 'react';
 
let myTimer;
 
const MyComponent = (props) => {
  const [timerIsActive, setTimerIsActive] = useState(false);
 
  const { timerDuration } = props; // using destructuring to pull out specific props values
 
  useEffect(() => {
    if (!timerIsActive) {
      setTimerIsActive(true);
      myTimer = setTimeout(() => {
        setTimerIsActive(false);
      }, timerDuration);
    }
  }, [timerIsActive, timerDuration]);
};
```

- `timerIsActive` is **added** as a dependency because it's component state that may change when the component changes (e.g. because the state was updated)

- `timerDuration` is **added** as a dependency because it's a prop value of that component - so it may change if a parent component changes that value (causing this MyComponent component to re-render as well)

- `setTimerIsActive` is **NOT added** as a dependency because it's that exception: State updating functions could be added but don't have to be added since React guarantees that the functions themselves never change

- `myTimer` is **NOT added** as a dependency because it's not a component-internal variable (i.e. not some state or a prop value) - it's defined outside of the component and changing it (no matter where) wouldn't cause the component to be re-evaluated

- `setTimeout` is **NOT added** as a dependency because it's a built-in API (built-into the browser) - it's independent from React and your components, it doesn't change
---------------------------------------------------------------------------------------------------------------------------------------------
### useReducer

Generally, useReducer() is a replacement of useState(), only use it when you have complex states, especially when one state is relating to the other state, for example, isValidState is related to the userInputState.

<img width="1060" alt="image" src="https://user-images.githubusercontent.com/38158251/184804609-43d6e16e-1f69-4331-b553-4879d87c3933.png">

<img width="1099" alt="image" src="https://user-images.githubusercontent.com/38158251/184804873-7c3f5948-ba15-4132-aab9-3fa997fd4160.png">

---------------------------------------------------------------------------------------------------------------------------------------------

### General Rules of Hook

Only Call Hooks at the Top Level - Don’t call Hooks inside loops, conditions, or nested functions. 

Only Call Hooks from React Functions - Don’t call Hooks from regular JavaScript functions.

---------------------------------------------------------------------------------------------------------------------------------------------
## Practice Project - Header

In this code practice, we practice two Use Cases of useEffect().

### Key features 
#### useEffect() without cleanup
#### useEffect() with cleanup
#### useReducer()

---------------------------------------------------------------------------------------------------------------------------------------------

