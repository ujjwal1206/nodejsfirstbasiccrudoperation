var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017'


MongoClient.connect(url, function(err, client) {
    if (err) throw err

    console.log("Connected");
    var data = {
        firstname: "asdf",
        lastname: "dfgh",
        username: "user2",
        password: "pass3"
    };
    db = client.db('myapp');
    db.collection('users').insertOne(data, function(err, res) {
        if (err) {
            throw err;
        }
        console.log('data inserted');
        client.close();
    });

    client.close();
})