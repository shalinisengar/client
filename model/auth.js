let mongose = require('mongoose')

let userSchema = mongose.Schema({
    firstName :{
        type:String
    },
    lastName :{
        type:String
    },
    email :{
        type:String
    },
    passWord :{
        type:String
    }
})

let User = new mongose.model('user' , userSchema)
module.exports=User