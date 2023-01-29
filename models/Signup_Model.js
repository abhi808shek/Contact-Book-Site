const mongoose = require("mongoose");
const emailValidator = require("email-validator");
// const hashedPassword = require("../utils/hashingPasword")
const bcrypt = require('bcrypt');


const signupForm = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate:function () {
            return emailValidator.validate(this.email)
        }
    },
    password:{
        type:String,
        required:true,
    },
    Cpassword:{
        type:String,
        required:true,
        validate:function () {
            this.Cpassword === this.password
        }
    },
})

signupForm.pre("save",function() {
    this.Cpassword = undefined;
})

signupForm.pre("save",async function () {
    const salt = await bcrypt.genSalt(10) 
    const hashpass = await bcrypt.hash(this.password, salt)
    this.password=hashpass;
})


const Signup_Model = mongoose.model("Signup_Model",signupForm)

module.exports = Signup_Model;