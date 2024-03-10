const express = require('express');
const parser=require('cookie-parser');
const morgan=require('morgan');
const app=express();
app.use(morgan('dev'));
// app.use(express.parser());
app.use(parser());
// 
app.use("/about",(req,res,next)=>{
    res.cookie('username',"Akhil Kumar");
next();
})

app.get("/",(req,res)=>{
    res.send("Hello World!");
})
app.get("/about",(req,res)=>{
    res.send("About Page");
})
app.listen(3000,()=>{
console.log("Am running at port 3k");
})