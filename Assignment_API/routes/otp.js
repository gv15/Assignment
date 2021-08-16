const config = require('../utils/config');
const express = require('express');
const userCrud = require('../db/services/usercrud');
const router = express.Router();
const tokenOpr = require('../utils/token');
router.post("/generateotp",(request, response)=>{
    
    let token = tokenOpr.generateToken(request.body);
    response.status(200).json({
        token:token,
        message:config.dbMessages.otp.generated,
        isotpgenerated:true
    })
})
router.post("/verifyotp", function(request, response){
   
    if(request.body.otp == 1234){
        
    userCrud.verifyPhone(request.body.email, request.body.phone)
    .then((document)=>{
        response.status(200).json({
            message:config.dbMessages.otp.verified,
            isOtpValid:true
        })
    })
    .catch((err)=>{
        response.status(502).json({
            message:config.dbMessages.otp.dbProblem
        })
    })
}
else{
    response.status(200).json({
        isOtpInvalid:true,
        message:config.dbMessages.otp.invalid
    })
}
})
module.exports = router;