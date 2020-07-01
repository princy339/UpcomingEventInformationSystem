const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
var multer = require('multer');
var fs = require('fs');
var nodemailer = require('nodemailer');

// let client = new MongoClient('mongodb://localhost:27017/ads',{useNewUrlParser:true});
    let client = new MongoClient('mongodb+srv://admin_123:admin_123@cluster0-peafg.mongodb.net/EventsDetails?retryWrites=true&w=majority' ,{useNewUrlParser:true});
    let connection;
        client.connect((err,db)=>{
        if(!err){
        console.log("connection is established");
        connection = db;
        }
        else{
        console.log("connection is not established");
        }
        });

        const app = express();
        app.use(cors()); //middleware
        app.use(express.json());
        app.use(express.static(path.join(__dirname, 'uploads')));

    var storage = multer.diskStorage({
    destination:(req, file, next)=> {
        next(null, 'uploads/')
    },
    filename:(req, file, next)=> {
        //console.log("in 35");
       // console.log(file);
      //  const ext=file.mimetype.split('/');
      console.log("->"+file);
      console.log("->"+file.fieldname);
        next(null,file.fieldname+".jpg"); 
    }
    });
    var upload = multer({ storage: storage })
 

//for contacts
    app.get('/getcontact',(req,res)=>{

    let mytable= connection.db('EventsDetails').collection('contact'); 
        mytable.find().toArray((err,docs)=>{

        console.log(docs);
        if(!err){
            res.send({status:"success",desc:docs});
        }
        else{
            res.send({status:"failed",desc:err});
        }
        })
    });
    app.post('/createcontact', bodyParser.json(),(req,res)=>{
    let mytable= connection.db('EventsDetails').collection('contact'); 
    mytable.insert(req.body,(err,result)=>{
        if(!err){
            res.send({status:"success",desc:"student created successfully"});
        }
        else{
            res.send({status:"failed",desc:"some error occured"});
        }
    })
    });
//for update contact details
    app.post('/updatecustomer', bodyParser.json(),(req,res)=>{
   
        console.log(req.body);
            let mytable= connection.db('EventsDetails').collection('contact'); 
            mytable.update({_id:ObjectID(req.body._id)},{$set:{name:req.body.name,
                  email:req.body.email,subject:req.body.subject, message:req.body.message }},
                 (err,result)=>{
                if(!err){
                    res.send({status:"success",desc:"contact updated successfully"});
                }
                else{
                    res.send({status:"failed",desc:"some error occured"});
                }
            })
        });

//for interested users
app.get('/getuser',(req,res)=>{

    let mytable= connection.db('EventsDetails').collection('interested'); 
     mytable.find().toArray((err,docs)=>{

        console.log(docs);
        if(!err){
            res.send({status:"success",desc:docs});
        }
        else{
            res.send({status:"failed",desc:err});
        }
    })
});
app.post('/createuser', bodyParser.json(),(req,res)=>{
   let mytable= connection.db('EventsDetails').collection('interested'); 
   
   mytable.insert(req.body,(err,result)=>{
        if(!err){

            res.send({status:"success",desc:"student created successfully"});
        }
        else{
            res.send({status:"failed",desc:"some error occured"});
        }
    })
});

//register users
app.post('/register', bodyParser.json(), (req, res) => {

    const collection = connection.db('EventsDetails').collection("Users");

    collection.insertOne(req.body, (err, r) => {
        //console.log("result of insert is -> " + r.ops[0]);
        console.log("result of insert is _id -> " + r.insertedId);
        if (!err) {



            sendMail("Theevents.27@gmail.com", "mfvhcxlejtkrjodz" , req.body.email, "Registration SuccessFull", `<h3>Hi</h3><br><h6> Welcome to Upcommming Events` );




            res.send({ msg: "sucessfully inserted", status: 'OK', description: 'all ok' });
        }
        else {
            res.send({ msg: " not inserted", status: 'Failed', description: 'error in monogo db' });
        }

    });
})
//already registerd users which is super or admin(member)

