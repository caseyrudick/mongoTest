// installed nodemon to re-render with each save
const express = require("express")
const cors = require("cors");
const mongoose = require('mongoose')
// dot env allows us to put environment variables from env to dotenv


require('dotenv').config()
const app = express()
const port = process.env.PORT || 5000;

const uri = process.env.ATLAS_URI
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true})
const connection = mongoose.connection
connection.once('open', () => {
  console.log("MongoDB database connection established successfully")
})
// cors middleware
app.use(cors());
// allows us to parse JSON
app.use(express.json())

// starts our server
app.listen(port, () => {
  console.log(`Server is running on port :${port}`)
})