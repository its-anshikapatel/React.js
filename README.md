## 1. Which file runs first in a React project?

**Answer:**  
In a typical React project (using CRA):

- `index.html` is the HTML skeleton that loads first.
- `src/index.js` renders `<App />` into the root div.
- `App.js` contains main UI components.

**Real-world example:**  
Adding Google Analytics tracking or a favicon: you configure it in `index.html`. Initial app rendering logic is in `index.js`.

---

## 2. What is the use of `package-lock.json`?

**Answer:**

- Locks exact versions of dependencies and sub-dependencies.
- Ensures all developers get the **same versions**.
- Prevents “it works on my machine” issues.

**Real-world example:**  
React 18.2.0 vs 18.3.0 could break UI. `package-lock.json` avoids this.

---

## 3. Difference between `dependencies` and `devDependencies`

| Feature | Dependencies           | DevDependencies        |
| ------- | ---------------------- | ---------------------- |
| Usage   | Required in production | Only for development   |
| Example | React, Redux, Axios    | ESLint, Babel, Webpack |

---

## 4. Difference between `public` and `src` folders

- `public/`: Static files accessible via URL
- `src/`: React code and components, compiled by Webpack

**Example:**

- Logo in `public/` → `<img src="/logo.png" />`
- Logo in `src/` → `import logo from './logo.png'; <img src={logo} />`
---
## 5. Use of `.gitignore` in React

- Tells Git which files/folders to ignore:
  - `node_modules/`, `.env`, `build/`

**Example:**  
`.env` files with API keys shouldn’t be pushed.

---

## 6. `npm start` vs `npm run build`

| Command         | Purpose                            |
| --------------- | ---------------------------------- |
| `npm start`     | Development server with hot reload |
| `npm run build` | Optimized production build         |

--- 
## 7. Role of `index.js`
**Answer:**

- Entry point of the React app.
- Renders `<App />` into `root` div.

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

## 8. What is React? Why is it used?

**Answer:**
React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and efficiently update the DOM using the Virtual DOM.

**Real-world usage:**  

- Instagram uses React to render feeds and stories efficiently.

- Your personal portfolio built with React updates sections without refreshing the whole page.


**Example:**

function App() {
  return` <h1> Hello React!</h1>;`
}


---

## 9. What is the Virtual DOM and how does it work?

**Answer:**
The Virtual DOM is a lightweight in-memory representation of the real DOM. React compares the new and old virtual DOM (diffing) and updates only the changed elements in the real DOM (reconciliation).

**Real-world usage:**  
When you like a post on Facebook, only the like count updates without a full page reload.

---

## 10. What are Components in React?

**Answer:**
- Components are independent, reusable pieces of UI.
- Functional components: Use hooks, simpler, preferred.
- Class components: Older syntax with lifecycle methods.


**Real-world example:**  
In an e-commerce site:

- `<Header />` for navigation

- `<ProductCard />` for each product

- `<Footer />` for the site footer


**Example:**
function ProductCard({ name, price }) {
  return (
    <div>
      `<h3> {name}</h3>`
      `<p>₹{price}</p>`
    </div>
  );
}


---

## 11. What are Props?

**Answer:**
Props are read-only inputs passed from a parent component to a child component.
They help create reusable and configurable components.

**Real-world usage:**  
Pass user data to a ProfileCard or product info to a ProductCard.

Example:

function ProfileCard({ name, role }) {
  `return <p>{name} – {role}</p;`
}


---

## 12. What is State?

**Answer:**
State is mutable data managed within a component. It determines how the component behaves and renders.

**Real-world usage:**  
- Toggle a sidebar, handle form input, or track cart items in an e-commerce app.

**Example:**

function Counter() {
  const [count, setCount] = useState(0);
  return `<button onClick={() => setCount(count + 1)}>{count}</button>;`
}


---

## 13. Difference Between Props and State

Feature	Props	State

- Ownership	Passed from parent	Managed within the component
- Mutability	Immutable (read-only)	Mutable using setState/useState
- Usage	For configuration	For dynamic rendering

---

## 14. What is JSX?

**Answer:**
- JSX (JavaScript XML) lets you write HTML-like code in JavaScript. It gets compiled to React.createElement() calls.

**Real-world usage:**  
- Makes code cleaner by mixing JS logic and UI.

**Example:**
const name = "Anshika";
const element = `<h1>Hello, {name}!</h1>;`


---

## 15. What are Hooks? Name some common hooks.

**Answer:**
Hooks let you use React features in functional components.
Common Hooks:

