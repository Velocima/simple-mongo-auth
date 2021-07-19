const { MongoClient } = require('mongodb');

async function init() {
	const connectionUrl = process.env.DB_CONNECTION;
	const dbName = process.env.DB_NAME;
	const client = new MongoClient(connectionUrl);
	console.log('connected to database');
	return client.db(dbName);
}

module.exports = init;
