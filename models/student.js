const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    firstName:{
        type:"string",
        required:true,
        min:5
    },
    lastName:{
        type:"string",
        required:true,
        min:5
    },
    username:{
        type:"string",
        required:true,
        min:5
    },
    password:{
        type:"string",
        required:true,
        min:5
    },
    email:"string"
},{timestamps:true})

StudentSchema.set('collection','students')
module.exports = mongoose.model('Students',StudentSchema)