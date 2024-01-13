// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/taskDB', { useNewUrlParser: true, useUnifiedTopology: true });
//mongoose.set('useFindAndModify', false); // To use findOneAndUpdate without deprecation warning

// Define Task schema
const taskSchema = new mongoose.Schema({
    status: String,
    taskId: Number,
    title: String,
    description: String,
    date: String,
    priority: String
});

const task = mongoose.model('tasks', taskSchema);

// Save a task to the database
app.post('/saveTask', async (req, res) => {
    try {
        const newTask = new Task(req.body);
        await newTask.save();
        res.json({ message: 'Task saved successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/', (req, res) => {
    res.send(`hello world`);
});

// Read and send all tasks from the database
app.get('/getAllTasks', async (req, res) => {
    try {
        const allTasks = await Task.find({});
        res.json(allTasks);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Delete a task from the database
app.delete('/deleteTask/:taskId', async (req, res) => {
    try {
        await Task.findOneAndDelete({ taskId: req.params.taskId });
        res.json({ message: 'Task deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Update a task in the database
app.put('/updateTask/:taskId', async (req, res) => {
    try {
        const updatedTask = await Task.findOneAndUpdate({ taskId: req.params.taskId }, req.body, { new: true });
        res.json(updatedTask);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
