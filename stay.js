const express  = require("express")
const app = express()
const bodyparser  = require('body-parser')
const stay = require('./routes/stay.js')
app.use(stay)

var  ITEM =[];

var MongoClient = require('mongodb' , {useUnifiedTopology: true}).MongoClient;
app.use(express.urlencoded({extended : false}));
app.set('view engine' , 'ejs');
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"))


app.post('/next' , function(req , res){

    var url = "mongodb://localhost:27017";
 
    MongoClient.connect(url, function(err, client) {
     var db = client.db('stay_at_home');

     var doc = { 
         name: req.body.name,
         tel: req.body.tel, 
         mail: req.body.mail,
         num: req.body.num,
         namecomp: req.body.namecomp,
         field: req.body.field,
         nameman: req.body.nameman,
         licensed: req.body.licensed};
     
     db.collection("sign_up").insertOne(doc, function(err, res) {
         if (err) Console.log("Data is not inserted");
     });
 });

 MongoClient.connect(url, function(err, client) {
   
    var db = client.db('zajel');
    db.collection("calendar").find().toArray(function(err, items) {
       if(err) Consle.log("Data is not defined")    
       res.render("profile" , {data:items});
       
});
   });
  
 })
 

 
app.listen (4444, function(){
    console.log('Server started in port 4444');
});
