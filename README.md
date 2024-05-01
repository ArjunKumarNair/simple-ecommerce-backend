## About the Repository

## Built With

* Node.js
* Fastify
* Postgres
* Knex


## Getting Started

1. Navigate to the root directory.

Next, run npm install to install the necessary dependencies:

```bash
npm install
```

2. Create a  `config` folder and add a `knexfile.js` in the folder that contains the following:

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

3. Run the migration file to create a table in the schema of the database specified in `knexfile.js` by executing the following command in terminal:

```bash
npx knex migrate:latest --env development --knexfile=config/knexfile.js
```

4. Run the seeds file to populate the table with some initial data by executing the following command in terminal:

```bash
npx knex seed:run --env development --knexfile=config/knexfile.js
```

5. Run the server by executing the following command in terminal
```bash
node index
```

