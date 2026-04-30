export let tasks = [];

export const setTasks = (newTasks) => {
    tasks = newTasks;
};

export const addTask = (text) => {
    const newTask = {
        id: Date.now(),
        text: text,
        completed: false
    };
    tasks.push(newTask);
    return newTask;
};

export const removeTask = (id) => {
    tasks = tasks.filter(t => t.id !== id);
};

export const toggleTask = (id) => {
    tasks = tasks.map(t => 
        t.id === id ? { ...t, completed: !t.completed } : t
    );
};