### Ch 4 - Events, Event Handler, Synthetic Event Object

#### What are Events?
- Actions that occur in the browser, such as clicks, keypresses, form submissions, and mouse movements.
- Events are used to trigger specific functionality in response to user interactions.

#### What is an Event Handler?
- A function that is executed in response to an event.
- Event handlers are used to define what should happen when an event occurs.
- Can be defined inline or as separate functions.

#### What is a Synthetic Event Object?
- A cross-browser wrapper around the native event.
- Provides consistent properties and methods across different browsers.
- Synthetic events are used by React to ensure compatibility and performance.

#### Handling Events in React
- Use camelCase event names like `onClick`, `onSubmit`, `onChange`.
- Pass event handlers as props to components.
- Access event properties like `target`, `value`, `checked`.

**Example of Handling Events**

```jsx
function Button() {
    function handleClick() {
        alert('Button clicked!');
    }

    return (
        <button onClick={handleClick}>Click me</button>
    );
}
```

#### Common Event Types and Handlers
- `onClick`: Triggered when an element is clicked.
- `onChange`: Triggered when the value of an input element changes.
- `onSubmit`: Triggered when a form is submitted.
- `onKeyPress`: Triggered when a key is pressed.
- `onMouseOver`: Triggered when the mouse pointer is over an element.
- `onFocus`: Triggered when an element gains focus.
- `onBlur`: Triggered when an element loses focus.

**Example of Multiple Event Handlers**

```jsx
function Form() {
    function handleSubmit(event) {
        event.preventDefault();
        alert('Form submitted!');
    }

    function handleChange(event) {
        console.log('Input value:', event.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} />
            <button type="submit">Submit</button>
        </form>
    );
}
```

#### Advanced Event Handling
- Use event delegation to handle events efficiently.
- Use `event.persist()` to retain the event object in asynchronous code.
- Combine multiple event handlers for complex interactions.

**Example of Advanced Event Handling**

```jsx
function App() {
    function handleClick(event) {
        console.log('Button clicked:', event.target);
    }

    function handleMouseOver(event) {
        console.log('Mouse over:', event.target);
    }

    return (
        <div>
            <button onClick={handleClick} onMouseOver={handleMouseOver}>
                Hover and Click me
            </button>
        </div>
    );
}
```

#### Synthetic Event Object Properties
- `event.target`: The element that triggered the event.
- `event.type`: The type of event (e.g., 'click', 'submit').
- `event.preventDefault()`: Prevents the default action of the event.
- `event.stopPropagation()`: Stops the event from propagating to parent elements.

**Example of Using Synthetic Event Object**

```jsx
function InputField() {
    function handleFocus(event) {
        console.log('Input focused:', event.target);
    }

    function handleBlur(event) {
        console.log('Input blurred:', event.target);
    }

    return (
        <input type="text" onFocus={handleFocus} onBlur={handleBlur} />
    );
}
```

#### Event Handling Best Practices
- Keep event handlers small and focused.
- Use descriptive names for event handler functions.
- Avoid inline event handlers for better readability and maintainability.
- Use `event.persist()` when working with asynchronous code to avoid losing the event object.

**Example of Best Practices**

```jsx
function App() {
    function handleButtonClick(event) {
        event.persist();
        setTimeout(() => {
            console.log('Button clicked:', event.target);
        }, 1000);
    }

    return (
        <div>
            <button onClick={handleButtonClick}>Click me</button>
        </div>
    );
}
```

- This example demonstrates how to persist the event object for use in asynchronous code.
