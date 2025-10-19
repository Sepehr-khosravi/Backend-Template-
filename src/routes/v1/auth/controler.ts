//models
const {userModel} = require("../../../models");
//tools
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");



class Auth{
    login = async(req : object , res : object)=>{
        try{
            ///keep going here!.
        }
        catch(e){
            console.log("Login Error");
            // res.status(500).json({message : "Internal Server Error ."});
        }
    }
}


module.exports = new Auth;