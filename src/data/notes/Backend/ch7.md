## **Mongoose, Schema, Model, and CRUD Operations**

Mongoose is an essential tool for working with MongoDB in Node.js applications. It simplifies database interaction by providing a schema-based solution to model your data.


### **What is Mongoose?**
Mongoose is a MongoDB object modeling library that provides:
- Schema-based structure for MongoDB collections.
- Type validation and data modeling.
- Built-in query methods for database interactions.
- Middleware for handling business logic.

**Installation**:  
```bash
npm install mongoose
```

### **Schema**
- **Definition**: A **Schema** is a blueprint for your MongoDB collection. It defines the structure, data types, validation rules, and constraints for documents.
- **Purpose**: Enforces a structure to maintain consistent data.

**Example: Creating a Schema**
```javascript
const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: { type: String, required: true }, // 'name' must be a string and is required
    email: { type: String, unique: true, required: true }, // Unique and required
    age: { type: Number, min: 0 }, // Must be a non-negative number
    createdAt: { type: Date, default: Date.now }, // Default value
    roles: [String], // Array of strings
    active: { type: Boolean, default: true } // Default true
});

module.exports = userSchema;
```

### **Model**
- **Definition**: A **Model** is a class created from a schema that provides the interface to interact with the database.
- **Purpose**: Allows you to perform **CRUD operations** and execute database queries.

**Example: Creating a Model**
```javascript
const User = mongoose.model('User', userSchema);
module.exports = User;
```

### **Connecting to MongoDB**
Mongoose simplifies database connection and error handling.

**Example: Connecting to MongoDB**
```javascript
const mongoose = require('mongoose');

async function connectDB() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/mydatabase', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Database connection failed:', error);
    }
}

connectDB();
```

### **CRUD Operations with Mongoose**
CRUD (Create, Read, Update, Delete) are the fundamental operations when working with databases.

#### **1. Create a Document**
**Example: Adding a new user**
```javascript
const User = require('./models/User');

async function createUser() {
    const user = new User({
        name: 'Alice',
        email: 'alice@example.com',
        age: 25,
        roles: ['admin', 'editor']
    });

    try {
        const savedUser = await user.save(); // Saves to MongoDB
        console.log('User created:', savedUser);
    } catch (error) {
        console.error('Error creating user:', error);
    }
}

createUser();
```

#### **2. Read Documents**
**Example: Fetching all users**
```javascript
async function getAllUsers() {
    const users = await User.find(); // Fetches all documents from the 'users' collection
    console.log('All Users:', users);
}

getAllUsers();
```

**Example: Fetch a user by ID**
```javascript
async function getUserById(userId) {
    const user = await User.findById(userId);
    console.log('User:', user);
}

getUserById('63f12345cdef6789abcd1234');
```

**Example: Query with conditions**
```javascript
async function getActiveUsers() {
    const users = await User.find({ active: true }); // Fetch users where 'active' is true
    console.log('Active Users:', users);
}

getActiveUsers();
```

#### **3. Update a Document**
**Example: Update a user’s email**
```javascript
async function updateUser(userId, newEmail) {
    const updatedUser = await User.findByIdAndUpdate(
        userId,
        { email: newEmail },
        { new: true } // Returns the updated document
    );
    console.log('Updated User:', updatedUser);
}

updateUser('63f12345cdef6789abcd1234', 'newemail@example.com');
```

#### **4. Delete a Document**
**Example: Delete a user by ID**
```javascript
async function deleteUser(userId) {
    const deletedUser = await User.findByIdAndDelete(userId);
    console.log('Deleted User:', deletedUser);
}

deleteUser('63f12345cdef6789abcd1234');
```

### **Building an Express API with Mongoose**

Here’s an end-to-end example of integrating Mongoose with an Express API.

#### **1. Define the Schema**
```javascript
const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    category: { type: String, required: true },
    inStock: { type: Boolean, default: true }
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
```

#### **2. Set Up Express Routes**
```javascript
const express = require('express');
const Product = require('./models/Product');
const router = express.Router();

// Create Product
router.post('/products', async (req, res) => {
    try {
        const product = new Product(req.body);
        const savedProduct = await product.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get All Products
router.get('/products', async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

// Get Product by ID
router.get('/products/:id', async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.json(product);
});

// Update Product
router.put('/products/:id', async (req, res) => {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedProduct);
});

// Delete Product
router.delete('/products/:id', async (req, res) => {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    res.json(deletedProduct);
});

module.exports = router;
```



#### **3. Start the Express Server**
```javascript
const express = require('express');
const mongoose = require('mongoose');
const productRouter = require('./routes/product');

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/ecommerce', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

// Routes
app.use('/api', productRouter);

// Start Server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
```



### **Key Takeaways**
- **Schema**: Blueprint for documents in a MongoDB collection.
- **Model**: Interface for interacting with MongoDB using CRUD operations.
- **Validation**: Mongoose provides built-in and custom validation for data.
- **Integration**: Combine Mongoose with Express to create RESTful APIs.

This guide ensures you understand and can implement Mongoose in your projects with confidence! 🚀