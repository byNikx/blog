const MongoClient = require('mongodb').MongoClient;
const test = require('assert');
// Connection url
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'admin';
// Connect using MongoClient
MongoClient.connect(url, { useNewUrlParser: true }, function (err, client) {
    // Use the admin database for the operation
    const adminDb = client.db(dbName).admin();
    // List all the available databases
    adminDb.listDatabases(function (err, dbs) {
        console.log(dbs.databases);
        test.equal(null, err);
        test.ok(dbs.databases.length > 0);
        client.close();
    });
});