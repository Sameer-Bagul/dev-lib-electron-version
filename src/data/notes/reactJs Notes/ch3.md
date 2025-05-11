
### Ch 3 - Conditional Rendering, Lists and Keys

#### Conditional Rendering
- Render different components or elements based on conditions.
- Use JavaScript conditional statements like `if`, `else`, and ternary operators.
- Common techniques:
    - Using `if` statements.
    - Using ternary operators.
    - Using logical `&&` operator.

**Example of Conditional Rendering**

```jsx
function Greeting({ isLoggedIn }) {
    if (isLoggedIn) {
        return <h1>Welcome back!</h1>;
    } else {
        return <h1>Please sign up.</h1>;
    }
}
```

```jsx
function App() {
    const isLoggedIn = true;
    return (
        <div>
            <Greeting isLoggedIn={isLoggedIn} />
        </div>
    );
}
```
#### Ternary Operators for Conditional Rendering
- Ternary operators provide a concise way to perform conditional rendering in React.
- Syntax: `condition ? trueExpression : falseExpression`
- Useful for inline conditional rendering within JSX.

**Example of Ternary Operator for Conditional Rendering**

```jsx
function UserGreeting({ isLoggedIn }) {
    return (
        <div>
            {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign up.</h1>}
        </div>
    );
}

function App() {
    const isLoggedIn = true;
    return (
        <div>
            <UserGreeting isLoggedIn={isLoggedIn} />
        </div>
    );
}
```

- In this example, the `UserGreeting` component uses a ternary operator to render different messages based on the `isLoggedIn` prop.
- If `isLoggedIn` is `true`, it displays "Welcome back!"; otherwise, it displays "Please sign up."
- Ternary operators help keep the code concise and readable.

#### Lists and Keys
- Use the `map()` function to iterate over an array and return a list of elements.
- Each element should have a unique `key` prop.

**Example of Mapping Array Data**

```jsx
function NumberList({ numbers }) {
    const listItems = numbers.map((number) =>
        <li key={number.toString()}>{number}</li>
    );
    return (
        <ul>{listItems}</ul>
    );
}
```

```jsx
function App() {
    const numbers = [1, 2, 3, 4, 5];
    return (
        <div>
            <NumberList numbers={numbers} />
        </div>
    );
}
```

#### Keys
- Help React identify which items in the list are changed, added, or removed.
- Should be given to elements inside the array for stable identity.
- Best to use a unique string identifier.

**Example of Using Keys**

```jsx
const todoItems = todos.map((todo) =>
    <li key={todo.id}>
        {todo.text}
    </li>
);
```

- Avoid using indexes as keys if the order of items may change.

#### Example of Conditional Rendering with Lists

```jsx
function TodoList({ todos }) {
    return (
        <ul>
            {todos.length > 0 ? (
                todos.map((todo) => <li key={todo.id}>{todo.text}</li>)
            ) : (
                <li>No todos left</li>
            )}
        </ul>
    );
}
```

```jsx
function App() {
    const todos = [
        { id: 1, text: 'Learn React' },
        { id: 2, text: 'Build a project' },
        { id: 3, text: 'Deploy the app' }
    ];
    return (
        <div>
            <TodoList todos={todos} />
        </div>
    );
}
```

- This example demonstrates how to conditionally render a list of todos or a message if there are no todos left.
