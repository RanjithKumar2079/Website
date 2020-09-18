var express = require("express");
var app = express();
var mongoose=require("mongoose");
var request = require("request");
var bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({extended: true}));
mongoose.connect("mongodb://localhost/person", {useNewUrlParser: true,useUnifiedTopology : true});
var campgroundschema = new mongoose.Schema({
    name : String,
    image : String,
    description : String
});
var camp = mongoose.model("camp",campgroundschema);

app.set("view engine","ejs");


app.get("/",function(req,res){
    res.render("home");
});

app.get("/campground",function(req,res){
    camp.find({},function(err,data){
        if(err){
            console.log("Something went Wrong!!!");
        }else{
            res.render("campground",{camp : data});
        }
    });
});

app.post("/campground",function(req,res){
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newcamp = {name : name,image :image,description:desc};
    camp.create(newcamp,function(err,d){
        if(err){
            console.log(err);
        }else{
            res.redirect("/campground");
        }
    });
    
});

app.get("/campground/new",function(req,res){
    res.render("new");
});

app.get("/campground/:id",function(req,res){
    camp.findById(req.params.id,function(err,data){
        if(err){
            console.log(err);
        }else{
            res.render("show",{data : data});
        }
    });

});

app.listen(3000,function(req,res){
    console.log("Yelp Camp server Started!");
});