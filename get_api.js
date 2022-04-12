const express = require('express');
const dbConnect = require('./mongodb');
const mongo = require('mongodb');
const app = express();
app.use(express.json());

app.get('/',async (req,resp)=>{
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data);
    resp.send(data);
});

// app.post('/', (req, res)=>{
//     console.log(JSON.stringify(req.body));
//     // res.send(req.body.name);
//   });

app.post('/', async (req,resp)=>{
    let data = await dbConnect();
    // console.log(req.body);
    // resp.send({name: 'post'});
    //     var dataObj = {
    //     "firstName":"ddddd",
    //     "middleName":"def",
    //     "lastName":"ghi",
    //     "bloodGroup":"B+",
    //     "dateOfBirth":"2002-09-20",
    //     "dateOfJoining":"2022-01-03",
    //     "gender":"male"
    //  }
    console.log(JSON.stringify(req.body));

    // console.log(req.body);
    let result = await data.insertOne(req.body);
    // resp.send(req.body);
    resp.send(JSON.stringify("Data inserted.")); 
});

//static data
// app.post('/',async (req,resp)=>{
//     let data = await dbConnect();
//     var dataObj = {
//         "firstName":"bbbbb",
//         "middleName":"def",
//         "lastName":"ghi",
//         "bloodGroup":"B+",
//         "dateOfBirth":"2002-09-20",
//         "dateOfJoining":"2022-01-03",
//         "gender":"male"
//      }
//     // var dataObj = {name: "esehi", address: "duniya"};
//     let result = await data.insertOne(dataObj,(err,res)=>{
//         if (err) throw err;
//         console.log("Document inserted");
//     });
//     // resp.send(req.body);
//     resp.send("Data inserted."); 
// });


app.put('/:name',async (req,resp)=>{
    let data = await dbConnect();
    let result = await data.updateOne(
        {name: req.params.name}, //condition 
        {$set: req.body} //set this where name = req.params.name (have to provide name in the URL)
    );
    resp.send("Data updated");
});

app.delete('/:id',async (req,resp)=>{
    id = req.params.id;
    id = (hex.test(id))? new mongo.ObjectId(id) : id;
    console.log(req.params.id);
    let data = await dbConnect();
    let result = await data.deleteOne(
        {_id: id}
    )
    // console.log(result);

    // resp.send(result);
    if (result.acknowledged) {
        resp.send("Data deleted.");
    } else {
        resp.send("Data is not deleted");        
    }
});

app.listen(5000);


