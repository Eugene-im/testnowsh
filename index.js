const express = require('express');
const app = express();

app.listen(8000);
app.use(express.static('public'));

app.get('/h_*',function(req, res){
    console.log(req);
    res.send(req.url + " asfdgdfgh ");
})

// const bodyParser = require('body-parser')
// var urlencodedParser = bodyParser.urlencoded({ extended: false });

// app.get('/*', urlencodedParser,function(req, res){
//     console.log("/* post");
//     // var dat = new Date();
//     console.log(req);
//     res.send(req.url + " asfdgdfgh " + req.headers["user-agent"]);
// })
// console.log("/* post");
// var dat = new Date();
