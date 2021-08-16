const token = require('../utils/token');
module.exports = function(request, response, next){
   
     if(token.isTokenValid(request.headers.bearer)){
         let payload = token.givePayload(request.headers.bearer);
        request.body = { ...request.body,
            ...payload
        }
        
       next();
       
   }
   else
   response.status(401).json({message:"invalid token"});
   
}