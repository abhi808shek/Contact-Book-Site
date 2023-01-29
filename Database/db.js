const mongoose = require('mongoose');

const dataBaseConnection = async() => {
    try {
      // const URI = process.env.MONGO_URL;
      await mongoose.connect("mongodb+srv://contactbooksite:uPRQhtGU80jUAJ2i@cluster0.evif0yp.mongodb.net/Contact-Book?retryWrites=true&w=majority")
      console.log("DataBase Connected Successfullyy....");
  
    }
    catch (error) {
      console.log(error.message);
    }
  }
  dataBaseConnection();