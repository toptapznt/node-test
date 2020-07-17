const express = require("express");
const app = express();

app.get("/",function(req,res){
    res.send("Hello from docker");
})

app.listen(3000,function(){
    console.log("app listing on 3000");
});