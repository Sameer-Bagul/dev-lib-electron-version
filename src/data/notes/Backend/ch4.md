### **REST APIs and CRUD**

#### **What is a RESTful API?**
A RESTful API (Representational State Transfer) is an architectural style for designing networked applications. It provides a set of rules and conventions for building web services that allow client-server communication over HTTP. RESTful APIs are designed to be simple, scalable, and stateless, making them ideal for connecting frontends to backends or third-party services.

---

#### **Key Concepts of RESTful APIs**
1. **Resources**:  
   Resources represent data objects (e.g., users, products, orders) that the API exposes. Each resource is uniquely identified by a URL.  
   Example: `/api/users`, `/api/products/123`.

2. **HTTP Methods**:  
   RESTful APIs use standard HTTP methods for performing actions on resources:
   - **GET**: Retrieve resources.
   - **POST**: Create new resources.
   - **PUT**: Update an entire resource.
   - **PATCH**: Partially update a resource.
   - **DELETE**: Remove a resource.

3. **Stateless Communication**:  
   Each request must contain all the necessary information (headers, parameters, body) to process it. The server does not store any client-specific state between requests.

4. **Representation of Resources**:  
   Resources are typically represented in JSON or XML format. JSON is more common due to its simplicity and compatibility with modern web technologies.

---

#### **API Structure and Examples**
**Example of RESTful Endpoints**:
```http
GET     /api/users             // Retrieve all users
GET     /api/users/:id         // Retrieve a single user by ID
POST    /api/users             // Create a new user
PUT     /api/users/:id         // Update an existing user
PATCH   /api/users/:id         // Partially update a user
DELETE  /api/users/:id         // Delete a user
```

**Example JSON Response**:
```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john.doe@example.com",
  "isActive": true
}
```

---

#### **API Root Endpoint, Base URL, and Versioning**
1. **API Root Endpoint**:  
   The root URL of the API where requests are sent. Example: `https://api.example.com`.

2. **Base URL**:  
   The root endpoint combined with a version number (if applicable). Example: `https://api.example.com/v1`.

3. **Versioning**:  
   Versioning allows maintaining backward compatibility. Changes to APIs (e.g., new features, schema changes) can be introduced without breaking existing integrations.  
   Example: `/v1/users`, `/v2/users`.

---

#### **CRUD Operations with HTTP Methods**
CRUD stands for **Create**, **Read**, **Update**, and **Delete**, the fundamental operations for managing resources.

| Operation   | HTTP Method | Description                             |
|-------------|-------------|-----------------------------------------|
| **Create**  | `POST`      | Add a new resource.                    |
| **Read**    | `GET`       | Retrieve one or more resources.        |
| **Update**  | `PUT/PATCH` | Modify an existing resource.           |
| **Delete**  | `DELETE`    | Remove an existing resource.           |

---

#### **Detailed CRUD Examples**
- **Create a Resource (POST)**:
    ```http
    POST /api/users
    Content-Type: application/json
    Body:
    {
      "name": "John Doe",
      "email": "john.doe@example.com",
      "isActive": true
    }
    ```

- **Read a Single Resource (GET)**:
    ```http
    GET /api/users/1
    Response:
    {
      "id": 1,
      "name": "John Doe",
      "email": "john.doe@example.com",
      "isActive": true
    }
    ```

- **Read Multiple Resources with Filtering (GET)**:
    ```http
    GET /api/users?isActive=true
    Response:
    [
      { "id": 1, "name": "John Doe", "email": "john.doe@example.com" },
      { "id": 2, "name": "Jane Smith", "email": "jane.smith@example.com" }
    ]
    ```

- **Update a Resource (PUT)**:
    ```http
    PUT /api/users/1
    Content-Type: application/json
    Body:
    {
      "name": "Jane Doe",
      "email": "jane.doe@example.com",
      "isActive": false
    }
    ```

- **Partial Update of a Resource (PATCH)**:
    ```http
    PATCH /api/users/1
    Content-Type: application/json
    Body:
    {
      "isActive": false
    }
    ```

- **Delete a Resource (DELETE)**:
    ```http
    DELETE /api/users/1
    ```

---

#### **PUT vs PATCH**
- **PUT**: Updates the entire resource. The client must send all fields, even if only one field is being updated.
- **PATCH**: Updates only specific fields of a resource.

**Example of PUT**:
```http
PUT /api/users/1
Content-Type: application/json
Body:
{
  "name": "Jane Doe",
  "email": "jane.doe@example.com",
  "isActive": false
}
```

**Example of PATCH**:
```http
PATCH /api/users/1
Content-Type: application/json
Body:
{
  "email": "new.email@example.com"
}
```

---

#### **Best Practices for RESTful APIs**
1. **Resource Naming**: Use nouns instead of verbs.  
   Example: `/users` instead of `/getUsers`.

2. **Use Standard HTTP Status Codes**:
   - `200 OK`: Successful request.
   - `201 Created`: Resource created.
   - `400 Bad Request`: Invalid input.
   - `404 Not Found`: Resource not found.
   - `500 Internal Server Error`: Server error.

3. **Consistent JSON Structure**:
    ```json
    {
      "data": { "id": 1, "name": "John Doe" },
      "error": null
    }
    ```

4. **Pagination**: For large datasets, return results in chunks.
    ```http
    GET /api/users?page=2&limit=10
    ```

5. **Sorting and Filtering**:
    ```http
    GET /api/users?sort=name&filter=isActive:true
    ```

6. **Authentication**: Use tokens like JWT for securing APIs.
    ```http
    Authorization: Bearer <token>
    ```

7. **Versioning**: Include version numbers in your URL (`/v1/users`).

8. **Documentation**: Use tools like Swagger or Postman to document APIs.

---

#### **Advanced Snippets**
- **Error Handling**:
    ```http
    GET /api/users/999
    Response:
    {
      "error": "User not found",
      "statusCode": 404
    }
    ```

- **JWT Authentication Example**:
    ```http
    POST /api/auth/login
    Content-Type: application/json
    Body:
    {
      "username": "admin",
      "password": "password123"
    }
    Response:
    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    }
    ```

- **Rate Limiting Header**:
    ```http
    GET /api/users
    Headers:
    X-RateLimit-Limit: 100
    X-RateLimit-Remaining: 99
    X-RateLimit-Reset: 3600
    ```

By following these principles, you can design robust and scalable RESTful APIs that provide a great experience for developers and users alike.