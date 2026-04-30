export const renderTasks = (taskList, tasks, onCheck, onDelete) => {
    taskList.innerHTML = "";
    tasks.forEach(task => {
        const li = document.createElement("li");
        if (task.completed) li.classList.add("completed");

        li.innerHTML = `
            <span>${task.text}</span>
            <div>
                <button class="check-btn">✔</button>
                <button class="delete-btn">Eliminar</button>
            </div>
        `;

        // Asignar eventos a los botones recién creados
        li.querySelector(".check-btn").onclick = () => onCheck(task.id);
        li.querySelector(".delete-btn").onclick = () => onDelete(task.id);

        taskList.appendChild(li);
    });
};

export const updateCounter = (counterElement, tasks) => {
    const pending = tasks.filter(t => !t.completed).length;
    counterElement.textContent = `Tareas pendientes: ${pending}`;
};