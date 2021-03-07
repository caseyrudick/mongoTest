const mongoose = require('mongoose');
const express = require('express');
const { findAllByAltText } = require('@testing-library/react');


const uri ="mongodb+srv://m220student:m220password.caq38.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

// mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

const app = express();
app.use(express.json()); // Make sure it comes back as json

// mongoose.connect("mongodb+srv://m220student:m220password@cluster0.caq38.mongodb.net/Test?retryWrites=true&w=majority", {
//   useNewUrlParser: true
// });




// mongoose.connect(uri).then(() => {console.log("MongoDB connected")).catch(err => console.log(err))

const MongoClient = require('mongodb')
MongoClient.connect(uri, (err, client) =>{
  if (err) {
    console.log("Error occurred")
  }
  console.log("Connected")
  const collection = client["sample_mflix"].find({})
  console.log(collection)
  client.close()
})

// app.listen(3000, () => { console.log('Server is running...') });