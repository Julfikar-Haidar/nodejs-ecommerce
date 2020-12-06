const express = require('express')
const mongoose = require('mongoose');
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const expressValidator = require('express-validator')
require('dotenv').config()
 
// import routes

const userRoutes = require('./routes/user')

// app

const app = express();

// db

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true

}).then(() => console.log("DataBase connected"))

// middleware 

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(expressValidator())

// routes middleware

app.use("/api",userRoutes)

const port = process.env.PORT || 5000


app.listen(port, () => {
    console.log(`App listening on port 8000! ${port}`);
});