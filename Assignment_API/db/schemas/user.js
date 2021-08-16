const  mongoose  = require("../connect");

const userSchema = new mongoose.Schema({
    uname:{
        type:String,
        required:true,

    },
    email:{
        type:mongoose.Schema.Types.String,
        required:true,
        unique:true
    },
    phone:{
        type:mongoose.Schema.Types.String,
        
    },
    isphoneverified:{
        type:Boolean,
        default:false
    }
})
const userModel = mongoose.model("User", userSchema);
module.exports = userModel;