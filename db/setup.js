const db = connect('mongodb://localhost:27017/todos');

db.users.drop();
db.boards.drop();

db.createCollection('users', {
	validator: {
		$jsonSchema: {
			bsonType: 'object',
			required: ['name', 'email', 'password'],
			properties: {
				name: {
					bsonType: 'string',
					description: 'must be a string and is required',
				},
				email: {
					bsonType: 'string',
					description: 'must be a string and is required',
				},
				password: {
					bsonType: 'string',
					description: 'must be a string and is required',
				},
			},
		},
	},
});
