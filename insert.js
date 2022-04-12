const dbConnect = require('./mongodb');

const insert = async ()=>{
    const db = await dbConnect();
    const result = await db.insert(
        {name: "demo", address: "bombay"}
    );

    if(result.acknowledged){
        console.log(result.insertedCount+" data inserted");
    }else{
        console.log("Failed");
    }
}

insert();