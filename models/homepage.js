const mongoose = require("mongoose");
const homepageSchema = new mongoose.Schema({
    name : {
        type: String
    },
    image : {
        type: String
    },
    desc: {
        type: String
    },
    links:{
        type:String
    }
})

const Homepage = mongoose.model("Homepage",homepageSchema);

const objects = [
    {
        name:"Security",
        image:"https://cdn.pixabay.com/photo/2018/04/22/22/57/hacker-3342696_960_720.jpg",
        desc:"Computer security is the protection of computer systems and information harm,theft, and unauthorized use.",
        links:"security"
    },
    {
        name:"Networks",
        image:"https://cdn.pixabay.com/photo/2018/07/14/11/33/network-3537401_960_720.jpg",
        desc:"Computer Networks are an important part of Cybersecurity,which makes it even more susceptible to attacks. Therefore one must be well equiped with the knowledge of Networks. Learn more about Computer Networks by clicking on the Read Button.",
        links:"network"
    },
    {
        name:"Reverse Engineering",
        image:"https://cdn.pixabay.com/photo/2017/02/20/14/18/business-2082639__340.jpg",
        desc:"Reverse Engineering is decompilation of the application/program in order to get its source code malicious reasons or to find bugs.Learn more about Reverse Engineering by clicking on the Read button.",
        links:"reverseEngineering"
    },
    {
        name:"Web Attacks",
        image:"https://cdn.pixabay.com/photo/2016/03/27/18/54/technology-1283624__340.jpg",
        desc:"Websites are the face of a company/organization. Therefore it becomes the prime target of attackers. Learn more about it by clicking on the Read button.",
        links:"attacks"
    },
    {
        name:"Linux",
        image:"https://cdn.pixabay.com/photo/2016/11/07/12/08/cyber-security-1805632_960_720.png",
        desc:"Websites are the face of a company/organization. Therefore it becomes the prime target of attackers. Learn more about it by clicking on the Read button.",
        links:"linux"
    },
    {
        name:"Windows",
        image:"https://cdn.pixabay.com/photo/2018/02/04/02/35/windows-3128951_960_720.jpg",
        desc:"With over 36% devices running windows, be it mobile or computers, this is one of the most preferred (GUI) OS in general.",
        links:"windows"
    },
    {
        name:"Google Dorks",
        image:"https://cdn.pixabay.com/photo/2016/09/22/10/43/eye-1686932_960_720.jpg",
        desc:"Learn how to use Google Efficiently",
        links:"google-dorks"
    },
    {
        name:"Cryptography",
        image:"https://cdn.pixabay.com/photo/2015/12/13/15/31/cryptography-1091254_960_720.jpg",
        desc:"Learn about Cryptography,encoding,hashing and their applications in real life.",
        links:"cryptography"
    }
]

// Homepage.insertMany(objects);
module.exports = Homepage;

/*
//The contents of the homepage
var obj = {1:'Networks',2:'Reverse Engineering',3:'Web Attacks',4:'Linux',5:'Windows',6:'Google Dorks',7:'Cryptography'};
var obj1 = {1:"https://cdn.pixabay.com/photo/2018/07/14/11/33/network-3537401_960_720.jpg",2:"https://cdn.pixabay.com/photo/2017/02/20/14/18/business-2082639__340.jpg",3:"https://cdn.pixabay.com/photo/2016/03/27/18/54/technology-1283624__340.jpg",4:"https://cdn.pixabay.com/photo/2016/11/07/12/08/cyber-security-1805632_960_720.png",5:"https://cdn.pixabay.com/photo/2018/02/04/02/35/windows-3128951_960_720.jpg",6:"https://cdn.pixabay.com/photo/2016/09/22/10/43/eye-1686932_960_720.jpg",7:'https://cdn.pixabay.com/photo/2015/12/13/15/31/cryptography-1091254_960_720.jpg'}
var obj2 = {1:"Compupter Networks are an important part of Cybersecurity,which makes it even more susceptible to attacks. Therefore one must be well equiped with the knowledge of Networks. Learn more about Computer Networks by clicking on the Read Button.",
2:"Reverse Engineering is decompilation of the application/program in order to get its source code malicious reasons or to find bugs.Learn more about Reverse Engineering by clicking on the Read button.",
3:"Websites are the face of a company/organization. Therefore it becomes the prime target of attackers. Learn more about it by clicking on the Read button.",
4:"Beloning to the family of Unix-like operating systems, it is one of the most preferred OS in the infosec community. Learn More about it by clicking on the Read button.",
5:"With over 36% devices running windows, be it mobile or computers, this is one of the most preferred (GUI) OS in general.",
6:"Learn how to use Google Efficiently.",
7:'Learn about Cryptography and its applications in real life.'};
var links = {1:'network',2:'reverseEngineering',3:'attacks',4:'linux',5:'windows',6:'oogle-dorks',7:'cryptography'};

*/
