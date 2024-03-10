// Q. Write code to add express.json middleware

// - send json data from postman using POST http method on '/json' route.
// - console.log(req.body) to see all json data in console on a POST route on '/json'.
const express = require('express');
const app=express();
// creating middleware
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("public"))
app.post("/json",(req,res)=>{
    console.log(req.body)
    res.send("Hello World!");
})
// Q. Add express.urlencoded as middleware

// - send form data from postman on `/contact` route.
// - Access it using req.body on `/contact` route in our server

app.post("/contact",(req,res)=>{
    console.log(req.url);
    console.log(req.body)
});
app.get("/images",(req,res)=>{
    res.send("Hello World")
})
// Q. add express.static() as middleware

// - use `public` directory for static assets
// - Add images in public to
//   - public -> images -> img1.jpg
//   - public -> images -> img2.jpg
// - now request from browser on `/images/img1.jpg`
// - see whether img1.jpg is being served or not ?

app.listen(3000,()=>{
    console.log("Am listening at port 3k")
})