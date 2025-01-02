const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');


const appRouter=require('./routers/app.router');
const adminRouter=require('./routers/admin.router');

const app = express()
const port = 5000

app.use(express.json());

app.use(cors());

app.use(cookieParser());

app.use('/app',appRouter)
app.use('/admin',adminRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);


  mongoose
    .connect('mongodb+srv://ionut:ionut@cluster0.xqxor.mongodb.net/Cybersecurity_users')
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((err) => {
      console.log(err);
    })

})