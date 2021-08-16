const jwt = require('jsonwebtoken');
const tokenOperations = {
    generateToken(user){
        return jwt.sign(user,process.env.TOKEN_SECRET)
    },
    isTokenValid(token){
        try{
            let payload = jwt.verify(token,process.env.TOKEN_SECRET);
            return true;
        }
        catch(err){
            return false
        }
       
    },
    givePayload(token){
        return jwt.verify(token,process.env.TOKEN_SECRET);
    }
}
module.exports = tokenOperations;