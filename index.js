// console.log("!!!")

//CJS
// user = {
//     name: "user",
//     email: "user@gmail.com"
// }

// module.exports = user;

//ES6
// export function user() {
//     console.log("sedff");
// }

// exports.myDateTime = function(){
//     return Date();
// }

const mongoose = require('mongoose');
mongoose.connect('mongodb://admin:admin@localhost/node');

var db = mongoose.connection;
db.on('error', console.error.bind(console,'connection error:'));

db.once('open', function(){
    console.log("database connected.")
});