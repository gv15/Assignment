const express = require('express');
const router = express.Router();
const userCrud = require("../db/services/usercrud");
const config = require('../utils/config');
const tokenOpr = require('../utils/token');

router.post("/", (request, response)=>{
    
    userCrud.checkIfRegistered(request.body.email).
    then((document)=>{
        let token = tokenOpr.generateToken(request.body);
        
        if(document){
            response.status(200).json({
                token:token,
                isPhoneVerified:true
            })
        }
        else{
            userCrud.register(request.body)
            .then(()=>{
                response.status(200).json({
                    token:token,
                    isPhoneVerified:false
                })

            }).catch(
            (err)=>{
                console.log("User registration error", err)
                response.status(502).json({
                    message:config.dbMessages.user.dbproblem
                })
            })
        }
    }).catch(
        (err)=>{
            console.log(config.dbMessages.user.dbproblem, err);
            response.status(404).json({
            iserr:true,
            message:config.dbMessages.user.dbproblem
        })

    })
})
module.exports = router;