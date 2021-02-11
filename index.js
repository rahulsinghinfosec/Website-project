var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
const mongoose = require("mongoose");
const session = require('express-session');
const passport = require('passport');
const LocalStratery = require('passport-local');
const flash = require('connect-flash');
const User = require('./models/user')
const AppError = require('./models/Apperror');
const sessionConfig = {
    secret:'thisisnotasecrettoknow',
    resave:false,
    saveUninitialized:true,
    coookie:{
        expires: Date.now() + 1000*60*60*24,
        httpOnly:true,
        maxAge:1000*60*60*24
    }
}
app.use(flash());
app.use(session(sessionConfig)); 
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"));
app.use(methodOverride('_method'));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStratery(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next) => {
    res.locals.currentUser = req.user;
    next();
})
//Database Schema
const Homepage = require("./models/homepage");
const Infosec = require("./models/infosecblog")

//Database
mongoose.connect("mongodb://localhost:27017/blog",{useNewUrlParser : true,useUnifiedTopology: true,useCreateIndex:true,useFindAndModify:true})
const db = mongoose.connection;
db.on("error",console.error.bind(console,"connection error"));
db.once("open",function(){
    console.log("connection open")
})

app.get("/",async(req,res) => {
    const files = await Homepage.find({})
    res.render("home.ejs",{files});
})

app.get("/home",function(req,res){
    res.redirect("/");
})

app.get("/security",function(req,res){
    res.render("security/home.ejs");
})
app.get("/security/introduction-to-malware",function(req,res){
    res.render("security/introduction-to-malware.ejs")
})
app.get("/security/virus-and-worms",function(req,res){
    res.render("security/virus-and-worms.ejs")
})
app.get("/security/ransomware-and-cryptomalware",function(req,res){
    res.render("security/ransomware-and-cryptomalware.ejs");
})
app.get("/security/trojan-horses-and-rat",function(req,res){
    res.render("security/trojan-horses-and-rat.ejs");
})
app.get("/security/rootkits",function(req,res){
    res.render("security/rootkits.ejs");
})
app.get("/security/keylogger",function(req,res){
    res.render("security/keylogger.ejs");
})
app.get("/security/adware-and-spyware",function(req,res){
    res.render("security/adware-and-spyware.ejs");
})
app.get("/security/bot-and-botnets",function(req,res)
{
    res.render("security/bot-and-botnets.ejs");
})
app.get("/security/logic-bomb",function(req,res){
    res.render("security/logic-bomb.ejs");
})
app.get("/security/phishing",function(req,res){
    res.render("security/phishing.ejs");
})
app.get("/security/tailgating-and-impersonation",function(req,res){
    res.render("security/tailgating-and-impersonation.ejs");
})

app.get("/security/denial-of-service",function(req,res){
    res.render('security/denial-of-service.ejs');
})
//Open networking page
app.get("/network",function(req,res){
    res.render("network/main.ejs");
})
app.get("/network/introduction-to-networks",function(req,res){
    res.render("network/introduction.ejs");
})
app.get("/network/osi-model",function(req,res){
    res.render("network/osimodel.ejs");
})
app.get("/network/7-layers",function(req,res){
    res.render("network/layers.ejs");
})
app.get("/network/physical-network-topology",function(req,res){
    res.render("network/physicaltopology.ejs");
})
app.get("/reverseEngineering",function(req,res){
    res.render("reverseEngineering/home.ejs");
})

app.get("/reverseEngineering/intro",function(req,res){
    res.render("reverseEngineering/intro.ejs");
})
app.get("/reverseEngineering/intro2",function(req,res){
    res.render("reverseEngineering/intro2.ejs");
})
app.get("/reverseEngineering/static-vs-dynamic-analysis",function(req,res){
    res.render('reverseEngineering/static-vs-dynamic-analysis.ejs');
})
app.get("/reverseEngineering/new",function(req,res){
    res.render("reverseEngineering/new.ejs");
})

app.get("/attacks",function(req,res){
    res.render("attacks/home.ejs");
})


app.get("/attacks/new",function(req,res){
    res.render("attacks/new.ejs");
})
app.get("/attacks/stages",function(req,res){
    res.render("attacks/stages.ejs");
})
app.get("/attacks/lfi",function(req,res){
    res.render("attacks/lfi.ejs");
})
app.get("/attacks/serialzation",function(req,res){
    res.render("attacks/serialization.ejs")
})
app.get("/attacks/json-web-tokens-jwt",function(req,res){
    res.render("attacks/jwt.ejs");
})
app.get("/attacks/information-disclosure",function(req,res){
    res.render("attacks/information-disclosure.ejs");
})
app.get("/attacks/os-command-injection",function(req,res){
    res.render("attacks/os-command-injection.ejs");
})

