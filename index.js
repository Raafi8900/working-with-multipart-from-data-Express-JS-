var express = require('express');
var multer=require('multer');
var multer=multer();


var app=express();
app.use(multer.array())
app.use(express.static('public'))



app.post('/',function(req,res){
    let JSONData= req.body;

    res.send(JSON.stringify(JSONData));
})


app.listen(7000, function () {
    console.log("Server running successfully on port 7000");
});