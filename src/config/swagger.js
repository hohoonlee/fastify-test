exports.options = {
	routePrefix: '/documentation',
	exposeRoute: true,
	swagger: {
		info: {
			title: 'Fastify API',
			description: 'TEST fastify & swagger',
			version: '0.0.1'
		},
		externalDocs: {
			url: 'https://swagger.io',
			description: 'Fird More'
		},
		host: 'localhost:3300',
		schemes: ['http'],
		consumes: ['application/json'],
		produces: ['application/json']
	}
};