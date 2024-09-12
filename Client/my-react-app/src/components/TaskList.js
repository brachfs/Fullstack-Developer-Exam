import React, { useEffect, useState } from 'react';
import { fetchTasks, createTask, updateTask, deleteTask } from '../api';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    useEffect(() => {
        const loadTasks = async () => {
            try {
                const tasks = await fetchTasks();
                setTasks(tasks);
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        };

        loadTasks();
    }, []);

    const handleAddTask = async () => {
        try {
            const task = await createTask({ name: newTask, completed: false });
            setTasks([...tasks, task]);
            setNewTask('');
        } catch (error) {
            console.error('Error creating task:', error);
        }
    };

    const handleUpdateTask = async (id, completed) => {
        try {
            const updatedTask = await updateTask(id, { completed });
            setTasks(tasks.map(task => (task.id === id ? updatedTask : task)));
        } catch (error) {
            console.error('Error updating task:', error);
        }
    };

    const handleDeleteTask = async (id) => {
        try {
            await deleteTask(id);
            setTasks(tasks.filter(task => task.id !== id));
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    return (
        <div>
            <h2>Task List</h2>
            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="New task"
            />
            <button onClick={handleAddTask}>Add Task</button>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <span>{task.name}</span>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => handleUpdateTask(task.id, !task.completed)}
                        />
                        <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
