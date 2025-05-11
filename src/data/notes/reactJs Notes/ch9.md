### Ch 9 - Context API, useContext hook

#### what is Context API?
- Context API is a feature in React that allows data to be passed through the component tree without having to pass props down manually at every level.

#### What is useContext?    
- The `useContext` hook is used to consume context values in functional components.
- It allows components to access context values without using a consumer component.
- The `useContext` hook takes a context object as an argument and returns the current context value.

#### Example of useContext Hook

In this example, we will create a simple React application that uses the Context API and the `useContext` hook to manage and consume a theme context.

**ThemeContext.js**

```jsx
import React, { createContext, useState } from 'react';

const ThemeContext = createContext();

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export { ThemeContext, ThemeProvider };
```

**App.js**

```jsx
import React from 'react';
import { ThemeProvider } from './ThemeContext';
import ThemedComponent from './ThemedComponent';

function App() {
    return (
        <ThemeProvider>
            <ThemedComponent />
        </ThemeProvider>
    );
}

export default App;
```

**ThemedComponent.js**

```jsx
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function ThemedComponent() {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
            <p>Current Theme: {theme}</p>
            <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Toggle Theme</button>
        </div>
    );
}

export default ThemedComponent;
```

In this example:
- `ThemeContext.js` defines the context and provides a `ThemeProvider` component to manage the theme state.
- `App.js` wraps the `ThemedComponent` with the `ThemeProvider` to provide the theme context.
- `ThemedComponent.js` consumes the theme context using the `useContext` hook and provides a button to toggle the theme.

This example demonstrates how to use the Context API and the `useContext` hook to manage and consume context values in a React application.

