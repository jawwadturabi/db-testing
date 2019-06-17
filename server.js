// var rq = require('request');
// const express = require("express");
// const bodyParser = require("body-parser");
// const app = express().use(bodyParser.json());
// const baseUrl = "https://usil.instructure.com/api/v1/"
// let file;
// app.get("/webhook/:usId/:courseId", (request, response) => {
//     var intent = request.params
//     console.log("request is : ", intent);
//     var usId = request.params.usId
//     var courseId = request.params.courseId
//     var options = {
//         url: baseUrl + "users/" + usId + "/courses/" + courseId + "/assignments",
//         auth: {
//             'bearer': '11286~cKNZP8SsHdUgk2vfmXGV0J3mfKGe3uyuv664oinBASOMr3MfxhDx5vZ9nNnrniG4'
//         }
//     };

//     function callback(error, _res, body) {
//         if (!error && response.statusCode == 200) {
//             var info = JSON.parse(body);
//             console.log("info is: ", info)
//             console.log("body is : ", info[1].id)
//             if (error) {
//                 console.log('error is:', error);
//                 response.send({
//                     messages: {
//                         "text": "Something went wrong please try again later"
//                     }
//                 })
//             }
//             else {
//                 if (body) {
//                     let file=[];
//                     info.filter((e) => {
//                         console.log("id is : ", e.id)
//                         console.log(e.name)
//                         console.log(e.created_at)
//                         file.push(
//                             `${e.name}`,
//                         )
//                     })
//                     console.log("file is : ", file)
//                     response.send(
//                         "data added"
//                         // data(body)
//                     )
//                 }
//                 else {
//                     response.send({
//                         "messages": [
//                             {
//                                 "text": "You are not enroll in any course",
//                                 "quick_replies": [
//                                     {
//                                         "title": "Move back",
//                                         "block_names": ["Principal"]
//                                     },
//                                     {
//                                         "title": "to the welcome",
//                                         "block names": ["welcome message"]
//                                     }
//                                 ]
//                             }
//                         ]
//                     })
//                 }
//             }
//         }
//     }
//     rq(options, callback);
// })
// const mongoose = require("mongoose");
// const dburi = "mongodb+srv://author:author123@cluster0-geoiq.mongodb.net/test?retryWrites=true";
// const express = require("express");
// const bodyParser = require("body-parser");
// const app = express().use(bodyParser.json());

// // mongoose.connect(dburi, { useNewUrlParser: true }).catch(err => {
// //     console.log("error occured", err);
// // });
// // mongoose.connection.on('error', function (err) {//any error
// //     console.log('Mongoose connection error: ', err);
// //     process.exit(1);
// // })
// // mongoose.connection.on("connected", () => {
// //     console.log("Connected with database");
// // });

// // mongoose.connection.on("disconnected", () => {
// //     console.log("Disconnected with database.");
// //     process.exit(1);
// // });

// // var userDetail = new mongoose.Schema(
// //     {
// //         Question: { type: [String], required: true },

// //     },
// //     { collection: "Questions" }
// // );
// // var model = new mongoose.model("Questions", userDetail);
// // var info = {
// //     Name: "Ahmed",
// //     id: "1234"
// // }
// // model.find({ id: info.id }).lean().then(data => {
// //     console.log("data is : ", data[0].Name)
// // })
let data2 = [
    // "abc","abd","acd"
    {
        id:12,
        _id: 321,
        name:"abc"
    },
    {
        id:12,
        _id: 3221,
        name:"abcd"
    },
    {
        id:13,
        _id: 322,
        name:"abd"
    },
    {
        id:14,
        _id: 323,
        name:"abe"
    },
    {
        id:12,
        _id: 32212,
        name:"abcde"
    }
]
// data2.push("sdf erf", "ert" , "op" )
// let data3 =[]
// for (let i in data2) {
//     let id = data2[i].id
//     let mongodbID = data2[i]._id
//     let name = data2[i].name
//     console.log("id is " + id + " mongodbID is " + mongodbID + " name is " + name)
// }
// data2.map(e=>{
//     data3.push({"text":"e.name:"+e.name})
//     console.log("id is ", e.id)
// })
// var b = data2.join('')
let indexes=[];
function getAllIndexes(arr, val ) {
    for (let i in arr ){
        if(arr[i].id==val)
        indexes.push(i);
    }
}
getAllIndexes(data2,12)
var b = indexes.join()
console.log("indexes is : ",b)
indexes.map(e=>{ data2[e].id ==12
    console.log("id is : ",data2[e].id)
    console.log("name is : ",data2[e].name) 
})

// index.push(data2.findIndex(p=>p.id=12))
// console.log("indexes are ",index)
// console.log("data 1 is : ",data2)
// let beta = {
//     message:[
//         {
//         "text":'"' + b + '"'
//     }
// ]
// }
// console.log("beta is : ",beta.message[0].text)

// //     var i;
// //      data.map((val)=>val.id === "420").map((val1)=>{
// //         if(val1=true)
// //         return i=0}
// //         )
// //     console.log("i is",i)
// //     if((data.filter((val)=>val.id === info.id).length) && (data.filter((val)=>val.Name === info.Name).length)){
// //         console.log("your data is same as before : ")
// //         // model.findOneAndUpdate({Name:"Owais"},{id: "12345"},{upsert:true},(err,data)=>{
// //         //     if(err) throw err
// //         //     else{
// //         //         console.log("updated data is : ",data)
// //         //     }
// //         // })
// //         }else{ console.log("diff id")

// //         }
// //  });


