const pgp = require('pg-promise')();
const knexConfig = require('../config/knexfile.js');

const environment = process.env.NODE_ENV || 'development'; // Default to 'development' if NODE_ENV is not set
const knex = require('knex')(knexConfig[environment]);

const db = pgp(knex.client.connectionSettings);

async function getProducts(queryParams) {
    try {
        const { name, page, limit } = queryParams;
        const offset = (page - 1) * limit;

        let query = 'SELECT * FROM products';
        let params = [];

        if (name) {
            query += ' WHERE name ILIKE $1';
            params.push(`%${name}%`);
        }

        query += ` LIMIT $${params.length + 1} OFFSET $${params.length + 2}`;
        params.push(limit, offset);

        return await db.any(query, params);
    } catch (error) {
        throw new Error('Failed to fetch products: ' + error.message);
    }
}

async function getProductById(productId) {
    try {
        const product = await db.oneOrNone('SELECT * FROM products WHERE id = $1', productId);
        console.log("Product", product);
        if (!product) {
            throw new Error(`Product with ID ${productId} not found`);
        }
        return product;
    } catch (error) {
        if (error.message.startsWith('Product with ID')) {
            throw error;
        }
        else {
            // Handle other errors, such as database connection errors
            throw new Error(`Failed to retrieve product with ID ${productId}`);
        }
    }
}

async function deleteProduct(productId) {
    try {
        // Check if the product exists before deleting
        const existingProduct = await getProductById(productId);
        if (!existingProduct) {
            throw new Error(`Product with ID ${productId} does not exist`);
        }
        await db.none('DELETE FROM products WHERE id = $1', productId);
    } catch (error) {
        if (error.message.startsWith('Product with ID')) {
            throw error;
        }
        else {
            throw new Error(`Failed to delete product with ID ${productId}`);
        }
    }
}

async function updateProduct(productId, productData) {
    try {
        // Check if the product exists before deleting
        const existingProduct = await getProductById(productId);
        if (!existingProduct) {
            throw new Error(`Product with ID ${productId} does not exist`);
        }
        await db.none('UPDATE products SET name = $1, category = $2, price = $3, images = $4 WHERE id = $5',
            [productData.name, productData.category, productData.price, productData.images, productId]);
    } catch (error) {
        // Handle errors, e.g., product not found
        if (error.message.startsWith('Product with ID')) {
            throw error;
        }
        else {
            throw new Error(`Failed to update product with ID ${productId}`);
        }
    }
}

async function createProduct(productData) {
    try {
        await db.none('INSERT INTO products (name, category, price, images) VALUES ($1, $2, $3, $4)',
            [productData.name, productData.category, productData.price, productData.images]);
    } catch (error) {
        // Handle errors, e.g., validation error
        console.log(error);
        throw new Error('Failed to create product');
    }
}

module.exports = {
    getProductById,
    updateProduct,
    createProduct,
    getProducts,
    deleteProduct
};