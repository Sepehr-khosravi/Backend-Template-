const mongoose = require("mongoose");

//the Structure of User Schema
interface UserSchemainterface {
    username : object ;
    email : object ;
    password : object ;
    //you can add more ...
}


//User Schema Object
const UserSchemaObject : UserSchemainterface = {
    username : {type : String , required : true} ,
    email : {type : String , required : true , unique : true} ,
    password : {type : String , required : true } ,
    //you can add more ...
}




//User Schema
const schema = new mongoose.Schema(UserSchemaObject);

//User Model
const UserModel = mongoose.model("users" , schema);


module.exports = UserModel;