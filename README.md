# React-tutorial
## Stage Three - Fragments, Portals, useRef() Hook

### Fragments

Understand the limitation of JSX: can only have one "root" element.
```
return (
    <div>
        <h2>Title</h2>
        <p>Content</p>
    </div>
);
```

This will lead to a potential issue: "<div> soup" - in large apps, you can easily end up with tons of <div>, which has no semantic meaning or structure to the page, but are only there because of the JSX limitation.

```
<div>
    <div>
        <div>
            <h2>Title</h2>
        </div>
    </div>
</div>
```

Therefore, you can use *<React.Fragment>* - an empty wrapper component that doesn't render any real HTML to the DOM, but fulfilled the JSX requirement.
```
return (
    <React.Fragment>
        <h2>Title</h2>
        <p>Content</p>
    </React.Fragment>
);
```
OR
```
return (
    <>
        <h2>Title</h2>
        <p>Content</p>
    </>
);
```
OR
```
import {Fragment} from "react";

return (
    <Fragment>
        <h2>Title</h2>
        <p>Content</p>
    </Fragment>
);
```
---------------------------------------------------------------------------------------------------------------------------------------------
### Portals

To render children into a DOM node that exists outside the DOM hierarchy of the parent component.

`ReactDOM.createPortal(child, container)`

First, add elements in the DOM tree.
```
<body>  // in /public/index.html
    <div id="backdrop-root"></div>
    <div id="modal-root"></div>
    <div id="root></div>
</body>
```

Then, in the component:
```
import ReactDOM from 'react-dom';

...
return (
    ...
    {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById('backdrop-root')
    )}
    ...
)
...
```

#### Useage

Overlay, dialogs, tooltips, hovercards, side menu ... (when a parent component has an overflow: hidden or z-index style, but you need the child to visually “break out” of its container.)

Without Portals:
image.png

With Portals:
image.png

---------------------------------------------------------------------------------------------------------------------------------------------
### useRef() Hook

useRef() is a way to access the DOM. 

`const refContainer = useRef(initialValue);`

#### Usage

Sometimes, you just want to read a value rather than change it.

For example, in the Form component, you don't need to update state for every kind of input with every keystroke when we only need them when click the submit button. Refs can help here.

useRef() is like a “box” that can hold a mutable value in its .current property.

Note that mutating the .current property *doesn’t cause a re-render*.
---------------------------------------------------------------------------------------------------------------------------------------------
## Practice Project - User List

### Key features 
#### Rendering list
#### Conditional Content
#### CSS Module

---------------------------------------------------------------------------------------------------------------------------------------------

