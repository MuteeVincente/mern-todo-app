const express = require('express');
const mongoose = require('mongoose');
const Cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

// App config
const app = express();

const port = process.env.PORT || 8000;

const connectionURL = process.env.MONGODB_URI;

// MiddleWares
// Convert to Json
app.use(express.json());
app.use(Cors());

// DB Config
mongoose.connect(connectionURL)
.then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
        console.log('Running on port: ${port}');
    });
})
.catch(error => {
    console.error('Error connecting to MongoDB:', error);
});