`useState → state management`
`useEffect → side effects`
`useContext → global data`
`useRef → direct DOM access`
`useMemo, useCallback → performance optimization`

---

## 16. Explain useState Hook

**Answer:**
useState allows you to add state to functional components.

**Real-world usage:**  
Track the open/closed state of a modal.

Example:

`const [isOpen, setIsOpen] = useState(false);`


---

## 17. Explain useEffect Hook

**Answer:**
useEffect lets you perform side effects in functional components (fetching data, subscriptions, DOM updates).

**Real-world usage:**  
Fetching product data when a page loads.

**Example:**

`useEffect(() => {`
  `fetch('/api/products')`
    `.then(res => res.json())`
    `.then(data => setProducts(data));`
`}, []);`


---

## 18. What is Conditional Rendering?

**Answer:**
Displaying UI based on certain conditions.

**Real-world usage:**  
Show “Login” button if not logged in, otherwise show “Profile”.

**Example:**

`{user ? <Profile user={user} /> : <Login />}`


---

## 19. What is React Router?

**Answer:**
A library for client-side routing in React apps.

**Real-world usage:**  
Navigate between Home, About, and Product pages without reload.

**Example:**

`import { BrowserRouter, Routes, Route } from 'react-router-dom';`

<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>
</BrowserRouter>


## 20. What are Controlled vs Uncontrolled Components?

- Controlled: Form data is handled by React state.
- Uncontrolled: Form data handled by the DOM via ref.


**Real-world usage:**

`Controlled → Login forms`
`Uncontrolled → File uploads, legacy inputs`

---

## 21. What is Lifting State Up?

**Answer:**
Moving state to a common ancestor to share data between sibling components.

**Real-world usage:**
Sharing a search term between a SearchBar and Results component.


---

## 22. What are Keys in React?

**Answer:**
Keys help React identify which list items changed, are added, or removed.
They improve rendering performance.

**Real-world usage:**
Rendering a dynamic list of products or tasks.

**Example:**

`{items.map(item => <li key={item.id}>{item.name}</li>)}`


---

## 23. What is React Fragment?

**Answer:**
`<React.Fragment>` lets you group multiple elements without adding extra DOM nodes.

**Example:**

`<>`
  `<h1>Title</h1>`
  `<p>Subtitle</p>`
`</>`


---

## 24. What is Context API?

**Answer:**
Provides a way to share global data without prop drilling.

**Real-world usage:**
Theme, authentication, or language settings shared across the app.


---

## 25. What is useContext Hook?

**Answer:**
useContext lets you consume context values inside components.

**Example:**

`const theme = useContext(ThemeContext);`


---

## 26. What is useRef?

**Answer:**
useRef gives direct access to DOM elements or stores mutable values.

**Real-world usage:**
Focus an input on page load.

**Example:**

`const inputRef = useRef();`
`useEffect(() => inputRef.current.focus(), []);`


---

## 27. What is React.memo?

**Answer:**
React.memo is a higher-order component that prevents unnecessary re-renders if props haven’t changed.

**Real-world usage:**
Optimizing performance in large dashboard apps.


---

## 28. What is useCallback?

**Answer:**
useCallback memoizes callback functions, preventing new references on each render.

**Real-world usage:**
Passing functions to child components without causing re-renders.


---

## 29. What is useMemo?

**Answer:**
useMemo memoizes expensive calculations.

**Real-world usage:**
Filtering or sorting large datasets.


---

## 30. How to handle forms in React?

**Answer:**
Use controlled components with onChange handlers.

**Example:**

`<input value={email} onChange={e => setEmail(e.target.value)} />`


---

## 31. What is Redux?

**Answer:**
Redux is a state management library that stores app state in a single global store.

**Real-world usage:**
Used in large apps like Twitter for managing complex states.


---

## 32. What is Redux Toolkit?

**Answer:**
An official, simplified way to use Redux with less boilerplate.


---

## 33. What is Error Boundary?

**Answer:**
A component that catches JavaScript errors in its child component tree and displays a fallback UI.


---

## 34. What is Code Splitting?

**Answer:**
Splitting the app into chunks to load only the required code.

**Real-world usage:**
Load the checkout page only when the user goes to /checkout.


---

## 35. What is Lazy Loading?

**Answer:**
Dynamically load components using React.lazy and Suspense.

Example:

`const Checkout = React.lazy(() => import('./Checkout'));`


---

## 36. What is Server-Side Rendering (SSR)?

**Answer:**
Rendering the React app on the server before sending HTML to the browser → improves SEO and load time.

**Real-world usage:**
Next.js uses SSR for blogs, landing pages, etc.


---

## 37. What is Hydration?

