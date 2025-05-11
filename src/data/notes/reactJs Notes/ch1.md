
### Ch 1 - React Setup, React DOM, Project Structure

#### Why React?
- Suitable for both single-page and multi-page applications.

#### What is React?
- A component-based JavaScript library for building user interfaces.
- React is declarative, efficient, and flexible.

#### What are Components?
- Building blocks of any React application.
- Self-contained modules that render some output.
- Reusable and composable to form complex UIs.
- Can be nested within other components.

#### What is React DOM?
- A library used to render React components in the DOM.
- Manages updating the DOM to match React components.

#### React Project Structure
- `public` folder
    - Contains static assets and the main HTML file (`index.html`).
    - Includes `favicon.ico`, `manifest.json`.
- `src` folder
    - Contains the source code.
    - `index.js` renders the React application.
    - `App.js` is the root component.
    - `App.css` contains styles for `App`.
    - `logo.svg` is used in `App`.
- `node_modules` folder
    - Contains dependencies and packages.
- `package.json` file
    - Metadata and configuration for the project.
    - Includes project info, dependencies, scripts.
- `package-lock.json` file
    - Ensures consistent dependency versions.
- `README.md` file
    - Instructions on running and using the application.
- `.gitignore` file
    - Specifies files/directories to ignore in Git.
- `vite.config.js` file (if using Vite)
    - Configuration settings for Vite.

#### What is Node?
- An open-source, cross-platform, back-end JavaScript runtime environment.

#### What is NPM?
- A package manager for JavaScript, default for Node.js.

#### What is a Toolchain?
- A set of programming tools used together for software development.

#### Getting Started with React Project Setup
- Create a new React project using create-react-app:
    - `npx create-react-app my-app`
- Navigate into the project directory:
    - `cd my-app`
- Start the development server:
    - `npm start`

#### What is Vite?
- A build tool for faster and more efficient development.
- Leverages modern JavaScript features for speed.

#### React Setup with Vite
- Create a new React project using Vite:
    - `npm init @vitejs/app my-react-app --template react`
- Navigate into the project directory:
    - `cd my-react-app`
- Start the development server:
    - `npm run dev`

#### React DOM Root Element
- `const root = ReactDOM.createRoot(document.getElementById('root'));`
    - Creates a root element to render the React application.
    - Manages the React component tree.
