const userModel = require('../schemas/user');
const userCrud = {
    checkIfRegistered(email){
        var promise = new Promise(
            function(resolve, reject){
                userModel.findOne({email:email},
                     function(err, document){
                        if(err){
                            reject(err);
                        }
                        else{
                            resolve(document);
                        }
                })
            }
        )
        return promise
    },
    register(user){
        return userModel.create(user);
    },
    verifyPhone(email, phone){
        var promise = new Promise(
            function(resolve, reject){
                userModel.updateOne({email:email},{
                    $set:{"phone":phone, "isphoneverified":true}
                },function(error, document){
                    if(error){
                        reject(error);
                    }
                    else{
                        resolve(document);
                    }
                })
            }
        )
        return promise;
       
    }
}
module.exports = userCrud;
