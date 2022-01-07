const express = require('express');
const cors = require('cors');
const User = require('./models/userModel');
require('dotenv').config();
require('./database/connectDB');

const app = express();

// middlewares
app.use(express.json());

// routes
const initialRoute = require('./routes/initialRoute');
const authRoute = require('./routes/authRoute');
const addToDBRoute = require('./routes/addToDBRoute');


app.use('/', initialRoute);
app.use('/auth', authRoute);
app.use('/addToDB',
    addToDBRoute);


const PORT = process.env.PORT;
app.listen(PORT, () => console.log('Server running on ' + PORT));