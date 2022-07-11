const express = require("express");
const app = express()
const signup_router = require("./routers/Signup_Router")
const login_router = require("./routers/Login_Router")
const user_contact_router = require("./routers/Contact_Detail_Router")
const path = require("path")
const cors = require('cors')
require("./Database/db")

app.use(express.json())
app.use(cors());


const PORT = process.env.PORT || 8000;

if(process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static('client/build'));
}
app.get('*',(req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});



app.use("/",signup_router);
app.use("/",login_router);
app.use("/",user_contact_router);


app.listen(8000,()=>{
    console.log("Server COnnected");
})