### Ch 5 - State, useState hook

#### What is State?
- State is a built-in object in React that allows components to store and manage data.
- State is mutable and can change over time, triggering re-renders of the component.
- Each component can have its own state, managed using the `useState` hook in functional components or `this.state` in class components.

**Example of State in a Functional Component**

```jsx
import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default Counter;
```

#### What are Hooks?
- Hooks are functions that let you use state and other React features in functional components.
- Introduced in React 16.8 to allow stateful logic in functional components.
- Common hooks include `useState`, `useEffect`, `useContext`, `useReducer`, and more.

**Example of Using Hooks**

```jsx
import React, { useState, useEffect } from 'react';

function Timer() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return <div>Seconds: {seconds}</div>;
}

export default Timer;
```

#### What is useState?
- `useState` is a hook that allows you to add state to functional components.
- It returns an array with two elements: the current state value and a function to update it.
- The initial state value is passed as an argument to `useState`.

**Example of useState Hook**

```jsx
import React, { useState } from 'react';

function Toggle() {
    const [isOn, setIsOn] = useState(false);

    return (
        <div>
            <p>{isOn ? 'ON' : 'OFF'}</p>
            <button onClick={() => setIsOn(!isOn)}>Toggle</button>
        </div>
    );
}

export default Toggle;
```

#### What is State Management?
- State management refers to the practice of managing the state of an application.
- In React, state management can be done using local component state, context API, or state management libraries like Redux, MobX, or Zustand.
- Effective state management ensures that the application state is predictable, maintainable, and scalable.

**Example of State Management with Context API**

```jsx
import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

function ThemedComponent() {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
            <p>Current Theme: {theme}</p>
            <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Toggle Theme</button>
        </div>
    );
}

function App() {
    return (
        <ThemeProvider>
            <ThemedComponent />
        </ThemeProvider>
    );
}

export default App;
```

