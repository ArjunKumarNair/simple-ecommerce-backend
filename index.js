const fastify = require('fastify')(
    {
        logger: true
    }
);

// Import routes
const productRoutes = require('./routes/productRoutes');

// Register routes
fastify.register(productRoutes);

// Run the server!
fastify.listen({ port: 3000 }, function (err, address) {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
    // Server is now listening on ${address}
  })
