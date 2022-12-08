const express = require("express");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb+srv://admin-chavi:Test-123@cluster0.4syqf.mongodb.net/googlesheetsdb", {useNewUrlParser: true});


const complainSchema = new mongoose.Schema({
    issue:String,
    hostel_assigned: String,
    block : String,
    name: String,
    entry_num: String,
    room_num: Number,
    phone_num: Number,
    additional_query: String
});
const userSchema = new mongoose.Schema({
    email : String,
    password: String
})
const sahayata_records = mongoose.model("sahayata_records", complainSchema);
const User = mongoose.model("user",userSchema);

app.get('/', function(req,res){
    res.render("home");
});

app.get('/admin',function(req,res){
    sahayata_records.find({},function(err,foundItems){
        res.render("admin",{newListItems: foundItems});
    });
    
});

app.post("/delete",function(req,res){
    const checkedItemId = req.body.checkbox;

    sahayata_records.findByIdAndRemove(checkedItemId,function(err){
        if(!err){
            res.redirect("/admin");
        }
        
    });
});


app.get('/login',function(req,res){
    res.render("login",{check : ""});
});

app.post('/login',function(req,res){
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({email:email},function(err,foundUser){
        if(err){
            console.log(err);
        }
        else{
            if(foundUser){
                if(foundUser.password == password){
                    res.redirect("/admin");
                }
                else{
                    res.render('login',{check:"Invalid Password"});
                }
            }
            else{
                res.render('login',{check:"Invalid Username"});
            }
        }
    });


});
const port = 3000;

app.listen(process.env.PORT || 3000, function(){
    console.log(`Server started successfully!! ${port} `);
  })