// Reference link
// https://www.linkedin.com/pulse/newnan-postmans-superman-nodejs-mariam-mahmoud
// https://github.com/MariamMahmoud/Newman-demo
// https://www.npmjs.com/package/newman#using-reporters-with-newman
'use strict';
const express = require('express');
const newman = require('newman');

const app = express();
const PORT = 9090;

const collection = require('../src/PostmanTestCollection.postman_collection.json');
const environment = require('../src/Testing.postman_globals.json');


const server = app.listen(PORT, () => {
	console.log(`server is running on port ${PORT}`);
});

newman.run({
	collection,
	environment,
	reporters: ['cli', 'json', 'html', 'emojitrain'],
}, async err => {
	if(err) { throw err; }
	console.log('collection run complete!');

	console.log('Server is closing..bye!');
	server.close();
	// eslint-disable-next-line no-undef
	return process.exit(0);
});