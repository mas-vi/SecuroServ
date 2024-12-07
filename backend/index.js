const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const testRouter=require('./routers/router.test');


const app = express()
const port = 5000

app.use(express.json());

app.use(cors());


app.use('/test',testRouter);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);


  // mongoose
  //   .connect('mongodb+srv://test:test1234@cluster0.iwhdlpc.mongodb.net/friendr')
  //   .then(() => {
  //     console.log("Connected to DB");
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   })

})