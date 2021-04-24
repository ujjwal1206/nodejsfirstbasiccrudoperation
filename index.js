const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017';

app.get('/login', function(req, res) {
    res.redirect('/signin.html');
});

app.get('/signup', function(req, res) {

    res.redirect('/signup.html');
});


app.post('/loginrq', function(req, res) {

    if (req.body.nm === "" || req.body.pwd === "") {
        throw err;
    } else {
        MongoClient.connect(url, function(err, client) {
            if (err) throw err

            console.log("Connected");
            var data = {
                username: req.body.nm,
                passowrd: req.body.pwd
            };
            db = client.db('myapp');
            db.collection('users').findOne(data, function(err1, res1) {
                if (err1) throw err1

                console.log("data found");
                client.close();
            });
            client.close();
        });
        res.redirect('/data1.html');
    }


});

app.post('/signupreq', function(req, res) {

    if (req.body.first1 === "" || req.body.second === "" || req.body.username === "" || req.body.pass === "") {
        //  res.alert("Nothing can be empty");
        throw err;
    } else {
        MongoClient.connect(url, function(err, client) {
            if (err) throw err

            console.log("Connected");
            var data = {
                firstname: req.body.first1,
                lastname: req.body.second,
                username: req.body.username,
                password: req.body.pass
            };
            db = client.db('myapp');
            db.collection('users').insertOne(data, function(err, res1) {
                if (err) {
                    throw err;
                }
                console.log('data inserted');

                client.close();
            });

            client.close();
        })
        res.redirect('/signin.html');
    }
});


app.listen(3000, function() {
    console.log("Started at 3000");
});