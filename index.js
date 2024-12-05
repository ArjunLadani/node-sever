const express = require("express");
const port = 1005;

const app = express();

app.set ("view engine", "ejs");

app.use(express.urlencoded());

let arjun = [
    {id:1,name:"arjun", work:"work"},
   ]


app.get("/",(req, res)=>{
    res.render("index",{arjun});

});
app.post ("/addData",(req,res)=>{
    req.body.id = arjun.length + 1;
    arjun.push(req.body);
    res.redirect("/");
});
app.get( "/deleteData",(req,res)=>{
    let deleteRecord =arjun.filter((item) => item.id != req.query.id);
    arjun = deleteRecord;
    res.redirect("/")
});
app.get("/editData/:id",(req,res)=>{
    let singleData = arjun.find((item)=> item.id == req.params.id);
    res.render("edit",{singleData});
});
app.post("/updateData", (req,res)=>{
    arjun.forEach((arjun) => {
        if(arjun.id == req.body.id){
            (arjun.id = req.body.id),
            (arjun.name = req.body.name),
            (arjun.work = req.body.work);
        }else{
            arjun;
        }
        
    });
    res.redirect("/");
});
app.listen(port,(err)=> {
err ? console.log(err) : console.log("sever started on port " + port);
});