var http = require('http');
var dt = require('./index');
var url = require('url');
var fs = require('fs');
var path = require('path');
var formidable = require('formidable');

//create server and get the details of url

// http.createServer(function(req, res){
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     // res.write(req.url);
//     var q = url.parse(req.url,true).query;
//     var text = q.year+" "+q.month;
//     res.end(text);
//     // res.end(dt.myDateTime());
// }).listen(8080);

//file system
fs.readFile(path.join(__dirname, 'text.txt'), 'utf8', (err, data) => {
// fs.readFile('text.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

  process.on('uncaughtException', err => {
    console.log(`Uncaught Error: ${err}`);
    process.exit(1);
  })

// var http = require('http');
// var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  // var q = url.parse(req.url, true).query;
  // var txt = q.year + " " + q.month;
  // res.end(txt);
  res.write('<br><input type="file" name="filetoupload">');
  res.write('<br><input type="submit">');
  res.end();
}).listen(4200);

// http.createServer((req, res) =>{
//   res.writeHead(200,{'Content-Type': 'test/html'});
//   res.write('<form>');
//   res.write('<input type="file" name="filetoupload">');
//   res.write('</form>');
//   return res.end();
// }).listen(4200);