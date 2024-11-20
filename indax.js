const http = require("http");
const port = 8000;

const portHandler = (req ,res)=>{
    res.write (`<h1 style="color:red" >welcome to our server </h1>`);
    res.end();
};
 const server =http.createServer(portHandler);

 server.listen(port, (err)=>{
    err ? console.log(err) : console.log("server started on port" + port);
 });
 