// // model.find({}).lean().then(data=>{
// //     console.log("find data is : ",data)
// //     data.forEach(element => {
// //         console.log("id is : ",element.Name)
// //     });
// // }).catch(err=>{
// // console.log("error is : ", err)
// // })
// // model.updateOne({},{Name : 'Ahmed'})
// if ("32" == 32)
//     console.log("string not effected")
// else
//     console.log("string effected")


// // {[

// // `What is the capital of Pakistan ?
// //     option 1 = karachi,
// //     option 2 = lahore,
// //     option 3 = Islamabad`,
// // `What is the name of Pakistani currency ? 
// //     option 1 = Dollar, 
// //     option 2 = Rupee,
// //     option 3 = Yen`,
// // `Who composed the verses of Pakistan national Anthem?
// //     option 1 = Nasir Kazmi,
// //     option 2 = Hafeez Jallandri,
// //     option 3 = Allama Iqbal`,
// // `Where did the first nuclear power plant in Pakistan was established? 
// //     option 1 = Chagi,
// //     option 2 = Mianwali,
// //     option 3 = quetta`,
// //     `Which peak is located in Karakorum Range? 
// //         option 1 = Nanga Patbat,
// //         option 2 = Hindu Kash,
// //         option 3 = K-2`,
// //     `Which percentage of the land of every country should be covered with forest according to international standards:
// //         option 1 = 50%,
// //         option 2 = 25%,
// //         option 3 = 15%`,
// //     `Which dam has been built on the Kabul River?
// //         option 1 = Warsak Dam,
// //         option 2 = Mangla Dam,
// //         option 3 = Tarbela Dam`,
// // `The length of Pakistan from North to South is?
// //     option 1 = 1400 km,
// //     option 2 = 1500 km,
// //     option 3 = 1600 km`,
// // `The first Rocket launched by Pakistan was?
// //     option 1 = Ghauri,
// //     option 2 = Rahbar,
// //     option 3 = Badar`,
// //     `How many lines are in national anthem?
// //         option 1 = 15,
// //         option 2 = 14,
// //         option 3 = 13`,
// // ]}
// //////

// //     [

// //     ]
// var info = {
//     Question: [
//         `World War I began in which year ?
//         option 1 = 1938,
//         option 2 = 1923,
//         option 3 = 1914`,
//         `Adolf Hitler was born in which country?
//         option 1 = France,
//         option 2 = Germany,
//         option 3 = Austria`,
//         `Who fought in the war of 1812?
//         option 1 = Arthur Wellsley,
//         option 2 = Napoleon,
//         option 3 = Andrew Jackson`,
//         `What is not one of the 7 Wonders of the Ancient World?
//         option 1 = The island of Atlantis,
//         option 2 = Pyramid of Egypt,
//         option 3 = The temple of Artemis`,
//         `Ancient Egypt was conquered in 30 B.C. by which Empire?
//         option 1 = Mongolian,
//         option 2 = Greek,
//         option 3 = Roman`,
//         `Which is considered as oldest civilization of the world ?
//         option 1 = Mesopotamian 
//         option 2 = Egyptain 
//         option 3 = Harappan`,
//         `Which among following is called "Gift of the Nile" ?
//         option 1 =China, 
//         option 2 =Egypt,
//         option 3 =Iraq`,
//         `Who is considered as the master of Greek comedy ?
//         option 1 = Aristophanes,
//         option 2 = Philip,
//         option 3 = Sophocles`,
//         `When ancient Olympic games first held ?
//             option 1 = 780 BC
//             option 2 = 790 BC
//         option 3 = 776 BC`,
//         `Rome was founded around ?
//         option 1 = 1000,
//         option 2 = 1200,
//         option 3 = 1400`
//     ]
// }
// // var saveData = new model(info);
// // saveData.save((err, mydata) => {
// //     if (err) {
// //         console.log("error is:", err);
// //     }
// //     else {
// //         console.log("save data is : ", mydata)
// //         return
//     }
// app.listen(3020, function () {
//     console.log("server is running")
// })
// // })
// // `The SI unit of charge is?
// //      option 1 = Ampere,
// //      option 2 = Ohm,
// //      option 3 = Coulomb`,
// //     `Milk contains amount of water?
// //      option 1 = 70%,
// //      option 2 = 80%,
// //      option 3 = 75%`,
// //     `Which is the outermost planet in the solar system?
// //      option 1 = Mercury,
// //      option 2 = Neptune,
// //      option 3 = Pluto`,
// //     `Very High Frequency (VHF) have wavelengths?
// //      option 1 = shorter,
// //      option 2 = longer,
// //      option 3 = longest`,
// //     `The lifespan of Red Blood Cells is __________ days?
// //      option 1 = 60,
// //      option 2 = 180,
// //      option 3 = 120`,
// //     `What did "x"3 mean in "x-rays"?
// //      option 1 = Star,
// //      option 2 = Unknown,
// //      option 3 = Cross`,
// //     `What is the scientific name of Laughing Gas?
// //      option 1 = Nitrous Oxide,
// //      option 2 = Carbon monoxide,
// //      option 3 = Sodium bicarbonate`,
// //     `In which year was Nobel Prizes awarded first?
// //      option 1 = 1905,
// //      option 2 = 1903,    
// //      option 3 = 1901`,
// //     `What is a young horse called?
// //      option 1 = Colt,
// //      option 2 = Foal,    
// //      option 3 = Hack `,
// //     `Which of the following countries is not the member of the Nuclear Suppliers Group?
// //      option 1 = Iran,
// //      option 2 = Canada,    
// //      option 3 = Argentina`   