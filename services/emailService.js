const nodemailer=require('nodemailer');

async function sendMail({from,to,subject,text,html}){

let transport =nodemailer.createTransport({
   host:process.env.SMTP_HOST,
   port:process.env.SMTP_PORT,
   secure:false,
   auth:{
    user:process.env.MAIL_USER,
    pass:process.env.MAIL_PASS
   }
});

 let info=await transport.sendMail({
//    from:from,
//    to:to,
//    subject:subject,
//    text:text,
//    html:html  kyuki javascript me agr key aur value same hai to unke is trh bhi likh skte hai
 from: `QB file_share<${from}>`,
 to,
 subject,
 text,
 html


 });
//  console.log(info)



}

module.exports=sendMail;