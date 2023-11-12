const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Controller = require('./controller/controller');
const app = express();


app.use(bodyParser.json());
app.use(cors());

require('dotenv').config();
const port = process.env.PORT;
const url = process.env.MONG_URl;

mongoose.connect(url).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.log('Error connecting to MongoDB:', err);
});

app.post('/register', Controller.register);

app.post('/login', Controller.login);

app.get('/todos', Controller.getAllTodos);

app.post('/todos', Controller.createTodo);

app.get('/todos/:id', Controller.getTodoById);

app.get('/todos/:id/details', Controller.getTodoDetails);

app.put('/todos/:id', Controller.editTodo);

app.delete('/todos/:id', Controller.cleanTodo);

app.delete('/todos', Controller.cleanAllTodos);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
