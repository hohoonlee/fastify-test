const list = [
	{
		$id: 'defaultHeader',
		type: 'object',
		required: ['authorization'],
		properties: {
			'authorization': {type: 'string', pattern:'^Bearer [\\w]+'}
		}
	}
];

module.exports = list;