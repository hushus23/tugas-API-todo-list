const express = require('express');
const router = express.Router();
const Todo = require('../model/todomodel');
const User = require('../model/usermodel')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  const user = new User({ username, email, password: hashedPassword });
  await user.save();
  res.json({ message: 'User created successfully' });
});

router.post('/login', async (req, res) => {
  const { username, email, password } = req.body;
  const user = await User.findOne({ username, email });
  if (!user) {
    return res.status(401).json({ error: 'Invalid username or password' });
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ error: 'Invalid username or password' });
  }
  const token = jwt.sign({ userId: user._id }, process.env.JWT_TOKEN);
  res.json({token} );
});

router.get('/todos', async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

router.post('/todos', async (req, res) => {
  const { title, description } = req.body;
  const todo = new Todo({ title, description });
  await todo.save();
  res.json({ message: 'Todo created successfully' });
});

router.get('/todos/:id', async (req, res) => {
  const { id } = req.params;
  const todo = await Todo.findById(id);
  if (!todo) {
    return res.status(404).json({ error: 'Todo not found' });
  }
  res.json(todo);
});

router.get('/todos/:id/details', async (req, res) => {
  const { id } = req.params;
  const todo = await Todo.findById(id);
  if (!todo) {
    return res.status(404).json({ error: 'Todo not found' });
  }
  const details = {
    id: todo._id,
    title: todo.title,
    description: todo.description,
    completed: todo.completed
  };
  res.json(details);
});

router.put('/todos/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;
  const todo = await Todo.findByIdAndUpdate(id, { title, description, completed }, { new: true });
  if (!todo) {
    return res.status(404).json({ error: 'Todo not found' });
  }
  res.json({ message: 'Todo updated successfully' });
});

router.delete('/todos/:id', async (req, res) => {
  const { id } = req.params;
  const todo = await Todo.findByIdAndDelete(id);
  if (!todo) {
    return res.status(404).json({ error: 'Todo not found' });
  }
  res.json({ message: 'Todo deleted successfully' });
});

router.delete('/todos', async (req, res) => {
  await Todo.deleteMany();
  res.json({ message: 'All todos deleted successfully' });
});

module.exports = router;
