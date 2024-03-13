// writeCode

// Create a basic express server

// - add listener on port 4000
// - create a custom app level middleware which consoles request `url` and `method` and passes executio to next middleware in line.

const express = require('express');
const app=express();
// creating logger middleware
function logger(req,res,next){
    console.log(req.url);
    console.log(req.method);
    next()
}
app.use(logger)

app.get("/",(req,res)=>{
    res.send("This is insex page");
});

app.listen(4000,()=>{
    console.log("AM listening on port 4000");
})