const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); 

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

app.get('/data', async (req, res) => {
    try {
        const data = await getDataFromDatabase();
        res.json(data);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
});

async function getDataFromDatabase() {
[]
    return []; 
}


let tasks = [];

// Create
app.post('/tasks', (req, res) => {
    const newTask = req.body;
    tasks.push(newTask);
    res.status(201).send(newTask);
});

// Read
app.get('/tasks', (req, res) => {
    res.send(tasks);
});

// Update
app.put('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedTask = req.body;
    tasks = tasks.map(task => (task.id === id ? updatedTask : task));
    res.send(updatedTask);
});

// Delete
app.delete('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    tasks = tasks.filter(task => task.id !== id);
    res.status(204).send();
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

