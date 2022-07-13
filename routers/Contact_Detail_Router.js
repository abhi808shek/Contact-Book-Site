const {user_contact_detail
    ,get_all_contact_detail,
    get_single_contact_detail,
    delete_single_contact_detail,
    update_single_contact_detail,
    delete_all_contact_detail
} = require("../controllers/Contact_Details_Controller");
const express = require("express");
const multer  = require('multer')
const user_contact_router = express.Router();
const upload = multer()

// user_contact_router.post("/contactdetails", upload.single('avatar'),user_contact_detail)
user_contact_router.get("/contactdetails",get_all_contact_detail)
user_contact_router.delete("/contactdetails",delete_all_contact_detail)


user_contact_router.get("/contactdetails/:id",get_single_contact_detail)
user_contact_router.delete("/contactdetails/:id",delete_single_contact_detail)
user_contact_router.put("/contactdetails/:id",update_single_contact_detail)


// user_contact_router.post('/profile', upload.single('avatar'), function (req, res, next) {
//     // req.file is the `avatar` file
//     // req.body will hold the text fields, if there were any
//   })


module.exports = user_contact_router;