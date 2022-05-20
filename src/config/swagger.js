exports.options = {
	routePrefix: '/documentation',
	exposeRoute: true,
	swagger: {
		info: {
			title: 'Fastify API',
			description: 'TEST fastify & swagger',
			version: '0.0.1'
		},
		host: 'localhost:3300',
		schemes: ['http'],
		consumes: ['application/json'],
		produces: ['application/json'],
		tags: [
			{name:'test', description:'실제 사용하지 않는 테스트용 API'}
		]
	},
	transform: ({schema, url}) => {
		// const {
		// 	params,
		// 	body,
		// 	querystring,
		// 	headers,
		// 	response,
		// 	...transformedSchema
		// } = schema;

		// let transformedUrl = url;

		console.log(schema, url);
		return {schema, url};
	}
};