const productService = require('../services/productService');


async function getProducts(request, reply) {
    try {
        const queryParams = request.query;
        console.log("Query Params", queryParams);
        const products = await productService.getProducts(queryParams);
        reply.send(products);
    } catch (error) {
        reply.status(404).send({ error: error.message });
    }
}

async function getProductById(request, reply) {
    try {
        const productId = request.params.id;
        console.log("Product ID", productId);
        const product = await productService.getProductById(productId);
        reply.send(product);
    } catch (error) {
        reply.status(404).send({ error: error.message });
    }
}

async function deleteProduct(request, reply) {
    try {
        const productId = request.params.id;
        console.log("Product ID", productId);
        await productService.deleteProduct(productId);
        reply.send({ message: 'Product deleted successfully' });
    } catch (error) {
        reply.status(404).send({ error: error.message });
    }
}

async function updateProduct(request, reply) {
    try {
        const productId = request.params.id;
        const productData = request.body;
        await productService.updateProduct(productId, productData);
        reply.send({ message: 'Product updated successfully' });
    } catch (error) {
        reply.status(404).send({ error: error.message });
    }
}

async function createProduct(request, reply) {
    try {
        const productData = request.body;
        await productService.createProduct(productData);
        reply.send({ message: 'Product created successfully' });
    } catch (error) {
        reply.status(400).send({ error: error.message });
    }
}

module.exports = {
    getProducts,
    getProductById,
    deleteProduct,
    updateProduct,
    createProduct
};