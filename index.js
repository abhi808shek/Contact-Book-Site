const express = require("express");
const app = express()
const signup_router = require("./routers/Signup_Router")
const login_router = require("./routers/Login_Router")
const user_contact_router = require("./routers/Contact_Detail_Router")
const path = require("path")
const cors = require('cors')
const verifyAccessToken = require('./middleware/verifyToken')
require("./Database/db")
require('dotenv').config()


app.use(express.json())
app.use(cors());


const PORT = process.env.PORT || 8000;

if(process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static('frontend/build'));
}
app.get('*',(req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
})


app.use("/",signup_router);
app.use("/",login_router);
app.use("/",verifyAccessToken,user_contact_router);


app.listen(PORT,()=>{
    console.log("Server COnnected");
})