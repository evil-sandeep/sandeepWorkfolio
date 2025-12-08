const router=require('express').Router();
const nodemailer=require('nodemailer')


router.post('/contact',(req,res)=>{
    let data=req.body
    if(data.name.length===0 || data.email.length===0||data.message.length===0){
        return res.json({msg:" Please fill all the feilds"})
    }

    let smtpTransporter=nodemailer.createTransport({
        service:'Gmail',
        port:465,
        auth:{
            user:'chandansandeep2003@gmail.com',
            pass:'cfrpurjzvvolfcvd'
        }
    })
    let mailOptions = {
        from: data.email,
        to: 'chandansandeep2003@gmail.com',
        subject: `Message from ${data.name}`,
        html:
            `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #333333;">Information</h2>
                <ul style="list-style-type: none; padding: 0;">
                    <li><strong>Name:</strong> ${data.name}</li>
                    <li><strong>Email:</strong> ${data.email}</li>
                </ul>
                <h2 style="color: #333333;">Message</h2>
                <p style="color: #333333; line-height: 1.6;">${data.message}</p>
            </div>
            `,
    };
smtpTransporter.sendMail(mailOptions,(error)=>{
    try{
        if(error) return res.status(400).json({msg:'Please fill all the feilds'})
        res.status(200).json({msg:'THank YOu For Contacting Mr.Sandeep'})
    }catch(error){
        if(error)return res.status(500).json({msg:'There is server error occoured'})
    }
})    
})
module.exports=router
