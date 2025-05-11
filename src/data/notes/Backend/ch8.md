### MERN - Connecting API with React

In this chapter, we will bridge the gap between the React frontend and the Express backend by using **Axios** to make HTTP requests. This process involves configuring Axios, fetching data from the backend API, and displaying it in the React components.



### **1. Introduction to Axios**

Axios is a popular HTTP client for making requests to APIs in both browser and Node.js environments. It simplifies handling of asynchronous HTTP operations using Promises and supports advanced features such as:

- Request and Response Interceptors
- Automatic JSON Parsing
- Timeout and Cancellation of Requests

#### **Advantages of Axios over Fetch API**
- **Browser Compatibility**: Works in older browsers.
- **Ease of Use**: Automatically handles JSON responses.
- **Interceptors**: Ability to transform requests or responses before they are handled.
- **Error Handling**: Provides clearer error messages compared to the Fetch API.



### **2. Install Axios**

Run the following command in the **frontend directory** to install Axios:

```bash
npm install axios
```



### **3. Create an API Service**

Centralizing API configurations helps to:
- Avoid repetitive code.
- Quickly change base URLs or headers in one place.
  
#### **Code: `src/services/api.js`**
```javascript
import axios from 'axios';

// Create Axios instance with base configuration
const api = axios.create({
    baseURL: 'http://localhost:5000/api', // Replace with your backend URL
    headers: {
        'Content-Type': 'application/json',
    },
});

// Interceptor for logging or handling global errors (Optional)
api.interceptors.response.use(
    response => response,
    error => {
        console.error('API Error:', error.response?.data || error.message);
        return Promise.reject(error);
    }
);

export default api;
```



### **4. Fetch Data in a React Component**

Fetching data in React can be done using the **useEffect** hook. This allows us to trigger an API request when the component is mounted.

#### **Code: `src/components/Products.js`**
```javascript
import React, { useState, useEffect } from 'react';
import api from '../services/api';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch products from the backend
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await api.get('/products');
                setProducts(response.data);
            } catch (err) {
                setError(err.message || 'Error fetching products');
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) return <p>Loading products...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.map(product => (
                    <li key={product._id}>
                        <strong>{product.name}</strong>: {product.description}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Products;
```

#### **Explanation**
- **State Management**: Three state variables (`products`, `loading`, and `error`) manage the UI's status.
- **Error Handling**: Captures errors from API requests and displays appropriate messages.
- **Mapping Data**: Maps over the product list and renders each product.



### **5. Adding Loading Spinners**

For a better user experience, use a loading spinner. Install a spinner library like `react-loader-spinner`:

```bash
npm install react-loader-spinner
```

#### **Code: Adding Spinner**
```javascript
import { Rings } from 'react-loader-spinner';

if (loading) {
    return <Rings color="#00BFFF" height={80} width={80} />;
}
```



### **6. Render Products in `App.js`**

The `Products` component is rendered in the main `App` component:

#### **Code: `src/App.js`**
```javascript
import React from 'react';
import Products from './components/Products';

const App = () => (
    <div>
        <h1>E-Commerce App</h1>
        <Products />
    </div>
);

export default App;
```



### **7. Handle CORS in Backend**

To allow cross-origin requests from the frontend (on `localhost:3000`) to the backend (on `localhost:5000`), configure **CORS** middleware in Express.

#### **Install CORS**
```bash
npm install cors
```

#### **Add CORS Middleware in Express**
```javascript
const express = require('express');
const cors = require('cors');
const app = express();

// Allow requests from any origin
app.use(cors());
app.use(express.json());

// Example route
app.get('/api/products', (req, res) => {
    res.json([
        { _id: '1', name: 'Laptop', description: 'High performance laptop' },
        { _id: '2', name: 'Headphones', description: 'Noise-cancelling headphones' },
    ]);
});

app.listen(5000, () => console.log('Server running on port 5000'));
```



### **8. Starting Both Servers**

- **Start Backend**: Run the backend using `npm start` or `nodemon`.
- **Start Frontend**: Run `npm start` in the frontend directory.

Visit `http://localhost:3000` in your browser.



### **9. Extending the API**

#### **Adding Create Functionality**
To add a new product from the React app:
1. Add a form to `Products.js`.
2. Use `api.post('/products', { name, description })` to send data to the backend.

#### **Code: Adding a New Product**
```javascript
const addProduct = async (name, description) => {
    try {
        const response = await api.post('/products', { name, description });
        setProducts([...products, response.data]);
    } catch (err) {
        console.error('Error adding product:', err);
    }
};
```



### **Chapter Notes**

1. **Centralized API Management**:
   - The `api.js` file serves as a single source of truth for API configurations.

2. **Error Handling**:
   - Always provide fallback messages in case of API or network errors.

3. **Separation of Concerns**:
   - Backend handles data processing, while the frontend focuses on UI rendering and user interactions.

4. **Extending Functionalities**:
   - You can use the same pattern to create, update, or delete resources from the backend.



### **Key Takeaways**

- **Axios**: Simplifies API requests with features like interceptors and automatic JSON parsing.
- **useEffect**: Triggers side effects like fetching data after the component mounts.
- **CORS Middleware**: Enables secure communication between the frontend and backend on different origins.
- **Scalable Architecture**: Separation of API configurations improves code reusability and maintainability. 

