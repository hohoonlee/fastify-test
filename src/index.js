const path 		= require('path');
const _ 		= require('underscore');
const fg 		= require('fast-glob');
const swagger 	= require('./config/swagger');
const fastify	= require('fastify')({
	logger: true
});
fastify.register(require('fastify-swagger'), swagger.options);

fastify.get('/', async (req, res) => {
	return {hello: 'world'};
});

const routerDir = 'src/router/';

const loadRouter = dir => {
	const routers = _.flatten(_.map(fg.sync([path.join(routerDir, '*.js')], {onlyFiles: true}), f => {
		return require(f.replace('src/', './'));
	}));
	_.each(routers, r => fastify.route(r));
};

const start = async() => {
	try {
		loadRouter(routerDir);
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