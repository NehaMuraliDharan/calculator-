
const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(request,response){
  response.sendFile(__dirname+"/index.html");
});
app.post("/",function(request,response){
  response.send("Thanks for your shit");
  response.body.num1;
});
console.log(request.body.num1);
app.listen(3000,function(){
  console.log("Just trust in me my dear");
});
