
# MERN Stack Billing Application 

## Database Models and Schema

### 1. Shop Schema
```javascript
const ShopSchema = new Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  address: { type: String, required: true },
  gstin: { type: String, required: true },
  phone: { type: String, required: true }
});
```

### 2. Customer Schema
```javascript
const CustomerSchema = new Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String },
  gstin: { type: String, required: true },
  pan: { type: String },
  email: { type: String },
  type: { type: String, enum: ["Retail", "Wholesale", "Credit"], default: "Retail" },
  prevBalance: { type: Number, default: 0 },
  loyaltyId: { type: String },
  notes: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});
```

### 3. Product Schema
```javascript
const ProductSchema = new Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  category: { type: String, required: true },
  sku: { type: String, required: true },
  brand: { type: String, required: true },
  unit: { type: String, required: true },
  unit_options: [{ type: String }],
  rate: { type: Number, required: true },
  tax: { type: Number, required: true },
  hsn: { type: String, required: true },
  mrp: { type: Number },
  batch: { type: String },
  expiry: { type: Date },
  stock: { type: Number, default: 0 },
  location: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});
```

### 4. Bill Schema
```javascript
const BillItemSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  category: { type: String, required: true },
  sku: { type: String, required: true },
  brand: { type: String, required: true },
  unit: { type: String, required: true },
  quantity: { type: Number, required: true },
  rate: { type: Number, required: true },
  discount: { type: Number, default: 0 },
  discountType: { type: String, enum: ["₹", "%"], default: "₹" },
  tax: { type: Number, required: true },
  hsn: { type: String, required: true },
  mrp: { type: Number },
  batch: { type: String },
  expiry: { type: Date },
  location: { type: String },
  notes: { type: String },
  amount: { type: Number, required: true },
  taxAmount: { type: Number, required: true },
  total: { type: Number, required: true }
});

const BillSchema = new Schema({
  billNumber: { type: String, required: true, unique: true },
  customer: {
    id: { type: String, required: true },
    name: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String },
    gstin: { type: String, required: true },
    pan: { type: String },
    email: { type: String },
    type: { type: String },
    prevBalance: { type: Number, default: 0 },
    loyaltyId: { type: String },
    notes: { type: String }
  },
  billInfo: {
    billDate: { type: String, required: true },
    billTime: { type: String, required: true },
    financialYear: { type: String, required: true },
    shopId: { type: String, required: true },
    salesperson: { type: String, required: true }
  },
  delivery: {
    charges: { type: Number, default: 0 },
    transporter: { type: String },
    vehicleNumber: { type: String }
  },
  payment: {
    roundOff: { type: Number, default: 0 },
    paidAmount: { type: Number, required: true },
    status: { type: String, enum: ["Paid", "Partial", "Credit"], required: true },
    mode: { type: String, required: true },
    transactionId: { type: String },
    dueDate: { type: String },
    showQR: { type: Boolean, default: false }
  },
  additionalInfo: {
    notes: { type: String },
    termsAccepted: { type: Boolean, default: true }
  },
  items: [BillItemSchema],
  subtotal: { type: Number, required: true },
  totalTax: { type: Number, required: true },
  grandTotal: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});
```

### 5. User Schema (for Authentication)
```javascript
const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  role: { type: String, enum: ["admin", "manager", "salesperson"], default: "salesperson" },
  shop: { type: String, ref: 'Shop' },
  active: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});
```

## Server Structure

```
server/
├── config/
│   ├── db.js                  # MongoDB connection
│   ├── config.js              # Environment variables
│   └── auth.js                # JWT configuration
├── models/
│   ├── Shop.js                # Shop model
│   ├── Customer.js            # Customer model
│   ├── Product.js             # Product model
│   ├── Bill.js                # Bill model
│   └── User.js                # User model
├── routes/
│   ├── api/
│   │   ├── shops.js           # Shop routes
│   │   ├── customers.js       # Customer routes
│   │   ├── products.js        # Product routes
│   │   ├── bills.js           # Bill routes
│   │   └── auth.js            # Authentication routes
│   └── index.js               # API route index
├── controllers/
│   ├── shopController.js      # Shop controllers
│   ├── customerController.js  # Customer controllers
│   ├── productController.js   # Product controllers
│   ├── billController.js      # Bill controllers
│   └── authController.js      # Auth controllers
├── middleware/
│   ├── auth.js                # JWT verification
│   └── errorHandler.js        # Error handling middleware
├── utils/
│   ├── pdfGenerator.js        # PDF generation for bills
│   └── validation.js          # Input validation
├── package.json
└── server.js                  # Entry point
```

## API Endpoints

### Authentication Endpoints
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login and receive JWT
- `GET /api/auth/me` - Get current user info
- `PUT /api/auth/password` - Update password

### Shop Endpoints
- `GET /api/shops` - Get all shops
- `GET /api/shops/:id` - Get specific shop
- `POST /api/shops` - Create new shop
- `PUT /api/shops/:id` - Update shop
- `DELETE /api/shops/:id` - Delete shop

