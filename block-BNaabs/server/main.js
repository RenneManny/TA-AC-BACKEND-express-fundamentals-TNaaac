const express = require('express');
const app=express();
// adding roter middleware
app.use(express.json());
app.use(express.urlencoded)
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/hello.htm");
});
app.get("/new",(req,res)=>{
    res.sendFile(__dirname+"/form.htm");
})
app.post('/new', (req, res) => {
    const formData = req.body;
    res.send(`Form submitted with data: ${JSON.stringify(formData)}`);
});
app.listen(3000);
