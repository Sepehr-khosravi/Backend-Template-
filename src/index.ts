const express = require("express");
const app = express();

//Access to have premission to use environment varaibles
require("dotenv").config();


const port : number = typeof process?.env?.PORT === "number" ? process?.env?.PORT : 5000;

//Api
const RouterApi = require("./routes");
app.use("/api" , RouterApi );


app.listen(port , ()=>{
    console.log(`server is running on ${port} port!`);
})