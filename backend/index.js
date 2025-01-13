const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');


const appRouter=require('./routers/app.router');

const app = express()
const port = 5000

app.use(express.json());

app.use(cors({
  origin: 'https://phoenixovich.systems',
  credentials: true, 
}));

app.use(cookieParser());

app.use('/api',appRouter)

app.listen(port, () => {
  console.log(`App listening on port ${port}`);

})