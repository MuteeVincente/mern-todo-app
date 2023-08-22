const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// App config
const app = express();

const port = process.env.PORT || 8000;

const MONGODB_URI = process.env.MONGODB_URI;

// MiddleWares
// Convert to Json
app.use(express.json());
app.use(cors());

// DB Config
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
        console.log(`Server is listening on port ${port}`);
    });
})
.catch(error => {
    console.error('Error connecting to MongoDB:', error);
});
