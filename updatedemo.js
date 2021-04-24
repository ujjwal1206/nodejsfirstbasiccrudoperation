var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017'


MongoClient.connect(url, function(err, client) {


    var x = {
        username: "user1"
    };
    var y = {
        $set: {
            firstname: "admin12"
        }
    }
    db = client.db('myapp');
    db.collection('users').deleteOne(x, function(err, res) {
        if (err) {
            throw err;
        }
        console.log('updated');
        client.close();
    });
});