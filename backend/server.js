// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

const cors = require('cors')

const mongoDB = 'mongodb://localhost:27017/lenden';
mongoose.connect(mongoDB, {
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log('MongoDB connection error:', err.message));

// Bodyparser Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/addresses', require('./routes/addresses'));

app.listen(1337, () => { 
    console.log('Server Started')
})