**Answer:**
Hydration is attaching event listeners to pre-rendered HTML on the client side after SSR.

🧠 1. What is JSX and why is it used in React?

👉 **Answer:**

- JSX stands for JavaScript XML.
- It allows you to write HTML-like syntax inside JavaScript.
- JSX makes the UI code cleaner and easier to understand.
- Under the hood, JSX gets transpiled to React.createElement() calls.
// JSX
`const element = <h1>Hello World</h1>;`

// Transpiled
const element = React.createElement('h1', null, 'Hello World');

📝 **Real-world example:** 
JSX allows you to write complex UIs like:

`{isLoggedIn ? <Dashboard /> : <LoginPage />}`

Without JSX, this would be more verbose and harder to read.


---

## 🧰 38. What is the difference between Functional and Class Components?

Feature	Functional Component	Class Component

- Syntax	Simple function	ES6 Class
- State	useState() Hook	this.state
- Lifecycle	useEffect() Hook	componentDidMount, etc.
- Performance	Generally better	Slightly heavier


// Functional
function Welcome() {
  `return <h1 Hello!</h1>;`
}

// Class
class Welcome extends React.Component {
  render() {
    `return <h1 Hello!</h1>;`
  }
}

📝 **Real-world example:** 
Almost all modern React apps use functional components because they’re simpler and support hooks.

---

## 🌐 39. What is Virtual DOM and how does React use it?

👉 **Answer:**

- The Virtual DOM is a lightweight copy of the real DOM.

- React updates the Virtual DOM first, compares it with the previous version (diffing), and then efficiently updates only the changed parts of the real DOM.


📝 **Real-world example:** 
If you update a small piece of text in a large page, React doesn’t re-render the whole page — it finds that one node and updates it, improving performance.


---

## 🌀 40. What are React Hooks?

👉 **Answer:**

Hooks are special functions that let you “hook into” React features from functional components.

Common hooks:

