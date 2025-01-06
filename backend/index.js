const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');


const appRouter=require('./routers/app.router');

const app = express()
const port = 5000

app.use(express.json());

app.use(cors({
  origin: 'http://localhost:4200',
  credentials: true, 
}));

app.use(cookieParser());

app.use('/app',appRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);


  // mongoose
  //   .connect('mongodb+srv://ionut:ionut@cluster0.xqxor.mongodb.net/Cybersecurity_users')
  //   .connect('mongodb+srv://ionut:ionut@cluster0.xqxor.mongodb.net/Cybersecurity_threats')
  //   .then(() => {
  //     console.log("Connected to DB");
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   })

})