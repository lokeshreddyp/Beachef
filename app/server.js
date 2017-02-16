// 'use strict';
//
// var port = 3000;
// var express = require("express");
// var nodemailer = require("nodemailer");
// var app = express();
// // load aws sdk
//
// // load aws sdk
// // var aws = require("aws-sdk");
// //
// // // load aws config
// // aws.config.loadFromPath('config.json');
// //
// // // load AWS SES
// // var ses = new aws.SES({apiVersion: '2010-12-01'});
//   app.use(express.static(__dirname ));
//
//
// 				// set the static files location /public/img will be /img for users
//
// // app.use(express.static(__dirname + '/lib'));
// /*
//     Here we are configuring our SMTP Server details.
//     STMP is mail server which is responsible for sending and recieving email.
// */
// var smtpTransport = nodemailer.createTransport("SMTP",{
//     service: "Gmail",
//     auth: {
//         user: "spandanavelaga06@gmail.com",
//         pass: "raja1993"
//     }
// });
// /*------------------SMTP Over-----------------------------*/
// // for all public requests try to use /app folder
// app.use("/public", express.static(__dirname + "/app"));
//
// // for all routes defined on client side send
// // entry point to the app
// // btw. changes of those routes on client side
// // are not supposed to hit server at all (!)
// app.use("/", function(req, res, next){
//     res.sendFile(__dirname + '/app/main.html');
// });
// /*------------------Routing Started ------------------------*/
//
// // server.use("/", function(req, res, next){
// //     res.sendFile(__dirname + '/index.html');
// // });
// // server.get('/',function(req,res){
// //     res.sendFile(path.join(__dirname +'/index.html'));
// //     app.use(express.static(__dirname));
// // });
// // server.get('/Home',function(req,res){
// //   res.sendFile(__dirname +'/modules/authentication/views/Login.html');
// // });
// // server.get('/tab',function(req,res){
// //   res.sendFile(__dirname +'/tab.html');
// // });
// // server.get('/AddCustomer',function(req,res){
// //
// // });
// // server.get('/index',function(req,res){
// //
//
// // });
//
// app.get('/dowork',function(req,res){
// console.log("Request received finally");
//   console.log("request is "+(req.query);
//
// });
//
// app.use('/send',function(req,res){
//   //  console.log("Request received");
//     var mailOptions={
//         to : req.query.conactEmail,
//         subject : req.query.Subject,
//         text : req.query.contactMsg
//     }
//     console.log(mailOptions);
//     smtpTransport.sendMail(mailOptions, function(error, response){
//      if(error){
//             console.log(error);
//         res.end("error");
//      }else{
//             console.log("Message sent: " + response.message);
//         res.end("sent");
//          }
// });
// });
//
// /*--------------------Routing Over----------------------------*/
//
// app.listen(3000,function(){
//     console.log("Node server initialized. Server's port:"+port);
// });
