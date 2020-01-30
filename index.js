const express = require('express');
const app = express();

app.listen(3000)

app.get('/*', function(req, res){
    console.log("/* post");
    // var dat = new Date();
    res.end(req.body);
})