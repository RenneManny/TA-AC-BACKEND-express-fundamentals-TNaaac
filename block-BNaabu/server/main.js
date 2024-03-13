const express = require('express');
const app=express();

app.get("/",(req,res)=>{
    res.send("This is contact page!");
})
app.get("/route",(req,res)=>{
  res.send("This is route");  
})
app.use((req,res,next)=>{
    if(req.url==="/admin"){
    return next("Unauthorised");
    }
    next();
})
// cutom middleware
app.use((req,res,next)=>{
    res.writeHead(404,{"content-type":"text/html"})
    res.write("<h2>Error Occured</h2>")
    res.end();
})
app.use((err, req, res, next) => {
    res.send(`<h2>${err}</h2>`);
  });
app.listen(3000,()=>{
    console.log("Server is listening at port 3000");
})