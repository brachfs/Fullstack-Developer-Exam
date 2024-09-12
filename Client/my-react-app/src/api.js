
const API_URL = 'http://localhost:3001'; 

export const fetchTasks = async () => {
    const response = await fetch(`${API_URL}/tasks`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

export const createTask = async (task) => {
    const response = await fetch(`${API_URL}/tasks`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
    });
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

export const updateTask = async (id, updatedTask) => {
    const response = await fetch(`${API_URL}/tasks/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedTask),
    });
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

export const deleteTask = async (id) => {
    const response = await fetch(`${API_URL}/tasks/${id}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
};
