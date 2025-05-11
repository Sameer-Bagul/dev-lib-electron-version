### Express.js

#### What is Express.js?

- **Express.js** is a fast, unopinionated, minimalist web framework for Node.js.
- It simplifies the process of building web applications and APIs by providing tools and features that handle common web server tasks.
- Express.js is highly flexible and allows developers to build robust web applications with minimal effort.

#### Key Features of Express.js

1. **Routing**
   - Express allows you to define routes that map to HTTP methods (GET, POST, PUT, DELETE, etc.) for handling different types of requests.
   - You can define multiple routes for handling different paths and HTTP methods.
   - Example:
     ```javascript
     app.get('/home', (req, res) => {
         res.send('Welcome to the Home Page');
     });

     app.post('/login', (req, res) => {
         res.send('Logging in...');
     });
     ```

2. **Middleware**
   - Middleware is a function that has access to the request (`req`), response (`res`), and the next middleware function in the application’s request-response cycle.
   - Express middleware can perform tasks like logging, authentication, error handling, and modifying request and response objects.
   - **Example** of logging middleware:
     ```javascript
     app.use((req, res, next) => {
         console.log(`${req.method} request to ${req.url}`);
         next(); // Pass control to the next middleware function
     });
     ```

3. **Templating Engines**
   - Express supports various templating engines like **EJS**, **Pug**, and **Handlebars** to generate dynamic HTML content.
   - Example of using **EJS** as the templating engine:
     ```javascript
     app.set('view engine', 'ejs');
     app.get('/', (req, res) => {
         res.render('index', { title: 'Express' });
     });
     ```

4. **Error Handling**
   - Express provides built-in error-handling mechanisms. Error-handling middleware is defined by providing four arguments `(err, req, res, next)`.
   - Example of an error-handling middleware:
     ```javascript
     app.use((err, req, res, next) => {
         console.error(err.stack);
         res.status(500).send('Something broke!');
     });
     ```

5. **Static File Serving**
   - Express makes it easy to serve static files (images, CSS files, JavaScript files) using built-in middleware `express.static`.
   - Example:
     ```javascript
     app.use(express.static('public')); // Serves files from the 'public' directory
     ```

6. **RESTful API Development**
   - Express is commonly used to build **RESTful APIs** due to its simplicity and flexibility.
   - Example of a basic API route:
     ```javascript
     app.get('/api/users', (req, res) => {
         res.json([{ name: 'John' }, { name: 'Jane' }]);
     });
     ```

#### Installing Express.js

To install Express in your Node.js project, run the following command in your project folder:

```bash
npm install express
```

#### Creating a Basic Express Server

To create a basic server using Express, follow these steps:

1. Import Express and create an instance of it.
2. Define a route to handle HTTP requests.
3. Start the server by listening on a specific port.

Example:

```javascript
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
```

#### Handling All Types of HTTP Requests with Express.js

Express allows you to handle various HTTP methods like GET, POST, PUT, DELETE, etc.

- **GET**: Retrieve data from the server.
- **POST**: Submit data to the server to create a new resource.
- **PUT**: Update an existing resource.
- **DELETE**: Delete a resource.
- **PATCH**: Apply partial modifications to a resource.
- **OPTIONS**: Describes the communication options for the target resource.
- **HEAD**: Same as GET but without the response body.

Example of handling various request types:

```javascript
app.get('/resource', (req, res) => {
    res.send('GET request to the resource');
});

app.post('/resource', (req, res) => {
    res.send('POST request to the resource');
});

app.put('/resource', (req, res) => {
    res.send('PUT request to the resource');
});

app.delete('/resource', (req, res) => {
    res.send('DELETE request to the resource');
});

app.patch('/resource', (req, res) => {
    res.send('PATCH request to the resource');
});

app.options('/resource', (req, res) => {
    res.send('OPTIONS request to the resource');
});

app.head('/resource', (req, res) => {
    res.send('HEAD request to the resource');
});
```

#### Middleware in Express.js

Middleware functions are essential for performing tasks such as logging, authentication, request validation, and error handling.

##### Types of Middleware

1. **Application-level Middleware**
   - This middleware is bound to the entire application.
   - Example:
     ```javascript
     app.use((req, res, next) => {
         console.log('Request received at: ', new Date());
         next(); // Pass control to the next middleware or route handler
     });
     ```

2. **Router-level Middleware**
   - This middleware is bound to a specific router instance and is used when you have modularized routing logic.
   - Example:
     ```javascript
     const router = express.Router();

     router.use((req, res, next) => {
         console.log('Router-level middleware');
         next();
     });

     router.get('/profile', (req, res) => {
         res.send('User Profile');
     });

     app.use('/user', router);
     ```

3. **Error-handling Middleware**
   - Error-handling middleware has four arguments: `(err, req, res, next)`. It is used to catch errors from route handlers and other middleware.
   - Example:
     ```javascript
     app.use((err, req, res, next) => {
         console.error(err.message);
         res.status(500).send('Internal Server Error');
     });
     ```

4. **Built-in Middleware**
   - Express includes some built-in middleware, such as `express.json()`, `express.urlencoded()`, and `express.static()`.
   - Example:
     ```javascript
     app.use(express.json()); // Parse incoming JSON payloads
     app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data
     ```

5. **Third-party Middleware**
   - You can use third-party middleware like **morgan** for logging and **cookie-parser** for parsing cookies.
   - Example:
     ```javascript
     const morgan = require('morgan');
     app.use(morgan('dev')); // Log HTTP requests
     ```

#### Common Use Cases for Middleware

- **Logging**: Capture request and response details for debugging and monitoring.
  ```javascript
  app.use((req, res, next) => {
      console.log(`${req.method} ${req.url}`);
      next();
  });
  ```

- **Authentication**: Ensure a user is authenticated before allowing access to certain routes.
  ```javascript
  const isAuthenticated = (req, res, next) => {
      if (req.isAuthenticated()) {
          return next();
      }
      res.redirect('/login');
  };

  app.get('/dashboard', isAuthenticated, (req, res) => {
      res.send('Welcome to the dashboard!');
  });
  ```

- **Error Handling**: Global error handler to catch and handle errors.
  ```javascript
  app.use((err, req, res, next) => {
      console.error(err.message);
      res.status(500).send('Internal Server Error');
  });
  ```

#### Conclusion

Express.js is an incredibly powerful and flexible framework for building web applications and APIs with Node.js. It simplifies routing, middleware management, and error handling, making it a go-to framework for many developers. Whether you're building a simple web server or a complex RESTful API, Express makes the process easier and more efficient.