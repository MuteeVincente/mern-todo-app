const express = require('express');
const mongoose = require('mongoose');
const Cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const{
    getTodo,
    createTodo,
    updateTodo,
    deleteTodo

} = require('./controllers/todoController')

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
        console.log(`Running on port: ${port}`);
    });
})
.catch(error => {
    console.error('Error connecting to MongoDB:', error);
});

//Create Endpoints


//Get todos list

app.get('/todos', getTodo)

// Create  a new Todo
app.post('/todos', createTodo)

//Update a Todo
app.put('/todos/:id', updateTodo)

//Delete a Todo
app.delete('/todos/:id', deleteTodo)
