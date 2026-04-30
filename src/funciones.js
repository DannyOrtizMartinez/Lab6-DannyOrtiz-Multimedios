import * as Storage from "./modules/storage.js";
import * as TaskLogic from "./modules/task.js";
import * as UI from "./modules/ui.js";

const input = document.querySelector("#taskInput");
const boton = document.querySelector("#addTaskBtn");
const lista = document.querySelector("#taskList");
const contador = document.querySelector("#contador");

// Función para refrescar toda la aplicación
const refresh = () => {
    UI.renderTasks(lista, TaskLogic.tasks, handleCheck, handleDelete);
    UI.updateCounter(contador, TaskLogic.tasks);
    Storage.saveTasks(TaskLogic.tasks);
};

// Manejadores de eventos
const handleAdd = () => {
    const text = input.value.trim();
    if (text === "") return alert("¡Escribe una tarea primero!");
    
    TaskLogic.addTask(text);
    input.value = "";
    input.focus();
    refresh();
};

const handleCheck = (id) => {
    TaskLogic.toggleTask(id);
    refresh();
};

const handleDelete = (id) => {
    TaskLogic.removeTask(id);
    refresh();
};

// Configuración inicial al cargar la página
const init = () => {
    const savedTasks = Storage.getTasks();
    TaskLogic.setTasks(savedTasks);
    refresh();
};

// Listeners
boton.onclick = handleAdd;
input.onkeydown = (e) => {
    if (e.key === "Enter") handleAdd();
};

// Arrancar la app
init();