- useState → for state management
- useEffect → for side effects (e.g., API calls, subscriptions)
- useContext, useRef, useMemo, etc.
`


`function Counter() {`
 ` const [count, setCount] = useState(0);`
  `return <button onClick={() => setCount(count + 1)}>{count}</button>;`
`}`

📝 **Real-world example:** 
Hooks replaced the need for class lifecycle methods, making components much cleaner and reusable.


---

## 🧭 41. What is the difference between state and props?

Feature	Props	State

- Origin	Passed from parent	Managed inside component
- Mutability	Read-only	Can be updated
- Purpose	Communicate between components	Store local data


📝 **Real-world example:** 
A parent component might pass username as a prop, while a Form component might manage its own state for inputText.


---

## 🔄 42. What is useEffect used for in React?

👉 **Answer:**

useEffect lets you run side effects after rendering: API calls, DOM manipulation, event listeners, timers, etc.


useEffect(() => {
  console.log('Component mounted');
  return () => console.log('Component unmounted');
}, []);

[] ensures it runs only on mount.

Adding variables inside [] lets it run when those change.


📝 **Real-world example:** 
Used to fetch user data from an API when the component loads.


---

## ⚡ 43. What is a React Fragment and why is it used?

👉 **Answer:**

A React Fragment lets you return multiple elements without adding extra DOM nodes.


`return (
  <>
    `<h1>Title</h1>`
    `<p>Description</p>`
  </>
);`

Without fragments, you’d need to wrap everything in a <div>, which can mess up layouts.


---

## 🧩 44. What is the purpose of key in lists?

👉 **Answer:**

Keys help React identify which items changed, added, or removed.

It improves rendering performance and avoids UI bugs.


`{items.map(item => (`
  `<li key={item.id}>{item.name}</li>`
`))}`

⚠️ Using index as a key is not recommended if the list can change order.


---

## 🧠 45. What are Controlled and Uncontrolled Components in React?

Controlled Component: Form data is handled by React state.


`<input value={value} onChange={e => setValue(e.target.value)} />`

Uncontrolled Component: Form data is handled by the DOM itself.


`<input ref={inputRef} />`

📝 **Real-world example:** 
For forms with validation, controlled components are preferred. For simple inputs (like file upload), uncontrolled might be easier.


---

## ⚙️ 46. Why do we need export and import in React?

👉 **Answer:**
React uses ES Modules to split the code into multiple files for better organization.

// File: Button.js
`export default function Button() { ... }`

// File: App.js
`import Button from './Button';`

📝 **Real-world example:** 
Helps keep code clean — e.g., each component in its own file.

## 🌍 47. What is React Router and why do we use it?

👉 **Answer:**

- React Router is a library that lets you handle client-side routing in a React application.

- Instead of loading a new HTML page for each route, React Router dynamically updates the UI and keeps the app as a Single Page Application (SPA).


import { BrowserRouter, Routes, Route } from `"react-router-dom"`;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        `<Route path="/" element={<Home />} />`
        `<Route path="/about" element={<About />} />`
      </Routes>
    </BrowserRouter>
  );
}

📝 **Real-world example:** 
In an e-commerce app, clicking on “Cart” or “Product Details” doesn’t reload the page — React Router switches the view seamlessly.


---

## 🧭 48. What is the difference between BrowserRouter and HashRouter?

| Feature	     |  BrowserRouter           	  |  HashRouter      |
|--------------|------------------------------|------------------|
| URL Format	 |   /about	                    |  /#/about        |
| Server Config|Needs server setup for routes	|  No setup needed |
| SEO Friendly |     ✅ Yes                   |	❌ No          |


📝 **Real-world example:** 

- Use BrowserRouter in production apps where you can configure your server (e.g., Netlify, Vercel).

- Use HashRouter for apps hosted on static servers like GitHub Pages.



---

## 📂 49. Which file runs first in a React project created with Create React App (CRA)?

👉 **Answer:**
When you run npm start or yarn start:

1. public/index.html is loaded first — it contains the root <div>.


2. src/index.js is executed, which renders your main <App /> component into that root div.


// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

📝 **Real-world example:** 
If your app shows a white screen, checking index.js or index.html is usually the first debugging step.

---

## 📜 50. What is the use of package.json file?

👉 **Answer:**

- Defines the metadata of the project.
- Lists dependencies, scripts, version, and configuration.
- Used by npm/yarn to install and run the project.


{
  "name": "my-app",
  "version": "1.0.0",
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build"
  },
  "dependencies": {
    "react": "^18.2.0"
  }
}

📝 **Real-world example:** 
When you clone a repo and run npm install, this file tells npm which packages to install.


---

## 🧾 51. What is the use of package-lock.json?

👉 **Answer:**

- Ensures consistent dependency versions across different machines.
- Locks the exact versions of every installed package and its sub-dependencies.
- Prevents unexpected bugs due to version differences.


### Ensures same versions everywhere
npm ci

📝 **Real-world example:** 
A team working on the same project will have identical node_modules because package-lock.json freezes versions.


---

## 🚀 52. What is the purpose of the build folder in React?

👉 **Answer:**

- Created when you run npm run build.
- Contains optimized static files (index.html, minified JS, CSS, images).
- This folder is deployed to production servers.

📝 **Real-world example:** 
If you deploy your React app to Netlify or Vercel, you upload the build folder — not the src folder.

---

## ⚡ 53. How can you optimize performance in a React app?

👉 **Answer:**
Common techniques:

- Use React.memo to prevent unnecessary re-renders
- Use useMemo / useCallback for expensive calculations or stable functions
- Code-splitting using React.lazy and Suspense
- Avoid inline functions in render (where possible)
- Use Pagination / Infinite Scroll for large data

const MemoizedChild = React.memo(ChildComponent);

📝 **Real-world example:** 
If you have a big dashboard with multiple charts, using React.memo avoids re-rendering all charts every time one filter changes.

---

## 🧠 54. What is Code Splitting in React and why is it important?

👉 **Answer:**

- Code splitting breaks your app into smaller chunks, so users don’t need to load the entire JS bundle at once.

- Reduces initial load time.

`import React, { lazy, Suspense } from "react";`

`const LazyComponent = lazy(() => import("./HeavyComponent"));`

function App() {
  return (
  `<Suspense fallback={<div>Loading...</div>}>`
     `<LazyComponent />`
    `</Suspense>`
  );
}

📝 **Real-world example:** 
A blog site can load the “Admin Panel” only when the admin logs in — not for every visitor.


---

## 🧠 55. What is the difference between npm start and npm run build?

Command	Purpose

- npm start:	Runs development server with hot reload, unoptimized code
- npm run build:	Creates a production build with minified, optimized files


📝 **Real-world example:** 
Develop locally with npm start → Deploy optimized version from build folder using npm run build.

---

## 🧪 56. Why do we use .env files in React projects?

👉 **Answer:**

- .env files store environment variables like API keys, URLs, etc.

- Variables must start with REACT_APP_ to be used inside React.

# .env
`REACT_APP_API_URL=https://api.example.com`

`fetch(`${process.env.REACT_APP_API_URL}/users`);
`
📝 **Real-world example:** 
Switch between dev and production API URLs without changing the code.
```
