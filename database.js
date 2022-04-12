var mongo = require('mongodb').MongoClient;
var url = "mongodb://admin:admin@localhost:27017";

// creating collection
// mongo.connect(url,(err,db)=>{
//     if (err) throw err;
//     var dbo = db.db("node");
//     console.log("Databse created");
//     dbo.createCollection("customers", (err,res)=>{
//         if (err) throw err;
//         console.log("Collection created");
//         db.close();
//     });
// });

// inserting one document
// mongo.connect(url,(err,db)=>{
//     if (err) throw err;
//     var dbo = db.db("node");
//     console.log("Databse created");
//     var dataObj = { _id: 07, name: "esehi", address: "duniya"};
//     dbo.collection("customers").insertOne(dataObj, (err,res)=>{
//         if (err) throw err;
//         console.log("Document inserted");
//         db.close();
//     });
// });

// inserting many document
// mongo.connect(url,(err,db)=>{
//     if (err) throw err;
//     var dbo = db.db("node");
//     console.log("Databse created");
//     var dataObj = [{ name: "test", address: "surat" },
//                     { name: "demo", address: "bombay" },
//                     { name: "kuchbhi", address: "delhi" }];
//     dbo.collection("customers").insertMany(dataObj, (err,res)=>{
//         if (err) throw err;
//         console.log(res.insertedCount + " document inserted");
//         console.log("Result: "+res);
//         db.close();
//     });
// });

//find one document
// mongo.connect(url,(err,db)=>{
//     if (err) throw err;
//     var dbo = db.db("node");
//     dbo.collection("customers").findOne({}, (err,res)=>{
//         if (err) throw err;
//         console.log("Result: "+res);
//         for (const key of Object.keys(res)) {
//             console.log(res[key]);
//         }
//            db.close();
//     });
// });

//find all document
// mongo.connect(url,(err,db)=>{
//     if (err) throw err;
//     var dbo = db.db("node");
//     dbo.collection("customers").find({}).toArray((err,res)=>{
//         if (err) throw err;
//         console.log(res);
//         db.close();
//     });
// });



