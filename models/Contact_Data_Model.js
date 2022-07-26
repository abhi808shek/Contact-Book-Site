const mongoose = require("mongoose");
const emailValidator = require("email-validator");

const contact_details = new mongoose.Schema({
  // userId: { type: String,required:true},
  name: { type: String, required: true },
  phone_no: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: function () {
      return emailValidator.validate(this.email);
    },
  },
  address: { type: String, required: true },
  image: { type: String },
});

const Contact_Details = new mongoose.model("Contact_Details", contact_details);

module.exports = Contact_Details;
