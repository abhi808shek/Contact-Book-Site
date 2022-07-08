const mongoose = require('mongoose');

const dataBaseConnection = async() => {
    try {
      // const URI = process.env.MONGO_URL;
      await mongoose.connect("mongodb+srv://contactbooksite:contactbooksite@cluster0.px5cs.mongodb.net/Contact-Book?retryWrites=true&w=majority")
      console.log("DataBase Connected Successfullyy....");
  
    }
    catch (error) {
      console.log(error.message);
    }
  }
  dataBaseConnection();