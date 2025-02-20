# Order System Backend

This is the backend for the **Order System**, built using **Node.js, Express, MongoDB**, and **JWT Authentication**. It provides APIs for user authentication, product management, and order processing.

## Features

- User Authentication (JWT-based login and registration)
- Product Management (Create, Read, Update, Delete)
- Order Management (Create Order, Fetch Orders)
- Secure API routes using JWT

## Technologies Used

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework for Node.js
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **jsonwebtoken** - JWT for authentication
- **bcryptjs** - Password hashing
- **dotenv** - Manage environment variables

## Installation

### Prerequisites

Ensure you have **Node.js** and **MongoDB** installed on your system.

### Steps to Set Up

1. Clone the repository:
   ```bash
   git clone https://github.com/AyushGhimire077/Ordersystem.git
   cd Ordersystem
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following:
   ```env
   PORT=4000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. Start the server:
   ```bash
   npm start
   ```

The server should now be running on `http://localhost:4000`.

## API Endpoints

### Authentication

- **POST** `/api/auth/register` - Register a new user
- **POST** `/api/auth/login` - Authenticate user and get JWT

### Product Management

- **POST** `/api/add-product` - Add a new product
- **GET** `/api/get-product` - Fetch all products
- **DELETE** `/api/delete-product/:id` - Delete a product

### Order Management

- **POST** `/api/create-order` - Create a new order
- **GET** `/api/all-orders` - Fetch all orders

## Project Structure

```
Ordersystem/
│-- models/          # Mongoose schemas
│-- routes/          # Express route handlers
│-- controllers/     # Business logic for API endpoints
│-- middleware/      # Middleware (authentication, etc.)
│-- config/          # Configuration files
│-- server.js        # Entry point
│-- package.json     # Dependencies and scripts
│-- README.md        # Project documentation
```

## Contributing

1. Fork the repository.
2. Create a new branch (`feature-branch`).
3. Commit changes.
4. Push to your fork and create a pull request.

---

### Author

**Ayush Ghimire**
GitHub: [AyushGhimire077](https://github.com/AyushGhimire077/)

