const { MongoClient } = require('mongodb');

var mongo = require('mongodb').MongoClient;
var url = "mongodb://admin:admin@localhost:27017";
// const dbName = 'node';
const dbName = 'employeeDB';
const client = new MongoClient(url);

async function dbConnect()
{
    let res = await client.connect();
    db = res.db(dbName);
    return db.collection('employees');
}

module.exports = dbConnect;