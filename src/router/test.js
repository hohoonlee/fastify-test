const routes = [
	{
		method: 'GET',
		url: '/app/test/:id',
		schema: {
			description: 'TEST !!!!',
			tags: ['test'],
			headers: { $ref: 'defaultHeader#' },
			params: {
				type: 'object',
				properties: {
					id: {type: 'string'}
				}
			},
			query: {
				type: 'object',
				required: ['ver'],
				properties: {
					ver: {type: 'string', description:'버전'}
				}
			},
			response: {
				200: {
					description: 'Success Response',
					type: 'object',
					properties: {
						id: {type: 'string'}
					}
				}
			}
		},
		handler: async (req, res) => {
			console.log('req:' + req.param.id)
			return {id:req.params.id + (req.query.ver || 'X')};
		},
		errorHandler: async (error, req, res, done) => {
			res.send({error:'4XX'});
		}
	}
];

module.exports = routes;