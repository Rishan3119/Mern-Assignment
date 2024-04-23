const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type: String
    },
    Email:{
        type: String
    },
    phone:{
        type: String
    },
    Designation:{
        type: [String]
    },
    Gender:{
        type: [String]
    },
    Course:{
        type: [String]
    },
    image:{
        type: String
    },
},{timestamps:true})

const UserModels = mongoose.model('user',userSchema)

module.exports= UserModels