### Customer Endpoints
- `GET /api/customers` - Get all customers
- `GET /api/customers/:id` - Get specific customer
- `POST /api/customers` - Create new customer
- `PUT /api/customers/:id` - Update customer
- `DELETE /api/customers/:id` - Delete customer
- `GET /api/customers/search?query=` - Search customers

### Product Endpoints
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get specific product
- `POST /api/products` - Create new product
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product
- `GET /api/products/search?query=` - Search products
- `GET /api/products/category/:category` - Get products by category
- `PUT /api/products/:id/stock` - Update product stock

### Bill Endpoints
- `GET /api/bills` - Get all bills
- `GET /api/bills/:id` - Get specific bill
- `POST /api/bills` - Create new bill
- `PUT /api/bills/:id` - Update bill
- `DELETE /api/bills/:id` - Delete bill
- `GET /api/bills/customer/:customerId` - Get bills by customer
- `GET /api/bills/date/:startDate/:endDate` - Get bills by date range
- `GET /api/bills/shop/:shopId` - Get bills by shop
- `GET /api/bills/generate-pdf/:id` - Generate PDF for bill

## Server Implementation

### Server.js
```javascript
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config/config');
const routes = require('./routes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(config.mongoURI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log('MongoDB Connection Error:', err));

// Routes
app.use('/api', routes);

// Error handling
app.use(errorHandler);

// Start server
const PORT = config.port || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```

## Frontend Service Integration

### Example of billService.js:
```javascript
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Set auth token for requests
const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['x-auth-token'] = token;
  } else {
    delete axios.defaults.headers.common['x-auth-token'];
  }
};

export const getBills = async () => {
  try {
    const res = await axios.get(`${API_URL}/bills`);
    return res.data;
  } catch (err) {
    throw err.response.data.message;
  }
};

export const getBillById = async (id) => {
  try {
    const res = await axios.get(`${API_URL}/bills/${id}`);
    return res.data;
  } catch (err) {
    throw err.response.data.message;
  }
};

export const createBill = async (billData) => {
  try {
    const res = await axios.post(`${API_URL}/bills`, billData);
    return res.data;
  } catch (err) {
    throw err.response.data.message;
  }
};
```

## Authentication Implementation

### JWT Authentication Flow
1. User logs in, server verifies credentials and returns JWT
2. Frontend stores JWT in localStorage
3. JWT is included in headers for subsequent requests
4. Protected routes check JWT validity

### Frontend Auth Context
```javascript
import React, { createContext, useState, useEffect } from 'react';
import { login, register, getCurrentUser } from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkLoggedIn = async () => {
      if (localStorage.token) {
        try {
          const userData = await getCurrentUser();
          setUser(userData);
          setIsAuthenticated(true);
        } catch (error) {
          localStorage.removeItem('token');
        }
      }
      setLoading(false);
    };
    
    checkLoggedIn();
  }, []);

  // Login user
  const loginUser = async (credentials) => {
    try {
      const response = await login(credentials);
      localStorage.setItem('token', response.token);
      setUser(response.user);
      setIsAuthenticated(true);
      return response.user;
    } catch (error) {
      throw error;
    }
  };

  // Register user
  const registerUser = async (userData) => {
    try {
      const response = await register(userData);
      localStorage.setItem('token', response.token);
      setUser(response.user);
      setIsAuthenticated(true);
      return response.user;
    } catch (error) {
      throw error;
    }
  };

  // Logout user
  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        loading,
        loginUser,
        registerUser,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
```

## Implementation Timeline

1. **Week 1: Backend Setup**
   - Set up MongoDB database
   - Create Express server structure
   - Implement database schemas
   - Set up basic routes

2. **Week 2: API Development**
   - Implement controllers for each entity
   - Add validation for API inputs
   - Set up error handling
   - Create authentication middleware

3. **Week 3: Authentication System**
   - Implement JWT authentication
   - Create user registration and login
   - Set up protected routes
   - Add password reset functionality

4. **Week 4: Frontend Integration**
   - Create API services in frontend
   - Update React contexts to use APIs
   - Implement authentication in frontend
   - Add loading states and error handling

5. **Week 5: Testing & Refinement**
   - Test end-to-end functionality
   - Fix bugs and issues
   - Optimize performance
   - Implement offline capabilities

## Deployment Strategy

1. **Backend Deployment**
   - Deploy MongoDB to MongoDB Atlas
   - Deploy Express server to Heroku or similar platform
   - Set up environment variables

2. **Frontend Deployment**
   - Configure frontend to use production API URL
   - Deploy React app to Vercel, Netlify, or similar platform
   - Set up CI/CD pipeline

3. **Monitoring & Maintenance**
   - Set up logging (e.g., Winston, Morgan)
   - Implement health check endpoints
   - Set up monitoring alerts
   - Plan for regular backups
