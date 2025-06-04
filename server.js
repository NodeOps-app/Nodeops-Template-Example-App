const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// In-memory storage for tasks
let tasks = [];

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public')); // Serve static files from 'public' folder

// API to get all tasks
app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

// API to add a task
app.post('/api/tasks', (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: 'Task text is required' });
  const task = { id: tasks.length + 1, text, completed: false };
  tasks.push(task);
  res.status(201).json(task);
});

// API to toggle task completion
app.put('/api/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find(t => t.id === id);
  if (!task) return res.status(404).json({ error: 'Task not found' });
  task.completed = !task.completed;
  res.json(task);
});

// API to delete a task
app.delete('/api/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  tasks = tasks.filter(t => t.id !== id);
  res.status(204).send();
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});