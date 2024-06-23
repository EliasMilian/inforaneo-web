const Mongoose = require('mongoose');
const schema = Mongoose.Schema;

const userSchema = new schema({


    name:{
        type:String,
        trim:true,
        required:false

    },
    email:{

        type:String,
        trim:true,
        required:false
    },
    password:{
        type:String,
        trim:true,
        required:false
    },
    role:{
        type:String,
        trim:true,
        required:false,
        
    }
   
    

}, {timestamps: true});



const User = Mongoose.model('User', userSchema);

module.exports = User;