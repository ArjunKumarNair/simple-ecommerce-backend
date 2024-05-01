## About the Repository

### Built With

* Node.js
* Fastify
* Postgres
* Knex


## Getting Started

1. Navigate to the root directory.

2.  run npm install to install the necessary dependencies:

```bash
npm install
```

3. Create a  `config` folder and add a `knexfile.js` in the folder that contains the following:

```bash
module.exports = {
    development: {
        client: 'postgresql',
        connection: {
            host: 'localhost',
            user: 'your_username',
            password: 'your_password',
            database: 'products_database'
        },
        migrations: {
            directory: '../db/migrations',
        },
        seeds: {
            directory: '../db/seeds',
        },
    },
};
```

4. Run the migration file to create a table in the schema of the database specified in `knexfile.js` by executing the following command in terminal:

```bash
npx knex migrate:latest --env development --knexfile=config/knexfile.js
```

5. Run the seeds file to populate the table with some initial data by executing the following command in terminal:

```bash
npx knex seed:run --env development --knexfile=config/knexfile.js
```

6. Run the server by executing the following command in terminal
```bash
node index
```

7. To test the endpoints using postman, navigate to `1_postman_testing_script` folder to find the exported `Products_Backend_Endpoints.postman_collection` file that can be imported into your Postman workspace. In the next section, the test cases are specified.


## Test cases for testing endpoints

#### Get Products with name using pagination

* As there are 4 products with the name 'Smartphone' in the seed file, it can be tested on the GET `/products` endpoint as follows:
    * name=Smartphone&page=1&limit=2
    * name=Smartphone&page=2&limit=2

#### Get Single Product by ID

* The following test cases can be used on the GET `/products/:id` endpoint:
    *  ID that already exists in the table (eg. 1 as specified in `1_postman_testing_script` file)
    *  any other ID that doesn't exist in the table, in which case an error message appears

#### Delete Product by ID

* The following test cases can be used on the DELETE `/products/:id` endpoint:
    *  ID that already exists in the table (eg. 1 as specified in `1_postman_testing_script` file)
    *  any other ID that doesn't exist in the table, in which case an error message appears

#### Update Product by ID

* The following test cases can be used on the PUT `/products/:id` endpoint:
    *  ID that already exists in the table (eg. 10 as specified in `1_postman_testing_script` file)
    *  any other ID that doesn't exist in the table, in which case an error message appears

#### Create Product

* The following test cases can be used on the POST `/createProduct` endpoint:
    *  request body with name, category, price and/or images specified