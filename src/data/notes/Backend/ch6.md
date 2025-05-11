### MongoDB Basics and MongoDB Atlas

#### **Introduction to NoSQL Databases**
- **Definition**: Non-relational databases designed for efficient storage, retrieval, and processing of large datasets.
- **Key Characteristics**:
  - Handle **unstructured, semi-structured**, and **structured** data.
  - Support for distributed, real-time applications.

#### **Features of NoSQL Databases**
- **Schema-less Design**: Flexible, as data structure can vary between records.
- **Horizontal Scalability**: Scale out easily by adding more servers.
- **High Availability**: Built-in replication ensures fault tolerance.
- **Data Models Supported**: 
  - **Document**: MongoDB, CouchDB.
  - **Key-Value**: Redis, DynamoDB.
  - **Column-Family**: Cassandra, HBase.
  - **Graph**: Neo4j, ArangoDB.

#### **Advantages of NoSQL Databases**
- **Scalability**: Easily adapt to growing data needs.
- **Performance**: Optimized for fast read/write operations.
- **Flexibility**: Perfect for dynamic or rapidly evolving datasets.
- **Cost-Effective**: Economical at scale, especially with open-source options.

#### **Use Cases of NoSQL Databases**
1. **Big Data**: Process large datasets in real-time (e.g., IoT, analytics).
2. **Content Management**: Store diverse data formats for blogs, media apps.
3. **Social Networks**: Manage user-generated content efficiently.
4. **IoT Applications**: Handle device-generated data streams.

---

#### **MongoDB Overview**
- **Type**: Document-oriented NoSQL database.
- **Key Features**:
  1. **Flexible Schema**: Store JSON-like documents (`BSON`).
  2. **Scalability**: Horizontal scaling with **sharding**.
  3. **Performance**: High-speed operations with optimized indexing.
  4. **Replication**: Ensure fault tolerance with replica sets.
- **Core Concept**:
  - MongoDB stores data in collections of documents (JSON-like objects).

#### **MongoDB Structure**
| Component         | SQL Equivalent     | Description                                     |
|--------------------|--------------------|-------------------------------------------------|
| **Database**       | **Database**       | Logical container for collections.             |
| **Collection**     | **Table**          | Group of documents.                            |
| **Document**       | **Row**            | JSON-like structure representing a record.     |
| **Field**          | **Column**         | Key-value pair in a document.                  |

**Example Document**:
```json
{
  "_id": "001",
  "name": "John Doe",
  "age": 30,
  "skills": ["JavaScript", "Node.js"],
  "isActive": true
}
```

---

#### **MongoDB Atlas: Managed Cloud Database Service**
1. **Cloud-Based**: Hosted on AWS, Azure, or Google Cloud.
2. **Features**:
   - **Automated Backups**: Schedule regular backups.
   - **Security**: Encryption, access controls, IP whitelisting.
   - **Monitoring**: Real-time performance metrics and alerts.
   - **Scalability**: Adjust cluster size or add nodes easily.

#### **MongoDB Atlas Setup**
1. **Create an Account**:
   - Visit [MongoDB Atlas](https://www.mongodb.com/atlas).
   - Sign up and verify your email.

2. **Create a Cluster**:
   - Select a cloud provider and region.
   - Choose a tier (Free: M0, Paid: M10+ for production).

3. **Connect to Cluster**:
   - Obtain the connection string (e.g., `mongodb+srv://<username>:<password>@cluster0.mongodb.net/test`).
   - Use it in:
     - **MongoDB Compass** (GUI).
     - **MongoDB Shell**.
     - Application code.

4. **Set Up Security**:
   - Create database users with appropriate roles.
   - Whitelist IPs for secure access.

---

#### **Working with MongoDB**
**Basic Commands**:
```javascript
// Create Database
use myDatabase;

// Create Collection
db.createCollection('users');

// Insert Document
db.users.insertOne({ name: "Alice", age: 25 });

// Find All Documents
db.users.find();

// Update Document
db.users.updateOne({ name: "Alice" }, { $set: { age: 26 } });

// Delete Document
db.users.deleteOne({ name: "Alice" });

// Drop Collection
db.users.drop();

// Drop Database
db.dropDatabase();
```

**Advanced Querying**:
- **Comparison Operators**:
```javascript
db.users.find({ age: { $gt: 25 } });  // Find users older than 25
db.users.find({ age: { $gte: 30 } }); // Find users 30 or older
```

- **Logical Operators**:
```javascript
db.users.find({ $or: [{ age: { $lt: 20 } }, { age: { $gt: 30 } }] });
```

- **Projection**:
```javascript
db.users.find({}, { name: 1, _id: 0 }); // Return only names, exclude `_id`.
```

**Indexing**:
```javascript
db.users.createIndex({ age: 1 });  // Create an ascending index on `age`.
```

---

#### **Connecting MongoDB with Node.js**
1. **Install MongoDB Driver**:
   ```bash
   npm install mongodb dotenv
   ```

2. **Setup `.env` File**:
   ```env
   MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/myDatabase
   ```

3. **Application Code**:
   ```javascript
   require('dotenv').config();
   const { MongoClient } = require('mongodb');

   const uri = process.env.MONGO_URI;

   async function connectToDB() {
       const client = new MongoClient(uri, { useUnifiedTopology: true });
       try {
           await client.connect();
           console.log("Connected to database");
           const db = client.db("myDatabase");
           const collection = db.collection("users");
           
           // Sample query
           const users = await collection.find().toArray();
           console.log(users);
       } finally {
           await client.close();
       }
   }
   connectToDB().catch(console.error);
   ```

---

#### **Using MongoDB Compass**
- GUI tool to visualize and interact with MongoDB.
- Key Features:
  - Query building.
  - Schema analysis.
  - Performance monitoring.

---

#### **Working as a Team in MongoDB Atlas**
- **Create an Organization**:
  - Navigate to "Organizations" → "New Organization".
  - Assign roles: **Owner**, **Read-Only**, etc.
- **Create Teams**:
  - Invite members via email.
  - Assign cluster or project access.

---

#### **Best Practices**
1. **Indexing**: Index frequently queried fields for better performance.
2. **Schema Design**:
   - **Embed**: Use for tightly coupled data.
   - **Reference**: Use for loosely coupled, large datasets.
3. **Data Backup**: Schedule regular backups in production.
4. **Security**: Use strong passwords and IP whitelists.

