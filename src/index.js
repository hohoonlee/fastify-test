const swagger = require('./config/swagger');
const routes = require('./route.js');
const fastify = require('fastify')({
	logger: true
});
fastify.register(require('fastify-swagger'), swagger.options);

fastify.get('/', async (req, res) => {
	return {hello: 'world'};
});

routes.forEach(r => fastify.route(r));

const start = async() => {
	try {
		const port = process.env.PORT || 3300;
		await fastify.listen(port, '0.0.0.0');
		fastify.swagger();
		fastify.log.info(`Server Start on ${fastify.server.address().port}`);
	}catch(e) {
		fastify.log.error(e);
		process.exit(1);
	}
};

start();