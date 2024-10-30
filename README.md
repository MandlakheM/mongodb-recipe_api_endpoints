## Recipe App API
This project is a RESTful API for managing recipes using Node.js, Express, and MongoDB. The API supports operations like creating, retrieving, updating, and deleting recipes. Pagination and error handling are also implemented to manage large datasets efficiently.

A secure REST API for recipe management with Role-Based Access Control (RBAC) built using Node.js, Express, and MongoDB.

## Features

CRUD Operations: Create, Read, Update, and Delete recipes.

Pagination: Efficient handling of large datasets with page size and page number query parameters.

Validation: Input validation for required fields, data types, and custom rules.

Error Handling: Informative error messages returned to the client.

MongoDB: Data persistence using MongoDB and Mongoose.

## User Authentication

Secure user registration and login
JWT-based authentication
Password hashing using bcrypt
Email validation


Role-Based Access Control (RBAC)

Two user roles: Admin and User
Granular permission system
Permission-based route protection
Automatic permission assignment based on roles


Recipe Management

Create new recipes (Admin only)
View recipes (All authenticated users)
Update recipes (Admin only)
Delete recipes (Admin only)

## Tech Stack
Node.js: JavaScript runtime environment.

Express: Web framework for Node.js.

MongoDB: NoSQL database for storing recipes.

Mongoose: Object Data Modeling (ODM) library for MongoDB.

Dotenv: For managing environment variables.

## Installation
Clone the repository:

``git clone https://github.com/MandlakheM/mongodb-recipe_api_endpoints.git``

Install dependencies:

``npm install``

Set up MongoDB connection:

Create a .env file in the root of the project.
Add the following environment variables to ``.env``:

``MONGO_URI=mongodb://localhost:27017/recipe-app``

``PORT=5002``

Start the server:

``npm run dev``

## API Endpoints

Authentication

Admin User Login

POST /auth/login
Content-Type: application/json

{
  "email": "admin@test.com",
  "password": "Admin#1",
}

Register User

POST /auth/register
Content-Type: application/json

{
  "fullName": "John Doe",
  "email": "john@example.com",
  "password": "StrongPass1!",
}
