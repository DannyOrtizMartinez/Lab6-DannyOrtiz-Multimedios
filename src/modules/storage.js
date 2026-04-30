const KEY = "tareas_danny_lab6";

export const saveTasks = (tasks) => {
    localStorage.setItem(KEY, JSON.stringify(tasks));
};

export const getTasks = () => {
    const data = localStorage.getItem(KEY);
    return data ? JSON.parse(data) : [];
};