### Ch 2 - Component, Props, JSX

#### What is a Component?
- Self-contained module that renders output.
- Can be functional or class-based.
- Reusable and composable.
- Can have props and state.
- Supports lifecycle methods and event handlers.
- Can be styled and optimized for performance.

#### What are Props?
- Short for properties, used to pass data from parent to child components.
- Read-only and cannot be modified by child components.
- Passed as attributes in JSX.
- Can be of any data type.
- Used to customize behavior and appearance.
- Supports event handlers, callbacks, and dynamic data.
- Enables reusable and composable components.
- Can use default values, type checking, and destructuring.
- Supports children props for nested components.

**Example of Props**

```jsx
// ParentComponent.js
import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
    const message = "Hello from Parent Component!";
    return (
        <div>
            <h1>Parent Component</h1>
            <ChildComponent message={message} />
        </div>
    );
}

export default ParentComponent;
```

```jsx
// ChildComponent.js
import React from 'react';

function ChildComponent({ message }) {
    return (
        <div>
            <h2>Child Component</h2>
            <p>{message}</p>
        </div>
    );
}

export default ChildComponent;
```

In this example:
- `ParentComponent` passes a `message` prop to `ChildComponent`.
- `ChildComponent` receives the `message` prop and displays it inside a paragraph element.

#### What is JSX?
- JSX stands for JavaScript XML.
- Allows writing HTML-like syntax in JavaScript.
- Transformed into JavaScript using Babel.
- Used to describe UI structure.
- Can contain JavaScript expressions inside `{}`.
- Supports attributes, event handlers, and nesting.

#### What is a Fragment?
- Allows grouping multiple elements without adding extra nodes to the DOM.
- Helps avoid unnecessary wrapper elements.
- Example usage: `<></>` or `<React.Fragment></React.Fragment>`.
- Can accept a `key` attribute when rendering lists of items.
- Improves performance by reducing the number of DOM nodes.

```jsx
return (
    <>
        <ChildComponent />
        <AnotherChildComponent />
    </>
);
```
