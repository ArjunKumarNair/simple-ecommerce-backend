const productController = require('../controllers/productController');

function productRoutes(fastify, options, done) {
    fastify.get('/', async (request, reply) => {
        return { hello: 'world' }
      })

    fastify.get('/products', async (request, reply) => {
        await productController.getProducts(request, reply);
    });

    fastify.get('/products/:id', async (request, reply) => {
        await productController.getProductById(request);
    });

    fastify.delete('/products/:id', async (request, reply) => {
        await productController.deleteProduct(request, reply);
    });

    fastify.put('/products/:id', async (request, reply) => {
        await productController.updateProduct(request, reply);
    });

    fastify.post('/createProduct', async (request, reply) => {
        try {
            await productController.createProduct(request, reply);
        } catch (error) {
            reply.status(500).send({ error: 'Internal server error' });
        }
    });

    done();
}

module.exports = productRoutes;
