const nodemailer= require("nodemailer"); 


const sendEmail = async (subject , message , send_to , sent_from ,replyto ) =>
    {
        const transporter = nodemailer.createTransport(
            {
                host: process.env.EMAIL_HOST , // dummy host not created this EMAIL_HOST yet 
                port: 587 , // SMTP service 
                auth: 
                {
                   user:  process.env.EMAIL_USER , 
                   pass: process.env.EMAIL_PASS  
                }, 
                tls: {
                    rejectUnauthorized: false 
                }
            }
        )

        const options = {
            from: sent_from ,
            to: send_to ,
            replyto: replyto, 
            subject: subject, 
            html: message 
        }


        transporter.sendMail(options, function(err, info){
            if(err)
            {
                console.log(err) ; 
            }
            else{
                console.log(info);
            }
        });

    }; 


    module.exports= sendEmail ; 