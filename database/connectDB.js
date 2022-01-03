const mongoose = require('mongoose');
const express = require('express');
const app = express();
const PORT = process.env.PORT;


mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to DB'))
    .catch((err) => console.log(err));