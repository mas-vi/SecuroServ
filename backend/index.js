require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const appRouter = require('./routers/app.router');

const app = express();
const port = 5000;

app.use(express.json());

app.use(cors({
  origin: 'https://phoenixovich.systems', // Replace with your frontend URL
  credentials: true, // Allow cookies to be sent with requests
}));

app.use(cookieParser());

app.use('/api', appRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);

  mongoose
    .connect('mongodb+srv://phoenix:phoenix.@cluster0.xqxor.mongodb.net/Cybersecurity_users')
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((err) => {
      console.log(err);
    });
});

