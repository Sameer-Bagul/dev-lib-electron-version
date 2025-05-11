### Ch 6 - Forms, Event Objects, Lifting State Up

#### What are Forms?
- Forms are used to collect user input and submit data to a server.
- In React, forms are created using HTML form elements like `input`, `textarea`, `select`, and `button`.
- Form elements can be controlled or uncontrolled components.

#### Controlled vs. Uncontrolled Components
- **Controlled Components**: Form elements whose value is controlled by React state.
    - The value of the form element is set by the state, and any changes to the input are handled by updating the state.
    - Provides a single source of truth for form data, making it easier to manage and validate.
    - Example:

        ```jsx
        import React, { useState } from 'react';

        function ControlledForm() {
            const [inputValue, setInputValue] = useState('');

            const handleChange = (event) => {
                setInputValue(event.target.value);
            };

            return (
                <form>
                    <label>
                        Name:
                        <input type="text" value={inputValue} onChange={handleChange} />
                    </label>
                </form>
            );
        }

        export default ControlledForm;
        ```

- **Uncontrolled Components**: Form elements whose value is managed by the DOM.
    - The value of the form element is accessed using refs, and changes are not directly tied to the component state.
    - Useful for integrating with non-React code or libraries.
    - Example:
        ```jsx
        import React, { useRef } from 'react';

        function UncontrolledForm() {
            const inputRef = useRef(null);

            const handleSubmit = (event) => {
                event.preventDefault(); // Prevents the default form submission behavior
                alert(`Input Value: ${inputRef.current.value}`);
            };

            return (
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input type="text" ref={inputRef} />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            );
        }

        export default UncontrolledForm;
        ```

#### Handling Form Data
- **Capturing User Input**: Use the `onChange` event to capture user input in form elements.
    - Update the state with the input value to reflect changes.
    - Example:
        ```jsx
        import React, { useState } from 'react';

        function Form() {
            const [name, setName] = useState('');

            const handleChange = (event) => {
                setName(event.target.value);
            };

            return (
                <form>
                    <label>
                        Name:
                        <input type="text" value={name} onChange={handleChange} />
                    </label>
                </form>
            );
        }

        export default Form;
        ```

- **Handling Form Submission**: Use the `onSubmit` event to handle form submission and prevent the default behavior.
    - Example:
        ```jsx
        import React, { useState } from 'react';

        function Form() {
            const [name, setName] = useState('');

            const handleChange = (event) => {
                setName(event.target.value);
            };

            const handleSubmit = (event) => {
                event.preventDefault(); // Prevents the default form submission behavior
                alert(`Submitted Name: ${name}`);
            };

            return (
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={name} onChange={handleChange} />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            );
        }

        export default Form;
        ```

#### Lifting State Up
- **Lifting State Up**: When multiple components need to share the same state, lift the state up to their closest common ancestor.
    - This ensures that the state is managed in a single place and can be passed down as props to child components.
    - Example:
        ```jsx
        import React, { useState } from 'react';

        function ParentComponent() {
            const [name, setName] = useState('');

            return (
                <div>
                    <Form name={name} setName={setName} />
                    <Display name={name} />
                </div>
            );
        }

        function Form({ name, setName }) {
            const handleChange = (event) => {
                setName(event.target.value);
            };

            return (
                <form>
                    <label>
                        Name:
                        <input type="text" value={name} onChange={handleChange} />
                    </label>
                </form>
            );
        }

        function Display({ name }) {
            return <p>Entered Name: {name}</p>;
        }

        export default ParentComponent;
        ```

#### Event Objects
- **Synthetic Event Object**: React's cross-browser wrapper around the native event object.
    - Provides consistent properties and methods across different browsers.
    - Example:
        ```jsx
        function Form() {
            const handleChange = (event) => {
                console.log('Input Value:', event.target.value);
            };

            return (
                <form>
                    <label>
                        Name:
                        <input type="text" onChange={handleChange} />
                    </label>
                </form>
            );
        }

        export default Form;
        ```

- **Common Event Properties**:
    - `event.target`: The element that triggered the event.
    - `event.type`: The type of event (e.g., 'click', 'submit').
    - `event.preventDefault()`: Prevents the default action of the event.
    - `event.stopPropagation()`: Stops the event from propagating to parent elements.

By understanding and implementing these concepts, you can effectively manage forms in React, capture user input, handle form submissions, and share state between components.

