## Recipe App API
This project is a RESTful API for managing recipes using Node.js, Express, and MongoDB. The API supports operations like creating, retrieving, updating, and deleting recipes. Pagination and error handling are also implemented to manage large datasets efficiently.

## Features

CRUD Operations: Create, Read, Update, and Delete recipes.

Pagination: Efficient handling of large datasets with page size and page number query parameters.

Validation: Input validation for required fields, data types, and custom rules.

Error Handling: Informative error messages returned to the client.

MongoDB: Data persistence using MongoDB and Mongoose.

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
