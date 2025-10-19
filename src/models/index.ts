require("dotenv").config();
const mongoose = require("mongoose");
//Db Address
const Address : String = typeof process?.env?.DB_ADRESS === "string" ? process?.env?.DB_ADRESS : "mongodb://localhost:27017/template"

//Connect
mongoose.connect(Address).then(()=>{
    console.log("server connected to the data base!");
}).catch((e : string)=>{
    console.log("Data Base connecting error : " , e);
});

//Models 

const userModel = require("./user");

module.exports = {userModel};