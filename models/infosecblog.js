const mongoose = require("mongoose");
const blogSchema = new mongoose.Schema({
    title:{
        type:String
    },
    meta_des:
    {
        type:String
    },
    meta_keywords:
    {
        type:String
    },
    name:{
        type:String
    },
    image:{
        type:String
    },
    description:{
        type:String
    },
    body:
    {
        type:String
    }
});

const Infosec = mongoose.model("Infosec",blogSchema);
module.exports = Infosec;

