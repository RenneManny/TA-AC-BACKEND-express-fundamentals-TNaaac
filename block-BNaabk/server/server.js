const express = require('express');
const app=express();
app.get("/",(req,res)=>{
    res.send("This is index page");
})
app.get("/",(req,res)=>{
    res.send("This is about us page");
})
app.get("/private",(req,res)=>{
    res.send("This is Privacy Page")
})
app.listen(3000,()=>{
    console.log("Server listening on 3000");
})