const http = require("http") ;
const bodyparser = require("body-parser") ; 
const express= require("express"); 
const dotenv= require("dotenv").config(); // dotenv -> Database connections, put all your secret things,
const cors= require("cors"); // database request , fetching is done by this 
const sendEmail = require("./utils/sendEmail"); // Correctly import sendEmail

const app = express(); 

//Middleware 

app.use(express.json()); 
app.use(bodyparser.json());
app.use(cors());

//route 
app.get("/", (req, res)=>{
    res.send("") ; 
}) ; 

app.post("/api/sendmail", async (req, res)=>{

    const {email} = req.body ; 
    console.log(email); 
   
    try {
       const send_to= email ; 
       const sent_from = process.env.EMAIL_USER ; 
       const replyto= email ; 
       const subject = "Stockease" ; 
       const message = `
       Hii Hello Namaste 
       `
       await sendEmail (subject,message, send_to,sent_from,replyto)
       res.status(200).json({success: true , message : "Email Sent"});
    } catch (error) {
        res.status(500).json(error.message ) ; 
        console.log(error.message); 
    }

}) ; 

const PORT = process.env.PORT|| 4000 ; 
app.listen( PORT , ()=>
{
    console.log(`Listening on port ${PORT}`); 

} )
