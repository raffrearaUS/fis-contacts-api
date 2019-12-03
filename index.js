'use strict';

var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');

var port = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());

var contacts = [];

app.get('/contacts', (req, res, next) => {
    console.log('get');
    res.send(contacts);
});

app.post('/contacts', (req, res, next) => {
    console.log('post');
    contacts.push(req.body);
    res.sendStatus(201);
});

app.listen(port, () => {
    console.log('App running');
})