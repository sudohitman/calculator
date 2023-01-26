const express=require("Express");
const app=express();

const bodyparser=require("body-parser");
app.use(bodyparser.urlencoded({extended:true}));


app.get("/", function(req,res){
    //res.send("HEllo WOrld");
    res.sendFile(__dirname+"/index.html");
});

app.post("/", function(req,res){
    var w1=Number(req.body.weight);
    var h1=Number(req.body.height);
    var ans=w1/(h1*h1);
    res.send("Your BMI is "+ans);

});

app.listen(process.env.PORT || 3000 ,function(){
    console.log("Calculator server is starting at port 3000");
});