app.get("/attacks/blind-os-command-injection",function(req,res){
    res.render("attacks/blind-os-command-injection.ejs")
})

app.get("/attacks/code-injection",function(req,res){
    res.render("attacks/code-injection.ejs");
})
app.get("/attacks/cross-site-scripting",function(req,res){
    res.render("attacks/cross-site-scripting.ejs")
})
app.get("/attacks/reflected-cross-site-scripting",function(req,res){
    res.render("attacks/reflected-cross-site-scripting.ejs");
})
app.get("/attacks/stored-cross-site-scripting",function(req,res){
    res.render("attacks/stored-cross-site-scripting.ejs");
})
app.get("/attacks/dom-based-cross-site-scripting",function(req,res){
    res.render("attacks/dom-based-cross-site-scripting.ejs");
})

app.get("/linux",function(req,res){
    res.render("linux/home.ejs");
})
app.get("/linux/shell",function(req,res){
    res.render("linux/shells.ejs");
})
app.get("/linux/cheatsheet",function(req,res){
    res.render("linux/cheatsheet.ejs");
})
app.get("/linux/commands",function(req,res){
    res.render("linux/commands.ejs");
})
app.get("/windows",function(req,res){
    res.render("windows/home.ejs")
})

//For Infosec Blogs
app.get("/infosecblog",async(req,res,next) =>{
    const infosec = await Infosec.find({});
    if(!infosec)
    {
        next(new AppError('Error Occured','404'));
    }
    res.render("blogs/infosec.ejs",{infosec});
})

app.get("/infosecblog/new",function(req,res){
    if(!req.isAuthenticated()){
        res.redirect("/signin");
    }
    else{
        res.render("blogs/newinfosec.ejs");
    }
})
app.post("/infosecblog",async(req,res) =>{
    const newblog = new Infosec(req.body);
    await newblog.save();
    console.log(newblog);
    res.redirect("/infosecblog");
})
app.get("/infosecblog/:id", async(req,res,next) => {
    const {id} = req.params;
    const blog = await Infosec.findById(id);
    if(!blog)
    {
        next(new AppError('Blog not found. Please try again Later',404));
    }
    res.render("blogs/blog.ejs",{blog})
})
app.get("/infosecblog/:id/edit",async(req,res) => {
    if(!req.isAuthenticated()){
        res.redirect("/signin");
    }
   
        const {id} = req.params;
        const blog = await Infosec.findById(id);
        res.render("blogs/edit.ejs",{blog});

    
})
app.put("/infosecblog/:id",async(req,res,next)=>{
    const {id} = req.params;
    const blog = await Infosec.findByIdAndUpdate(id,req.body,{useFindAndModify:false,runValidators:true});
    if(!req.isAuthenticated()){
        res.redirect("/signin");
    }
    else{
        res.render("blogs/newinfosec.ejs");
    }
    if(!blog)
    {
        next(new AppError("Error Occured! Please Try Again Later",404));
    }
    console.log(blog._id);
    res.redirect("/infosecblog/"+blog._id);
})


app.get("/infosecblog/delete/:id",async(req,res,next)=>{
    const {id} = req.params;
    const deleteBlog = await Infosec.findByIdAndDelete(id);
    if(!deleteBlog)
    {
        next(new AppError('Error Occured! Please Try Again Later!',404));
    }
    res.redirect("/infosecblog");
})

app.get("/about-me",function(req,res){
    res.render("contact.ejs")
})

app.get("/contact-me",function(req,res){
    res.render("contact-me.ejs");
})

app.get("/google-dorks",function(req,res){
    res.render("dorks.ejs");
})

app.get("/cryptography",function(req,res){
    res.render("crypto.ejs");
})

app.get("/register",function(req,res){
    res.render("register.ejs");
})
app.post("/register",async(req,res,next)=>{
    const {email,username,password} = req.body;
    const user = new User({email,username,password});
    const registeredUser  = await User.register(user,password);
    if(!registeredUser)
    {
        next(new AppError('Error Occured. Please Try again Later!',404));
    }
    res.redirect("/");
})

app.get("/signin",function(req,res){
    res.render("signin.ejs");
})
app.post("/signin",passport.authenticate('local',{failureFlash:true,failureRedirect:'/signin'}),(req,res)=>{
    res.redirect('/');
})

app.get("/logout",function(req,res){
    req.logOut();
    res.redirect("/");
})

app.use((err,req,res,next) =>{
    const {status = 500, message = "Error Occured. Please Try Again Later."} = err;
    res.status(status).send(message);
})
// app.get("/*",function(req,res){
//     res.render("error.ejs");
// })

app.listen(3000,function(err){
    console.log("App listening on Port 3000");
})