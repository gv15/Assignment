const config = {
    dbMessages:{
        user:{
            "registrationsuccess":"User Registered Sucessfully",
            "dbproblem":"Some Database error while user operation"
        },
        otp:{
            generated:"Otp generated",
            verified:"Otp verified",
            dbProblem:"Some database error in otp operation",
            invalid:"OTP invalid"
        }
    }
}
module.exports = config;