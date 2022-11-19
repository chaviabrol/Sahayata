const express = require("express");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

// mongoose.connect("", {useNewUrlParser: true});


// const complainSchema = new mongoose.Schema({
//     name: String,
//     compaint: String,
//     Phno: Number,
//     hostel:String,
//     RoomNo: Number,
//     Query: String
// });

// const Complain = mongoose.model("Complain", complainSchema);


app.get('/', function(req,res){
    res.render("home");
});

app.get('/wifi', function(req,res){
    res.render("wifi");
});

app.get('/carpenter', function(req,res){
    res.render("carpenter");
});

app.get('/electrician', function(req,res){
    res.render("electrician");
});

app.get('/helpers', function(req,res){
    res.render("helpers");
});

app.get('/plumber', function(req,res){
    res.render("plumber");
});

app.listen(process.env.PORT || 3000, function(){
    console.log("Server started successfully!!");
  })