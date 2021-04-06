const mongoose = require('mongoose')
const { Schema, model } = mongoose
const userSchema = new Schema({
    name: {type:String, require:true},
    password: {type:String, select: false,require:true},
    age: {type:Number, require: true },
    gender: {type:String,enum:['男', '女'],require:false},
    avatarUrl:{type:String,require:false},
    phone: {type:String,require:false},
    education: {
        type: [
            {
                school: {type:String,require:false },
                diploma:{type:String,enum:['小学','初中','高中','大专','学士','硕士','博士'],require:false}
            }
        ]
    }
})

module.exports = model('users',userSchema)