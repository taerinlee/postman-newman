'use strict';
const express = require('express');
const newman = require('newman');

const app = express();
const PORT = 9090;

const collection = require('../src/Postman Echo.postman_collection.json');


const server = app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});

newman.run({
    collection,
    reporters: ['cli', 'json', 'html', 'emojitrain'],
}, async err => {
    if(err) { throw err; }
    console.log('collection run complete!');

    console.log('Server is closing..bye!');
    server.close();
    return process.exit(0);
});