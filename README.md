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

``npm run server``

## Instructions to Import into Postman:

```
  {
	"info": {
		"_postman_id": "c9d58980-285f-4628-a6c3-a3bdac2b5780",
		"name": "Recipe API",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "37641715"
	},
	"item": [
		{
			"name": "Get All Recipes",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:5002/?page=1&limit=5",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "5002",
					"path": [
						""
					],
					"query": [
						{
							"key": "page",
							"value": "1"
						},
						{
							"key": "limit",
							"value": "5"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "Get Recipe by ID",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:5002/67f4f0c1a0557c1babc984c1",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "5002",
					"path": [
						"67f4f0c1a0557c1babc984c1"
					]
				}
			},
			"response": []
		},
		{
			"name": "Create a New Recipe",
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "Content-Type",
						"value": "application/json"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"name\": \"Spaghetti Bolognese\",\n  \"ingredients\": \"Spaghetti, ground beef, tomatoes, onion, garlic\",\n  \"instructions\": \"Cook pasta. Brown meat. Mix with sauce. Serve.\",\n  \"category\": \"Dinner\",\n  \"prepTime\": 15,\n  \"cookTime\": 30,\n  \"servings\": 4\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:5002/",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "5002",
					"path": [
						""
					]
				}
			},
			"response": []
		},
		{
			"name": "Update a Recipe",
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "Content-Type",
						"value": "application/json"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"name\": \"Spaghetti Bolognese Deluxe\",\n  \"ingredients\": \"Spaghetti, beef, tomatoes, garlic, onion, herbs\",\n  \"instructions\": \"Cook everything properly and serve hot.\",\n  \"category\": \"Dinner\",\n  \"prepTime\": 20,\n  \"cookTime\": 40,\n  \"servings\": 5\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:5002/67f4f0c1a0557c1babc984c1",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "5002",
					"path": [
						"67f4f0c1a0557c1babc984c1"
					]
				}
			},
			"response": []
		},
		{
			"name": "Delete a Recipe",
			"request": {
				"method": "DELETE",
				"header": [],
				"url": {
					"raw": "http://localhost:5002/67f4f0c1a0557c1babc984c1",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "5002",
					"path": [
						"67f4f0c1a0557c1babc984c1"
					]
				}
			},
			"response": []
		}
	]
}
```

1.Copy the JSON: Copy the entire JSON content provided above.

2.Open Postman: Launch the Postman application on your computer.

3.Import Collection:

  - Click on the "Import" button located at the top left corner of the Postman interface.

  - In the Import window, select the "Raw Text" tab.

  - Paste the copied JSON content into the text area.

  - Click on the "Import" button to import the collection.

4. Access the Collection: After importing, you will see a new collection named "Recipe API" in the Collections sidebar.

