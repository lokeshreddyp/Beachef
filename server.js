'use strict';

var port = process.env.PORT || 3000;
var express = require("express");
var nodemailer = require("nodemailer");
var firebase = require("firebase");
var app = express();

  app.use(express.static(__dirname ));

var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: "partyguard.nwmsu@gmail.com",
        pass: "Partyguard2016"
    }
});
//request a quote mail
app.get('/dowork',function(res,req){
    console.log("request received finally");
    console.log(res.query);
    var mailOptions={
        to : res.query.contactEmail,
        subject : 'PartyGuard Quote',
        text : "Hi "+res.query.contactName
    }
    console.log(JSON.stringify(mailOptions));
    smtpTransport.sendMail(mailOptions, function(error, response){
     if(error){
            console.log(error);
        req.send("error");
     }else{
            console.log("Message sent: " + response.message);
        req.send("sent");
         }
});
});


//contact us mail
app.get('/docontact',function(res,req){
    console.log(" contact us request received finally");
    console.log(res.query);
    var mailOptions={
        to : res.query.email,
        subject : 'Thank you for contacting PartyGuard',
        text : "Hi "+res.query.lname+ ",\n" + "Thank you for writing to us. We will get back to you ASAP. \n\nThanks,\nTeam PartyGuard"
    }
    console.log(JSON.stringify(mailOptions));
    smtpTransport.sendMail(mailOptions, function(error, response){
     if(error){
            console.log(error);
        req.send("error");
     }else{
            console.log("Message sent: " + response.message);
        req.send("sent");
         }
});

});


app.get('/domail',function(res,req){
    console.log("mail request received finally");
    console.log(res.query);
    var mailOptions={
        to : res.query.Email,
        subject : 'PartyGuard Account Details',
        text : "Hi, "+res.query.fName+" \n"+"Please find your Account details below: \n"+
        "Fraternity Name: "+res.query.fraternityName + "\n"+
        "Subscription Status: "+res.query.paymentStatus + "\n"+
        "Nick name: "+res.query.nickName + "\n"+
        "Chapter: "+res.query.chapter + "\n"+
        "Subscription Code: "+res.query.subscripCode + "\n"+
        "Temporary Password: "+res.query.tempPass + "\n"+
        "Guard Code: "+res.query.guardCode + "\n"+
        "University Name: "+res.query.UniversityModel + "\n"+
        "Address: "+res.query.Location + "\n \n \n Thanks, \n Party Guard Team"
          }
    console.log(JSON.stringify(mailOptions));
    smtpTransport.sendMail(mailOptions, function(error, response){
     if(error){
            console.log(error);
        req.send("error");
     }else{
            console.log("Message sent: " + response.message);
        req.send("sent");
         }
});
});


app.get('/domailGuard',function(res,req){
    console.log("mail request received finally");
    console.log(res.query);
    var mailOptions={
        to : res.query.Email,
        subject : 'PartyGuard Guard Registration Details',
        text : "Hi, "+res.query.firstName+" \n"+"Please find your Account details below: \n"+
        "First Name: "+res.query.firstName + "\n"+
        "Last Name: "+res.query.lastName + "\n"+
        "Age: "+res.query.age + "\n"+
        "Phone number: "+res.query.PhoneNumber + "\n \n \n \n Thanks, \n Party Guard Team"
          }
    console.log(JSON.stringify(mailOptions));
    smtpTransport.sendMail(mailOptions, function(error, response){
     if(error){
            console.log(error);
        req.send("error");
     }else{
            console.log("Message sent: " + response.message);
        req.send("sent");
         }
});
});
app.get('/doevent',function(res,req){
    console.log("mail request received finally");
    console.log(res.query);
    var mailOptions={
        to : res.query.Email,
        subject : 'Event Details',
        text : "Hi,\nPlease find event details below: \n"+
        "Event Name: "+res.query.eventName + "\n"+
        "Evvent  Time & Venue: "+res.query.eventDateTime + "\n \n \n Thanks, \n Party Guard Team"
          }
    console.log(JSON.stringify(mailOptions));
    smtpTransport.sendMail(mailOptions, function(error, response){
     if(error){
            console.log(error);
        req.send("error");
     }else{
            console.log("Message sent: " + response.message);
        req.send("sent");
         }
});
});

app.get('/dosuccess',function(res,req){
    console.log("mail request received finally");
    console.log(res.query);
    var mailOptions={
        to : res.query.Email,
        subject : 'Password reset',
        text : "Hi, your password has been successfully changed. \n\n\n Thanks,\nPartyGuard Team"
          }
    console.log(JSON.stringify(mailOptions));
    smtpTransport.sendMail(mailOptions, function(error, response){
     if(error){
            console.log(error);
        req.send("error");
     }else{
            console.log("Message sent: " + response.message);
        req.send("sent");
         }
});
});
/*------------------SMTP Over-----------------------------*/
// for all public requests try to use /app folder
app.use("/public", express.static(__dirname + "/app"));
// for all routes defined on client side send
// entry point to the app
// btw. changes of those routes on client side
// are not supposed to hit server at all (!)
app.use("/", function(req, res, next){
    res.sendFile(__dirname + '/app/main.html');
});


/*--------------------Routing Over----------------------------*/

// app.listen(3000,function(){
//     console.log("Node server initialized. Server's port:"+port);
// });

// var server = app.listen(process.env.PORT || 8080, function () {
//     var port = server.address().port;
//     console.log("App now running on port", port);
//   });
app.listen(port , () =>{
  console.log(`port is up and running on ${port}`);
})
