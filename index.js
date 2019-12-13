'use strict';

var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
var Datastore = require('nedb');

var port = process.env.PORT || 8080;
var DB_FILE_NAME = __dirname + "/contacts.json";

app.use(cors());
app.use(bodyParser.json());

var db = new Datastore({filename: DB_FILE_NAME, autoload: true});

app.get('/contacts', (req, res, next) => {
    console.log('get');
    db.find({}, (err, contacts) => {
        if (err) {
            console.log(err);
        } else {
            res.send(contacts.map((contact) => {
                delete contact._id;
                return contact;
            }));
        }
    });
});

app.post('/contacts', (req, res, next) => {
    console.log('post');
    db.insert(contact, (err, newContact) => {
        if (err) {
            console.log(err);
        } else {
            res.sendStatus(201);
        }
    });
});

app.put('/contacts/:id', (req, res, next) => {
    console.log('put');
    res.sendStatus(204);
})

app.listen(port, () => {
    console.log('App running');
})