app.post('/login', bodyParser.json(), (req, res) => {

    const collection = connection.db('EventsDetails').collection("Users");

    collection.findOne({ 'email': req.body.email, 'password': req.body.password }, 
    (err, docs) => {
        console.log("docs"+docs)
        if (!err && docs) {
        console.log(docs);
            res.send({ msg: "sucessfully Logged In", status: 'OK', description: docs });
        }
        else{
            res.send({ msg: "sucessfully Logged In", status: 'OK', description: docs });
        }
    });
})
//backend event forms
    app.get('/getevent', (req, res) => {
    const collection = connection.db('EventsDetails').collection("workshop");

    collection.find().toArray(function (err, docs) {

        res.send({status:"ok", desc:docs});
    });
})
//for update event details
app.post('/updateevent', bodyParser.json(),(req,res)=>{
   
    console.log(req.body);
        let collection= connection.db('EventsDetails').collection('workshop'); 
        collection.update({_id:ObjectID(req.body._id)},{$set:{type:req.body.type,
              title:req.body.title,date:req.body.date, time:req.body.time,
               location:req.body.location, logo:req.body.logo }},
             (err,result)=>{
            if(!err){
                res.send({status:"success",desc:"event updated successfully"});
            }
            else{
                res.send({status:"failed",desc:"some error occured"});
            }
        })
    });
// for delete an event
    app.post('/deleteevent', bodyParser.json(),(req,res)=>{
   
    console.log(req.body);
        let collection= connection.db('EventsDetails').collection('workshop'); 
        collection.remove({_id:ObjectID(req.body.id)},(err,result)=>{
            if(!err){
                res.send({status:"success",desc:"event deleted successfully"});
            }
            else{
                res.send({status:"failed",desc:"some error occured"});
            }
        })
    });

  //upload detail of logo and banner of all events
 app.post('/createevent',upload.fields([{
    name: 'banner', maxCount: 1
  }, {
    name: 'logo', maxCount: 1
  }]), function (req, res, next) {
        
    const collection = connection.db('EventsDetails').collection("workshop");
    
     //console.log("this is request body");
        collection.insertOne({...req.body, chiefparty:[]}, (err, r) => {
    
            if (!err) {
    
                 //console.log("result of insert is -> " +r.ops[0]);
                 //console.log("result of insert is _id -> " + r.insertedId);
    
                 fs.renameSync('./uploads/banner.jpg', './uploads/banner_'+r.insertedId + '.jpg');
                 fs.renameSync('./uploads/logo.jpg', './uploads/logo_'+r.insertedId + '.jpg');
    
                 res.send({ msg: "event sucessfully created", status: 'OK', description: 'course created and file uploaded' });
          }
             else {
                res.send({ msg: "event not created", status: 'FAIL', description: err });
    
             }
         });
     })
     //upload  more detail of all events
 app.post('/addchief',upload.fields([{
    name: 'chief', maxCount: 1
  }]), function (req, res, next) {
   
      const collection = connection.db('EventsDetails').collection("workshop");
      console.log(req.body);
 
         collection.updateOne({_id:ObjectID(req.body._id)},
         { $push: { chiefparty: 
            {speaker:req.body.speaker,count:req.body.count, description:req.body.description}
            }
         }, (err, r) => {
    
            if (!err) {
    
                 //console.log("result of insert is -> " +r.ops[0]);
                fs.renameSync('./uploads/chief.jpg', './uploads/chief'+req.body._id + '_'+req.body.count+'.jpg');
                     
                 res.send({ msg: "event sucessfully updated", status: 'OK', description: 'course created and file uploaded' });
          }
             else {
                res.send({ msg: "event not updated", status: 'FAIL', description: err });
    
             }
         });
     })


 


     function sendMail(from, appPassword, to, subject,  htmlmsg)
     {
         let transporter=nodemailer.createTransport(
             {
                 host:"smtp.gmail.com",
                 port:587,
                 secure:false,
                 auth:
                 {
                  //  user:"weforwomen01@gmail.com",
                  //  pass:""
                  user:from,
                   pass:appPassword
                   
         
                 }
             }
           );
         let mailOptions=
         {
            from:from ,
            to:to,
            subject:subject,
            html:htmlmsg
         };
         transporter.sendMail(mailOptions ,function(error,info)
         {
           if(error)
           {
             console.log(error);
           }
           else
           {
             console.log('Email sent:'+info.response);
           }
         });
     }
     
    





app.listen(3000,()=>{
    console.log("server is listening on port 3000");
})